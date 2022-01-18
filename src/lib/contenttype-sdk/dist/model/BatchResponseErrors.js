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
 * The BatchResponseErrors model module.
 * @module model/BatchResponseErrors
 * @version 2.0.0
 */
var BatchResponseErrors = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BatchResponseErrors</code>.
   * @alias module:model/BatchResponseErrors
   */
  function BatchResponseErrors() {
    _classCallCheck(this, BatchResponseErrors);

    BatchResponseErrors.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BatchResponseErrors, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BatchResponseErrors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchResponseErrors} obj Optional instance to populate.
     * @return {module:model/BatchResponseErrors} The populated <code>BatchResponseErrors</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BatchResponseErrors();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return BatchResponseErrors;
}();
/**
 * @member {Array.<String>} id
 */


BatchResponseErrors.prototype['id'] = undefined;
var _default = BatchResponseErrors;
exports["default"] = _default;