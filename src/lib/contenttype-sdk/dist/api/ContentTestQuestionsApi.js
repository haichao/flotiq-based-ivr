"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BatchResponse = _interopRequireDefault(require("../model/BatchResponse"));

var _Testquestion = _interopRequireDefault(require("../model/Testquestion"));

var _TestquestionList = _interopRequireDefault(require("../model/TestquestionList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ContentTestQuestions service.
* @module api/ContentTestQuestionsApi
* @version 2.0.0
*/
var ContentTestQuestionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ContentTestQuestionsApi. 
  * @alias module:api/ContentTestQuestionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ContentTestQuestionsApi(apiClient) {
    _classCallCheck(this, ContentTestQuestionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the batchCreatetestquestion operation.
   * @callback module:api/ContentTestQuestionsApi~batchCreatetestquestionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/BatchResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.updateExisting Overwrite existing objects
   * @param {Array.<module:model/Testquestion>} opts.testquestion 
   * @param {module:api/ContentTestQuestionsApi~batchCreatetestquestionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/BatchResponse}
   */


  _createClass(ContentTestQuestionsApi, [{
    key: "batchCreatetestquestion",
    value: function batchCreatetestquestion(opts, callback) {
      opts = opts || {};
      var postBody = opts['testquestion'];
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
      return this.apiClient.callApi('/api/v1/content/testquestion/batch', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createtestquestion operation.
     * @callback module:api/ContentTestQuestionsApi~createtestquestionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Testquestion} opts.testquestion 
     * @param {module:api/ContentTestQuestionsApi~createtestquestionCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "createtestquestion",
    value: function createtestquestion(opts, callback) {
      opts = opts || {};
      var postBody = opts['testquestion'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/api/v1/content/testquestion', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deletetestquestion operation.
     * @callback module:api/ContentTestQuestionsApi~deletetestquestionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id ContentObject identifier
     * @param {module:api/ContentTestQuestionsApi~deletetestquestionCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deletetestquestion",
    value: function deletetestquestion(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deletetestquestion");
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
      return this.apiClient.callApi('/api/v1/content/testquestion/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gettestquestion operation.
     * @callback module:api/ContentTestQuestionsApi~gettestquestionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Testquestion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.hydrate Should hydrate relations of object
     * @param {module:api/ContentTestQuestionsApi~gettestquestionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Testquestion}
     */

  }, {
    key: "gettestquestion",
    value: function gettestquestion(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling gettestquestion");
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
      var returnType = _Testquestion["default"];
      return this.apiClient.callApi('/api/v1/content/testquestion/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the testquestionList operation.
     * @callback module:api/ContentTestQuestionsApi~testquestionListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TestquestionList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.page Listing page number, 1-based
     * @param {String} opts.limit Page limit
     * @param {String} opts.orderBy Order by field
     * @param {String} opts.orderDirection Order direction
     * @param {String} opts.hydrate Should hydrate relations of object
     * @param {module:api/ContentTestQuestionsApi~testquestionListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TestquestionList}
     */

  }, {
    key: "testquestionList",
    value: function testquestionList(opts, callback) {
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
      var returnType = _TestquestionList["default"];
      return this.apiClient.callApi('/api/v1/content/testquestion', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updatetestquestion operation.
     * @callback module:api/ContentTestQuestionsApi~updatetestquestionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/Testquestion} opts.testquestion 
     * @param {module:api/ContentTestQuestionsApi~updatetestquestionCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updatetestquestion",
    value: function updatetestquestion(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['testquestion']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updatetestquestion");
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
      return this.apiClient.callApi('/api/v1/content/testquestion/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ContentTestQuestionsApi;
}();

exports["default"] = ContentTestQuestionsApi;