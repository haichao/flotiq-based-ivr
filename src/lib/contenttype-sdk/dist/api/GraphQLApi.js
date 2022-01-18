"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* GraphQL service.
* @module api/GraphQLApi
* @version 2.0.0
*/
var GraphQLApi = /*#__PURE__*/function () {
  /**
  * Constructs a new GraphQLApi. 
  * @alias module:api/GraphQLApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function GraphQLApi(apiClient) {
    _classCallCheck(this, GraphQLApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the graphQL operation.
   * @callback module:api/GraphQLApi~graphQLCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Endpoint for GraphQL Queries for Headless Types
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject} opts.inlineObject 
   * @param {module:api/GraphQLApi~graphQLCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(GraphQLApi, [{
    key: "graphQL",
    value: function graphQL(opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/api/graphql', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the graphQLSchema operation.
     * @callback module:api/GraphQLApi~graphQLSchemaCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current descripion of GraphQL Schema
     * @param {module:api/GraphQLApi~graphQLSchemaCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "graphQLSchema",
    value: function graphQLSchema(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/api/graphql/schema', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return GraphQLApi;
}();

exports["default"] = GraphQLApi;