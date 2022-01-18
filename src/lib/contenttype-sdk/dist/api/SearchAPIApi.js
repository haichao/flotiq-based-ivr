"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SearchResponse = _interopRequireDefault(require("../model/SearchResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* SearchAPI service.
* @module api/SearchAPIApi
* @version 2.0.0
*/
var SearchAPIApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SearchAPIApi. 
  * @alias module:api/SearchAPIApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SearchAPIApi(apiClient) {
    _classCallCheck(this, SearchAPIApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the search operation.
   * @callback module:api/SearchAPIApi~searchCallback
   * @param {String} error Error message, if any.
   * @param {module:model/SearchResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Endpoint for search Queries for Headless Types
   * @param {Object} opts Optional parameters
   * @param {String} opts.q Query
   * @param {Array.<String>} opts.fields Search only in selected fields. Default: title, rawContent
   * @param {String} opts.page Listing page number, 1-based
   * @param {String} opts.limit Page limit
   * @param {String} opts.orderBy Order by field
   * @param {String} opts.orderDirection Order direction
   * @param {Array.<String>} opts.contentType Restrict search to content types set
   * @param {Array.<String>} opts.aggregateBy Field to aggregate results direction
   * @param {Object} opts.filters Filter by object properties. Expected format: {property1: value1, property2: value2}
   * @param {Object} opts.postFilters Filter by object properties. Use it when you want aggregated counts without filters applied. Expected format: {property1: value1, property2: value2}
   * @param {module:api/SearchAPIApi~searchCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/SearchResponse}
   */


  _createClass(SearchAPIApi, [{
    key: "search",
    value: function search(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'q': opts['q'],
        'fields[]': this.apiClient.buildCollectionParam(opts['fields'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'order_by': opts['orderBy'],
        'order_direction': opts['orderDirection'],
        'content_type[]': this.apiClient.buildCollectionParam(opts['contentType'], 'multi'),
        'aggregate_by[]': this.apiClient.buildCollectionParam(opts['aggregateBy'], 'multi'),
        'filters': opts['filters'],
        'post_filters': opts['postFilters']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SearchResponse["default"];
      return this.apiClient.callApi('/api/v1/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SearchAPIApi;
}();

exports["default"] = SearchAPIApi;