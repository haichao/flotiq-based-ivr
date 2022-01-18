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
 * The AbstractPropertiesConfigValidation model module.
 * @module model/AbstractPropertiesConfigValidation
 * @version 2.0.0
 */
var AbstractPropertiesConfigValidation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AbstractPropertiesConfigValidation</code>.
   * @alias module:model/AbstractPropertiesConfigValidation
   */
  function AbstractPropertiesConfigValidation() {
    _classCallCheck(this, AbstractPropertiesConfigValidation);

    AbstractPropertiesConfigValidation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AbstractPropertiesConfigValidation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AbstractPropertiesConfigValidation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AbstractPropertiesConfigValidation} obj Optional instance to populate.
     * @return {module:model/AbstractPropertiesConfigValidation} The populated <code>AbstractPropertiesConfigValidation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AbstractPropertiesConfigValidation();

        if (data.hasOwnProperty('relationMultiple')) {
          obj['relationMultiple'] = _ApiClient["default"].convertToType(data['relationMultiple'], 'Boolean');
        }

        if (data.hasOwnProperty('relationContenttype')) {
          obj['relationContenttype'] = _ApiClient["default"].convertToType(data['relationContenttype'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AbstractPropertiesConfigValidation;
}();
/**
 * @member {Boolean} relationMultiple
 */


AbstractPropertiesConfigValidation.prototype['relationMultiple'] = undefined;
/**
 * @member {String} relationContenttype
 */

AbstractPropertiesConfigValidation.prototype['relationContenttype'] = undefined;
var _default = AbstractPropertiesConfigValidation;
exports["default"] = _default;