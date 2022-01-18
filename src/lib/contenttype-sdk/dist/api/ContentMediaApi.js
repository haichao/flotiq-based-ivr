"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BatchResponse = _interopRequireDefault(require("../model/BatchResponse"));

var _Media = _interopRequireDefault(require("../model/Media"));

var _MediaList = _interopRequireDefault(require("../model/MediaList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ContentMedia service.
* @module api/ContentMediaApi
* @version 2.0.0
*/
var ContentMediaApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ContentMediaApi. 
  * @alias module:api/ContentMediaApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ContentMediaApi(apiClient) {
    _classCallCheck(this, ContentMediaApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the batchCreateMedia operation.
   * @callback module:api/ContentMediaApi~batchCreateMediaCallback
   * @param {String} error Error message, if any.
   * @param {module:model/BatchResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.updateExisting Overwrite existing objects
   * @param {Array.<module:model/Media>} opts.media 
   * @param {module:api/ContentMediaApi~batchCreateMediaCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/BatchResponse}
   */


  _createClass(ContentMediaApi, [{
    key: "batchCreateMedia",
    value: function batchCreateMedia(opts, callback) {
      opts = opts || {};
      var postBody = opts['media'];
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
      return this.apiClient.callApi('/api/v1/content/_media/batch', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createMedia operation.
     * @callback module:api/ContentMediaApi~createMediaCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Media} opts.media 
     * @param {module:api/ContentMediaApi~createMediaCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "createMedia",
    value: function createMedia(opts, callback) {
      opts = opts || {};
      var postBody = opts['media'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/api/v1/content/_media', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteMedia operation.
     * @callback module:api/ContentMediaApi~deleteMediaCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id ContentObject identifier
     * @param {module:api/ContentMediaApi~deleteMediaCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteMedia",
    value: function deleteMedia(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteMedia");
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
      return this.apiClient.callApi('/api/v1/content/_media/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getMedia operation.
     * @callback module:api/ContentMediaApi~getMediaCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Media} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.hydrate Should hydrate relations of object
     * @param {module:api/ContentMediaApi~getMediaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Media}
     */

  }, {
    key: "getMedia",
    value: function getMedia(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getMedia");
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
      var returnType = _Media["default"];
      return this.apiClient.callApi('/api/v1/content/_media/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the mediaList operation.
     * @callback module:api/ContentMediaApi~mediaListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MediaList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.page Listing page number, 1-based
     * @param {String} opts.limit Page limit
     * @param {String} opts.orderBy Order by field
     * @param {String} opts.orderDirection Order direction
     * @param {String} opts.hydrate Should hydrate relations of object
     * @param {module:api/ContentMediaApi~mediaListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MediaList}
     */

  }, {
    key: "mediaList",
    value: function mediaList(opts, callback) {
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
      var returnType = _MediaList["default"];
      return this.apiClient.callApi('/api/v1/content/_media', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateMedia operation.
     * @callback module:api/ContentMediaApi~updateMediaCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/Media} opts.media 
     * @param {module:api/ContentMediaApi~updateMediaCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateMedia",
    value: function updateMedia(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['media']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateMedia");
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
      return this.apiClient.callApi('/api/v1/content/_media/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ContentMediaApi;
}();

exports["default"] = ContentMediaApi;