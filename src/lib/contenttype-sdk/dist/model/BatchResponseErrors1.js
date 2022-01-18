"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BatchResponseErrors = _interopRequireDefault(require("./BatchResponseErrors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BatchResponseErrors1 model module.
 * @module model/BatchResponseErrors1
 * @version 2.0.0
 */
var BatchResponseErrors1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BatchResponseErrors1</code>.
   * @alias module:model/BatchResponseErrors1
   */
  function BatchResponseErrors1() {
    _classCallCheck(this, BatchResponseErrors1);

    BatchResponseErrors1.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BatchResponseErrors1, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BatchResponseErrors1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchResponseErrors1} obj Optional instance to populate.
     * @return {module:model/BatchResponseErrors1} The populated <code>BatchResponseErrors1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BatchResponseErrors1();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], [_BatchResponseErrors["default"]]);
        }
      }

      return obj;
    }
  }]);

  return BatchResponseErrors1;
}();
/**
 * @member {String} id
 */


BatchResponseErrors1.prototype['id'] = undefined;
/**
 * @member {Array.<module:model/BatchResponseErrors>} errors
 */

BatchResponseErrors1.prototype['errors'] = undefined;
var _default = BatchResponseErrors1;
exports["default"] = _default;