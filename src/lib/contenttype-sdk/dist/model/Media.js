"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AbstractContentTypeSchemaDefinition = _interopRequireDefault(require("./AbstractContentTypeSchemaDefinition"));

var _AbstractContentTypeSchemaDefinitionInternal = _interopRequireDefault(require("./AbstractContentTypeSchemaDefinitionInternal"));

var _MediaAllOf = _interopRequireDefault(require("./MediaAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Media model module.
 * @module model/Media
 * @version 2.0.0
 */
var Media = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Media</code>.
   * @alias module:model/Media
   * @implements module:model/AbstractContentTypeSchemaDefinition
   * @implements module:model/MediaAllOf
   * @param id {String} 
   * @param url {String} 
   * @param size {Number} 
   * @param type {String} 
   * @param source {String} 
   * @param fileName {String} 
   * @param mimeType {String} 
   * @param extension {String} 
   */
  function Media(id, url, size, type, source, fileName, mimeType, extension) {
    _classCallCheck(this, Media);

    _AbstractContentTypeSchemaDefinition["default"].initialize(this, id);

    _MediaAllOf["default"].initialize(this);

    Media.initialize(this, id, url, size, type, source, fileName, mimeType, extension);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Media, null, [{
    key: "initialize",
    value: function initialize(obj, id, url, size, type, source, fileName, mimeType, extension) {
      obj['id'] = id;
      obj['url'] = url;
      obj['size'] = size;
      obj['type'] = type;
      obj['source'] = source;
      obj['fileName'] = fileName;
      obj['mimeType'] = mimeType;
      obj['extension'] = extension;
    }
    /**
     * Constructs a <code>Media</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Media} obj Optional instance to populate.
     * @return {module:model/Media} The populated <code>Media</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Media();

        _AbstractContentTypeSchemaDefinition["default"].constructFromObject(data, obj);

        _MediaAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('internal')) {
          obj['internal'] = _AbstractContentTypeSchemaDefinitionInternal["default"].constructFromObject(data['internal']);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _ApiClient["default"].convertToType(data['width'], 'Number');
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }

        if (data.hasOwnProperty('source')) {
          obj['source'] = _ApiClient["default"].convertToType(data['source'], 'String');
        }

        if (data.hasOwnProperty('fileName')) {
          obj['fileName'] = _ApiClient["default"].convertToType(data['fileName'], 'String');
        }

        if (data.hasOwnProperty('mimeType')) {
          obj['mimeType'] = _ApiClient["default"].convertToType(data['mimeType'], 'String');
        }

        if (data.hasOwnProperty('extension')) {
          obj['extension'] = _ApiClient["default"].convertToType(data['extension'], 'String');
        }

        if (data.hasOwnProperty('externalId')) {
          obj['externalId'] = _ApiClient["default"].convertToType(data['externalId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Media;
}();
/**
 * @member {String} id
 */


Media.prototype['id'] = undefined;
/**
 * @member {module:model/AbstractContentTypeSchemaDefinitionInternal} internal
 */

Media.prototype['internal'] = undefined;
/**
 * @member {String} url
 */

Media.prototype['url'] = undefined;
/**
 * @member {Number} size
 */

Media.prototype['size'] = undefined;
/**
 * @member {String} type
 */

Media.prototype['type'] = undefined;
/**
 * @member {Number} width
 */

Media.prototype['width'] = undefined;
/**
 * @member {Number} height
 */

Media.prototype['height'] = undefined;
/**
 * @member {String} source
 */

Media.prototype['source'] = undefined;
/**
 * @member {String} fileName
 */

Media.prototype['fileName'] = undefined;
/**
 * @member {String} mimeType
 */

Media.prototype['mimeType'] = undefined;
/**
 * @member {String} extension
 */

Media.prototype['extension'] = undefined;
/**
 * @member {String} externalId
 */

Media.prototype['externalId'] = undefined; // Implement AbstractContentTypeSchemaDefinition interface:

/**
 * @member {String} id
 */

_AbstractContentTypeSchemaDefinition["default"].prototype['id'] = undefined;
/**
 * @member {module:model/AbstractContentTypeSchemaDefinitionInternal} internal
 */

_AbstractContentTypeSchemaDefinition["default"].prototype['internal'] = undefined; // Implement MediaAllOf interface:

/**
 * @member {String} url
 */

_MediaAllOf["default"].prototype['url'] = undefined;
/**
 * @member {Number} size
 */

_MediaAllOf["default"].prototype['size'] = undefined;
/**
 * @member {String} type
 */

_MediaAllOf["default"].prototype['type'] = undefined;
/**
 * @member {Number} width
 */

_MediaAllOf["default"].prototype['width'] = undefined;
/**
 * @member {Number} height
 */

_MediaAllOf["default"].prototype['height'] = undefined;
/**
 * @member {String} source
 */

_MediaAllOf["default"].prototype['source'] = undefined;
/**
 * @member {String} fileName
 */

_MediaAllOf["default"].prototype['fileName'] = undefined;
/**
 * @member {String} mimeType
 */

_MediaAllOf["default"].prototype['mimeType'] = undefined;
/**
 * @member {String} extension
 */

_MediaAllOf["default"].prototype['extension'] = undefined;
/**
 * @member {String} externalId
 */

_MediaAllOf["default"].prototype['externalId'] = undefined;
var _default = Media;
exports["default"] = _default;