"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AbstractPropertiesConfig = _interopRequireDefault(require("./AbstractPropertiesConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AbstractContentTypeMetaDefinition model module.
 * @module model/AbstractContentTypeMetaDefinition
 * @version 2.0.0
 */
var AbstractContentTypeMetaDefinition = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AbstractContentTypeMetaDefinition</code>.
   * Meta definition to describe schema - add unique, fields labels
   * @alias module:model/AbstractContentTypeMetaDefinition
   * @param propertiesConfig {Object.<String, module:model/AbstractPropertiesConfig>} 
   * @param order {Array.<String>} 
   */
  function AbstractContentTypeMetaDefinition(propertiesConfig, order) {
    _classCallCheck(this, AbstractContentTypeMetaDefinition);

    AbstractContentTypeMetaDefinition.initialize(this, propertiesConfig, order);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AbstractContentTypeMetaDefinition, null, [{
    key: "initialize",
    value: function initialize(obj, propertiesConfig, order) {
      obj['propertiesConfig'] = propertiesConfig;
      obj['order'] = order;
    }
    /**
     * Constructs a <code>AbstractContentTypeMetaDefinition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AbstractContentTypeMetaDefinition} obj Optional instance to populate.
     * @return {module:model/AbstractContentTypeMetaDefinition} The populated <code>AbstractContentTypeMetaDefinition</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AbstractContentTypeMetaDefinition();

        if (data.hasOwnProperty('propertiesConfig')) {
          obj['propertiesConfig'] = _ApiClient["default"].convertToType(data['propertiesConfig'], {
            'String': _AbstractPropertiesConfig["default"]
          });
        }

        if (data.hasOwnProperty('order')) {
          obj['order'] = _ApiClient["default"].convertToType(data['order'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return AbstractContentTypeMetaDefinition;
}();
/**
 * @member {Object.<String, module:model/AbstractPropertiesConfig>} propertiesConfig
 */


AbstractContentTypeMetaDefinition.prototype['propertiesConfig'] = undefined;
/**
 * @member {Array.<String>} order
 */

AbstractContentTypeMetaDefinition.prototype['order'] = undefined;
var _default = AbstractContentTypeMetaDefinition;
exports["default"] = _default;