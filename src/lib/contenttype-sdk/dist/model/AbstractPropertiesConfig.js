"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AbstractPropertiesConfigValidation = _interopRequireDefault(require("./AbstractPropertiesConfigValidation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AbstractPropertiesConfig model module.
 * @module model/AbstractPropertiesConfig
 * @version 2.0.0
 */
var AbstractPropertiesConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AbstractPropertiesConfig</code>.
   * @alias module:model/AbstractPropertiesConfig
   * @param inputType {module:model/AbstractPropertiesConfig.InputTypeEnum} 
   * @param unique {Boolean} 
   */
  function AbstractPropertiesConfig(inputType, unique) {
    _classCallCheck(this, AbstractPropertiesConfig);

    AbstractPropertiesConfig.initialize(this, inputType, unique);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AbstractPropertiesConfig, null, [{
    key: "initialize",
    value: function initialize(obj, inputType, unique) {
      obj['inputType'] = inputType;
      obj['unique'] = unique;
    }
    /**
     * Constructs a <code>AbstractPropertiesConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AbstractPropertiesConfig} obj Optional instance to populate.
     * @return {module:model/AbstractPropertiesConfig} The populated <code>AbstractPropertiesConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AbstractPropertiesConfig();

        if (data.hasOwnProperty('inputType')) {
          obj['inputType'] = _ApiClient["default"].convertToType(data['inputType'], 'String');
        }

        if (data.hasOwnProperty('unique')) {
          obj['unique'] = _ApiClient["default"].convertToType(data['unique'], 'Boolean');
        }

        if (data.hasOwnProperty('readonly')) {
          obj['readonly'] = _ApiClient["default"].convertToType(data['readonly'], 'Boolean');
        }

        if (data.hasOwnProperty('hidden')) {
          obj['hidden'] = _ApiClient["default"].convertToType(data['hidden'], 'Boolean');
        }

        if (data.hasOwnProperty('validation')) {
          obj['validation'] = _AbstractPropertiesConfigValidation["default"].constructFromObject(data['validation']);
        }

        if (data.hasOwnProperty('options')) {
          obj['options'] = _ApiClient["default"].convertToType(data['options'], ['String']);
        }

        if (data.hasOwnProperty('helpText')) {
          obj['helpText'] = _ApiClient["default"].convertToType(data['helpText'], 'String');
        }

        if (data.hasOwnProperty('isTitlePart')) {
          obj['isTitlePart'] = _ApiClient["default"].convertToType(data['isTitlePart'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return AbstractPropertiesConfig;
}();
/**
 * @member {module:model/AbstractPropertiesConfig.InputTypeEnum} inputType
 */


AbstractPropertiesConfig.prototype['inputType'] = undefined;
/**
 * @member {Boolean} unique
 */

AbstractPropertiesConfig.prototype['unique'] = undefined;
/**
 * @member {Boolean} readonly
 */

AbstractPropertiesConfig.prototype['readonly'] = undefined;
/**
 * @member {Boolean} hidden
 */

AbstractPropertiesConfig.prototype['hidden'] = undefined;
/**
 * @member {module:model/AbstractPropertiesConfigValidation} validation
 */

AbstractPropertiesConfig.prototype['validation'] = undefined;
/**
 * @member {Array.<String>} options
 */

AbstractPropertiesConfig.prototype['options'] = undefined;
/**
 * @member {String} helpText
 */

AbstractPropertiesConfig.prototype['helpText'] = undefined;
/**
 * @member {Boolean} isTitlePart
 */

AbstractPropertiesConfig.prototype['isTitlePart'] = undefined;
/**
 * Allowed values for the <code>inputType</code> property.
 * @enum {String}
 * @readonly
 */

AbstractPropertiesConfig['InputTypeEnum'] = {
  /**
   * value: "text"
   * @const
   */
  "text": "text",

  /**
   * value: "richtext"
   * @const
   */
  "richtext": "richtext",

  /**
   * value: "textarea"
   * @const
   */
  "textarea": "textarea",

  /**
   * value: "email"
   * @const
   */
  "email": "email",

  /**
   * value: "number"
   * @const
   */
  "number": "number",

  /**
   * value: "radio"
   * @const
   */
  "radio": "radio",

  /**
   * value: "checkbox"
   * @const
   */
  "checkbox": "checkbox",

  /**
   * value: "select"
   * @const
   */
  "select": "select",

  /**
   * value: "datasource"
   * @const
   */
  "datasource": "datasource"
};
var _default = AbstractPropertiesConfig;
exports["default"] = _default;