import {
  ApiClient,
  ContentTestQuestionsApi,
  ContentQuestionsApi
} from "../lib/contenttype-sdk/src";
import { log } from "../lib/logService";
const CONTENT_TYPE =
  window.location.href.indexOf("prod=1") === -1 ? "testquestion" : "question";

const API_TOKEN =
  localStorage.apiKey ||
  (localStorage.apiKey =
    prompt("Please, provide an api key") || "352b96f212b568fdc72a08abd6e8fea5");

const DRY_RUN = window.location.href.indexOf("dry-run") > -1;

let defaultClient = ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications["HeaderApiKeyAuth"];
HeaderApiKeyAuth.apiKey = API_TOKEN;

let apiInstance =
  CONTENT_TYPE === "question"
    ? new ContentQuestionsApi()
    : new ContentTestQuestionsApi();

let _questions = new Promise((res, rej) => {
  apiInstance[`${CONTENT_TYPE}List`]({}, (error, data, response) => {
    if (error) {
      rej(error);
    } else {
      res(data);
    }
  });
}).then(data => data.data);

let questionIndex = _questions.then(questionsData =>
  questionsData.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {})
);

let questions = Promise.all([_questions, questionIndex]).then(
  ([data, dataIndex]) => {
    data.forEach(item => {
      // if (typeof item.answers === "string")
      //   item.answers = item.answers.split(/\r?\n/);

      if (item.nextQuestions) {
        item.nextQuestions = item.nextQuestions.map(nq => {
          return dataIndex[
            nq.dataUrl.match(new RegExp(`${CONTENT_TYPE}-.*`))[0]
          ];
        });
      }
    });
    return data;
  }
);

let questionsByType = questions.then(questions =>
  questions.reduce((acc, question) => {
    if (!acc[question.type]) acc[question.type] = [];
    acc[question.type].push(question);
    return acc;
  }, {})
);
questions.then(function() {
  if (DRY_RUN)
    log(
      "[dry-run] The app is in dry-run mode. No changes will be saved to flotiq."
    );
});
class Persistance {
  static async mergeQuestion(question) {
    const dynamicFields = ["type", "text", "answers"];
    let index = await questionIndex;
    if (!index[question.id]) {
      log("creating question", question.id);
      //await push changes remote
      if (!DRY_RUN) {
        await new Promise((res, rej) => {
          apiInstance[`create${CONTENT_TYPE}`](
            { [CONTENT_TYPE]: question },
            (error, data, response) => {
              if (error) {
                console.error(error);
              } else {
                log("Question", question.id, "created");
                res(data);
              }
            }
          );
        });
      } else {
        log("[dry-run] Question", question.id, "created");
      }

      //push changes local
      // the question needs to be added to each of
      // the local managed structures (question list, question by index, question by type)
      let questionsList = await questions;
      let typeIndex = await questionsByType;
      if (!typeIndex[question.type]) typeIndex[question.type] = [];

      index[question.id] = question;
      questionsList.push(question);
      typeIndex[question.type].push(question);
    } else {
      let dataPush = { id: question.id };

      dynamicFields.forEach(fieldName => {
        if (index[question.id][fieldName] !== question[fieldName]) {
          dataPush[fieldName] = question[fieldName];
        }
      });

      if (Object.keys(dataPush).length > 1) {
        log("Updating question", question.id);
        //await push changes remote
        if (!DRY_RUN) {
          await new Promise((res, rej) => {
            apiInstance[`update${CONTENT_TYPE}`](
              question.id,
              { [CONTENT_TYPE]: question },
              (error, data, response) => {
                if (error) {
                  console.error(error);
                } else {
                  log("Question", question.id, "updated");
                  res(data);
                }
              }
            );
          });
        } else {
          log("[dry-run] Question", question.id, "updated");
        }
        //push changes local
        for (let key in dataPush) {
          index[question.id][key] = dataPush[key];
        }
      }
    }
  }

  static async mergeQuestionRelations(questionId, nextQuestionsIds) {
    let index = await questionIndex;
    let persistConnections = false;

    let question = index[questionId];
    if (!question.nextQuestions) question.nextQuestions = [];
    if (
      nextQuestionsIds.length === 0 &&
      (!question.nextQuestions || question.nextQuestions.length === 0)
    )
      return;
    question.nextQuestions.forEach((nq, index) => {
      if (nq.id !== nextQuestionsIds[index]) {
        if (nextQuestionsIds[index])
          log("Connection", index, "changed in", questionId);
        else log("Connection", index, "was removed from", questionId);
        persistConnections = true;
      }
    });

    nextQuestionsIds.forEach((nqId, index) => {
      if (
        !question.nextQuestions[index] ||
        nqId !== question.nextQuestions[index].id
      ) {
        if (!question.nextQuestions[index])
          log("Connection", index, "added in", questionId);
        persistConnections = true;
      }
    });
    if (!persistConnections) return;
    log("Updating relations", questionId);
    //await push changes remote
    if (!DRY_RUN) {
      await new Promise((res, rej) => {
        apiInstance[`update${CONTENT_TYPE}`](
          questionId,
          {
            [CONTENT_TYPE]: {
              ...question,
              nextQuestions: nextQuestionsIds.map(id => {
                return {
                  type: "internal",
                  dataUrl: `/api/v1/content/${CONTENT_TYPE}/${id}`
                };
              })
            }
          },
          (error, data, response) => {
            if (error) {
              console.error(error);
            } else {
              log("Question", question.id, "relations updated");
              res(data);
            }
          }
        );
      });
    } else {
      log("[dry-run] Question", question.id, "relations updated");
    }
    //push changes local
    question.nextQuestions.length = 0;
    nextQuestionsIds.forEach(nqId => {
      question.nextQuestions.push(index[nqId]);
    });
  }

  static async removeQuestion(questionId) {
    let [questionsData, dataIndex, dataByType] = await Promise.all([
      questions,
      questionIndex,
      questionsByType
    ]);

    if (!dataIndex[questionId]) return;
    log("Removing", questionId);
    //await apply deletes remotely
    if (!DRY_RUN) {
      await new Promise((res, rej) => {
        apiInstance[`delete${CONTENT_TYPE}`](
          questionId,
          (error, data, response) => {
            if (error) {
              console.error(error);
            } else {
              log("Question", questionId, "was removed");
              res(data);
            }
          }
        );
      });
    } else {
      log("[dry-run] Question", questionId, "was removed");
    }
    //apply deletes locally
    // the question needs to be removed from each of
    // the local managed structures (question list, question by index, question by type)

    let question = dataIndex[questionId];
    delete dataIndex[questionId];

    let typeIndex = dataByType[question.type].indexOf(question);
    if (typeIndex >= 0) {
      dataByType[question.type].splice(typeIndex, 1);
    }

    let listIndex = questionsData.indexOf(question);
    if (listIndex >= 0) {
      questionsData.splice(listIndex, 1);
    }
  }
}

function getNewId() {
  return `${CONTENT_TYPE}-editor-${Math.round(
    Math.random() * 99999
  )}-${new Date().getTime()}`;
}

export default questions;
export { questions, questionsByType, Persistance, getNewId };
