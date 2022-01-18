"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ContentTypeDefinitionSchema = _interopRequireDefault(require("../model/ContentTypeDefinitionSchema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Internal service.
* @module api/InternalApi
* @version 2.0.0
*/
var InternalApi = /*#__PURE__*/function () {
  /**
  * Constructs a new InternalApi. 
  * @alias module:api/InternalApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function InternalApi(apiClient) {
    _classCallCheck(this, InternalApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deleteContentDefinition operation.
   * @callback module:api/InternalApi~deleteContentDefinitionCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete ConentTypeDefinition
   * @param {String} id Id of content type definition
   * @param {module:api/InternalApi~deleteContentDefinitionCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(InternalApi, [{
    key: "deleteContentDefinition",
    value: function deleteContentDefinition(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteContentDefinition");
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
      return this.apiClient.callApi('/api/v1/internal/contenttype/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getContentDefinition operation.
     * @callback module:api/InternalApi~getContentDefinitionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns an user-defined Content Definitions
     * @param {String} id Id of content type definition
     * @param {module:api/InternalApi~getContentDefinitionCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getContentDefinition",
    value: function getContentDefinition(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getContentDefinition");
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
      return this.apiClient.callApi('/api/v1/internal/contenttype/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getContentDefinitions operation.
     * @callback module:api/InternalApi~getContentDefinitionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ContentTypeDefinitionSchema>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns an array of user-defined Content Definitions
     * @param {module:api/InternalApi~getContentDefinitionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ContentTypeDefinitionSchema>}
     */

  }, {
    key: "getContentDefinitions",
    value: function getContentDefinitions(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ContentTypeDefinitionSchema["default"]];
      return this.apiClient.callApi('/api/v1/internal/contenttype', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postContentDefinition operation.
     * @callback module:api/InternalApi~postContentDefinitionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new ConentTypeDefinition to store new type of ContentObjects
     * @param {Object} opts Optional parameters
     * @param {module:model/ContentTypeDefinitionSchema} opts.contentTypeDefinitionSchema 
     * @param {module:api/InternalApi~postContentDefinitionCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "postContentDefinition",
    value: function postContentDefinition(opts, callback) {
      opts = opts || {};
      var postBody = opts['contentTypeDefinitionSchema'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/api/v1/internal/contenttype', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putContentDefinition operation.
     * @callback module:api/InternalApi~putContentDefinitionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update ConentTypeDefinition
     * @param {String} id Id of content type definition
     * @param {Object} opts Optional parameters
     * @param {module:model/ContentTypeDefinitionSchema} opts.contentTypeDefinitionSchema 
     * @param {module:api/InternalApi~putContentDefinitionCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "putContentDefinition",
    value: function putContentDefinition(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['contentTypeDefinitionSchema']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putContentDefinition");
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
      return this.apiClient.callApi('/api/v1/internal/contenttype/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return InternalApi;
}();

exports["default"] = InternalApi;