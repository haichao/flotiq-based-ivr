import Rete from "rete";
import * as VueRenderPlugin from "rete-vue-render-plugin";
import * as ConnectionPlugin from "rete-connection-plugin";
import ConnectionPathPlugin from "rete-connection-path-plugin";

import AreaPlugin from "rete-area-plugin";
import * as ContextMenuPlugin from "rete-context-menu-plugin";
import HistoryPlugin from "rete-history-plugin";
import MinimapPlugin from "minimap-twintwoo";

import IvrArrangePlugin from "../plugins/ivr-arrange-plugin";

import SwitchComponent from "./ViewModels/SwitchComponent";
import EndCallComponent from "./ViewModels/EndCallComponent";

import SideBar from "./SideBar.vue";

import { questions, Persistance } from "../data/questions-vault";

import { chatEvents, nextMessage } from "../lib/chatService";
import { AbstractContentTypeSchemaDefinition } from "../lib/contenttype-sdk/src";

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}
// APP
export default {
  name: "app",
  components: {
    SideBar: SideBar
  },
  data: () => {
    return {
      saveDisabled: false
    };
  },
  methods: {
    calculateNodeType(node) {
      if (node.name.toLowerCase() === "end call") return "end";
      if (
        node.inputs.get("dialog") &&
        node.inputs.get("dialog").connections.length
      )
        return "question";

      return "start";
    },
    focusOnNode(node) {
      this.editor.selectNode(node);
      this.editor.view.container.children[0].style.transition = "transform 1s";
      AreaPlugin.zoomAt(this.editor, [node]);
      setTimeout(() => {
        this.editor.view.container.children[0].style.transition = "";
      }, 1000);
    },
    async onChatMessate(message) {
      if (message === "start") {
        let aborting = this.engine.abort();
        //postMessage();
        await aborting;
        await this.engine
          .process(this.editor.toJSON(), null, nextMessage, (node) => {
            this.focusOnNode(node);
          })
          .then(() => {});
      }
    },
    async onSaveChanges() {
      let seenQuestions = {};
      this.saveDisabled = true;
      try {
        await asyncForEach(this.editor.nodes, async (node) => {
          seenQuestions[node.data.questionId] = true;
          await Persistance.mergeQuestion({
            id: node.data.questionId,
            answers: node.data.expectedResponses || " ",
            text: node.data.prompt,
            type: this.calculateNodeType(node)
          });
        });

        await asyncForEach(this.editor.nodes, async (node) => {
          let nextQuestionsIds = [];
          node.outputs.forEach((output) => {
            if (!output.connections.length) return;
            if (output.name === "dialog0") return;

            nextQuestionsIds.push(
              output.connections[0].input.node.data.questionId
            );
          });
          await Persistance.mergeQuestionRelations(
            node.data.questionId,
            nextQuestionsIds
          );
        });

        await asyncForEach(this.questionsData, async (question) => {
          if (seenQuestions[question.id]) return;

          await Persistance.removeQuestion(question.id);
        });
      } finally {
        this.saveDisabled = false;
      }
    }
  },
  async mounted() {
    chatEvents.on("message", (message) => {
      this.onChatMessate(message);
    });

    var container = document.querySelector("#rete");

    var components = [new SwitchComponent(), new EndCallComponent()];

    let [switchComponent, endCallComponent] = components;

    this.editor = new Rete.NodeEditor("demo@0.1.0", container);
    this.editor.use(ConnectionPlugin.default);
    this.editor.use(ConnectionPathPlugin, {
      curve: ConnectionPathPlugin.curveStep
    });
    this.editor.use(VueRenderPlugin.default);
    this.editor.use(ContextMenuPlugin.default);
    this.editor.use(AreaPlugin, { scaleExtent: { min: 0.1, max: 1 } });

    this.editor.use(HistoryPlugin);
    this.editor.use(MinimapPlugin);

    this.editor.use(IvrArrangePlugin, { margin: { x: 150, y: 50 }, depth: 0 });

    this.engine = new Rete.Engine("demo@0.1.0");

    components.forEach((c) => {
      this.editor.register(c);
      this.engine.register(c);
    });

    let startNode;
    this.questionsData = await questions;
    this.dataNodes = {};

    for (let i = 0; i < this.questionsData.length; i++) {
      let question = this.questionsData[i];
      if (question.type === "start") startNode = question;
      if (question.type === "question" || question.type === "start") {
        this.dataNodes[question.id] = await switchComponent.createNode({
          expectedResponses: question.answers,
          prompt: question.text,
          questionId: question.id,
          questionType: question.type
        });
        switchComponent.setOutputCount(
          question.answers,
          this.dataNodes[question.id]
        );
        this.editor.addNode(this.dataNodes[question.id]);
      }

      if (question.type === "end") {
        this.dataNodes[question.id] = await endCallComponent.createNode({
          prompt: question.text,
          expectedResponses: question.answers,
          questionId: question.id,
          questionType: question.type
        });
        this.editor.addNode(this.dataNodes[question.id]);
      }
    }

    for (let i = 0; i < this.questionsData.length; i++) {
      let question = this.questionsData[i];
      if (!question.nextQuestions) continue;

      for (let j = 0; j < question.nextQuestions.length; j++) {
        let nextQuestion = question.nextQuestions[j];

        this.editor.connect(
          this.dataNodes[question.id].outputs.get("dialog" + (j + 1)),
          this.dataNodes[nextQuestion.id].inputs.get("dialog")
        );
      }
    }

    this.editor.trigger("ivr-arrange", { node: this.dataNodes[startNode.id] });
    this.editor.view.resize();
    AreaPlugin.zoomAt(this.editor);
    this.editor.on(
      "process nodecreated noderemoved connectioncreated connectionremoved",
      async (nextMessage) => {
        if (typeof nextMessage !== "function") return;
        await this.engine.abort();
        await this.engine.process(this.editor.toJSON());
      }
    );

    window.editor = this.editor;
    window.engine = this.engine;
  }
};
