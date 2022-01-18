"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Media service.
* @module api/MediaApi
* @version 2.0.0
*/
var MediaApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MediaApi. 
  * @alias module:api/MediaApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MediaApi(apiClient) {
    _classCallCheck(this, MediaApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getMedia operation.
   * @callback module:api/MediaApi~getMediaCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get single media file
   * @param {String} widthHeight Expected format: WIDTHxHEIGHT, for example 750x200. Width of the image, or 0 when the file is not an image or it should have original uploaded width, or it should be scaled proportionally with height specified. Height of the image, or 0 when the file is not an image or it should have original uploaded height, or it should be scaled proportionally with width specified
   * @param {String} key Key of the file, it is made from id and extension, e.g. _media-4564.jpg for image with id _media-4564 and jpg extension
   * @param {module:api/MediaApi~getMediaCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(MediaApi, [{
    key: "getMedia",
    value: function getMedia(widthHeight, key, callback) {
      var postBody = null; // verify the required parameter 'widthHeight' is set

      if (widthHeight === undefined || widthHeight === null) {
        throw new Error("Missing the required parameter 'widthHeight' when calling getMedia");
      } // verify the required parameter 'key' is set


      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling getMedia");
      }

      var pathParams = {
        'width_height': widthHeight,
        'key': key
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/image/{width_height}/{key}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postMedia operation.
     * @callback module:api/MediaApi~postMediaCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Endpoint for media files upload
     * @param {File} file File to upload
     * @param {module:model/String} type Type of file image|file
     * @param {module:api/MediaApi~postMediaCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "postMedia",
    value: function postMedia(file, type, callback) {
      var postBody = null; // verify the required parameter 'file' is set

      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling postMedia");
      } // verify the required parameter 'type' is set


      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling postMedia");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'file': file,
        'type': type
      };
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = ['multipart/form-data'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/api/media', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return MediaApi;
}();

exports["default"] = MediaApi;