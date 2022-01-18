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
 * The DataSource model module.
 * @module model/DataSource
 * @version 2.0.0
 */
var DataSource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DataSource</code>.
   * Represents link between data stored internally inside CMS or external
   * @alias module:model/DataSource
   * @param dataUrl {String} 
   * @param type {module:model/DataSource.TypeEnum} 
   */
  function DataSource(dataUrl, type) {
    _classCallCheck(this, DataSource);

    DataSource.initialize(this, dataUrl, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DataSource, null, [{
    key: "initialize",
    value: function initialize(obj, dataUrl, type) {
      obj['dataUrl'] = dataUrl;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>DataSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DataSource} obj Optional instance to populate.
     * @return {module:model/DataSource} The populated <code>DataSource</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DataSource();

        if (data.hasOwnProperty('dataUrl')) {
          obj['dataUrl'] = _ApiClient["default"].convertToType(data['dataUrl'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DataSource;
}();
/**
 * @member {String} dataUrl
 */


DataSource.prototype['dataUrl'] = undefined;
/**
 * @member {module:model/DataSource.TypeEnum} type
 */

DataSource.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

DataSource['TypeEnum'] = {
  /**
   * value: "internal"
   * @const
   */
  "internal": "internal",

  /**
   * value: "external"
   * @const
   */
  "external": "external"
};
var _default = DataSource;
exports["default"] = _default;