"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BatchResponse = _interopRequireDefault(require("../model/BatchResponse"));

var _Question = _interopRequireDefault(require("../model/Question"));

var _QuestionList = _interopRequireDefault(require("../model/QuestionList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ContentQuestions service.
* @module api/ContentQuestionsApi
* @version 2.0.0
*/
var ContentQuestionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ContentQuestionsApi. 
  * @alias module:api/ContentQuestionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ContentQuestionsApi(apiClient) {
    _classCallCheck(this, ContentQuestionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the batchCreatequestion operation.
   * @callback module:api/ContentQuestionsApi~batchCreatequestionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/BatchResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.updateExisting Overwrite existing objects
   * @param {Array.<module:model/Question>} opts.question 
   * @param {module:api/ContentQuestionsApi~batchCreatequestionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/BatchResponse}
   */


  _createClass(ContentQuestionsApi, [{
    key: "batchCreatequestion",
    value: function batchCreatequestion(opts, callback) {
      opts = opts || {};
      var postBody = opts['question'];
      var pathParams = {};
      var queryParams = {
        'updateExisting': opts['updateExisting']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _BatchResponse["default"];
      return this.apiClient.callApi('/api/v1/content/question/batch', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createquestion operation.
     * @callback module:api/ContentQuestionsApi~createquestionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Question} opts.question 
     * @param {module:api/ContentQuestionsApi~createquestionCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "createquestion",
    value: function createquestion(opts, callback) {
      opts = opts || {};
      var postBody = opts['question'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/api/v1/content/question', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deletequestion operation.
     * @callback module:api/ContentQuestionsApi~deletequestionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id ContentObject identifier
     * @param {module:api/ContentQuestionsApi~deletequestionCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deletequestion",
    value: function deletequestion(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deletequestion");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/api/v1/content/question/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getquestion operation.
     * @callback module:api/ContentQuestionsApi~getquestionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Question} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.hydrate Should hydrate relations of object
     * @param {module:api/ContentQuestionsApi~getquestionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Question}
     */

  }, {
    key: "getquestion",
    value: function getquestion(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getquestion");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'hydrate': opts['hydrate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Question["default"];
      return this.apiClient.callApi('/api/v1/content/question/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the questionList operation.
     * @callback module:api/ContentQuestionsApi~questionListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/QuestionList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.page Listing page number, 1-based
     * @param {String} opts.limit Page limit
     * @param {String} opts.orderBy Order by field
     * @param {String} opts.orderDirection Order direction
     * @param {String} opts.hydrate Should hydrate relations of object
     * @param {module:api/ContentQuestionsApi~questionListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/QuestionList}
     */

  }, {
    key: "questionList",
    value: function questionList(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'order_by': opts['orderBy'],
        'order_direction': opts['orderDirection'],
        'hydrate': opts['hydrate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _QuestionList["default"];
      return this.apiClient.callApi('/api/v1/content/question', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updatequestion operation.
     * @callback module:api/ContentQuestionsApi~updatequestionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/Question} opts.question 
     * @param {module:api/ContentQuestionsApi~updatequestionCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updatequestion",
    value: function updatequestion(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['question']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updatequestion");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/api/v1/content/question/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ContentQuestionsApi;
}();

exports["default"] = ContentQuestionsApi;