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
 * The MediaAllOf model module.
 * @module model/MediaAllOf
 * @version 2.0.0
 */
var MediaAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MediaAllOf</code>.
   * @alias module:model/MediaAllOf
   */
  function MediaAllOf() {
    _classCallCheck(this, MediaAllOf);

    MediaAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MediaAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MediaAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MediaAllOf} obj Optional instance to populate.
     * @return {module:model/MediaAllOf} The populated <code>MediaAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MediaAllOf();

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

  return MediaAllOf;
}();
/**
 * @member {String} url
 */


MediaAllOf.prototype['url'] = undefined;
/**
 * @member {Number} size
 */

MediaAllOf.prototype['size'] = undefined;
/**
 * @member {String} type
 */

MediaAllOf.prototype['type'] = undefined;
/**
 * @member {Number} width
 */

MediaAllOf.prototype['width'] = undefined;
/**
 * @member {Number} height
 */

MediaAllOf.prototype['height'] = undefined;
/**
 * @member {String} source
 */

MediaAllOf.prototype['source'] = undefined;
/**
 * @member {String} fileName
 */

MediaAllOf.prototype['fileName'] = undefined;
/**
 * @member {String} mimeType
 */

MediaAllOf.prototype['mimeType'] = undefined;
/**
 * @member {String} extension
 */

MediaAllOf.prototype['extension'] = undefined;
/**
 * @member {String} externalId
 */

MediaAllOf.prototype['externalId'] = undefined;
var _default = MediaAllOf;
exports["default"] = _default;