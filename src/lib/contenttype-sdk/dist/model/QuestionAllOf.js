"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DataSource = _interopRequireDefault(require("./DataSource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The QuestionAllOf model module.
 * @module model/QuestionAllOf
 * @version 2.0.0
 */
var QuestionAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>QuestionAllOf</code>.
   * @alias module:model/QuestionAllOf
   */
  function QuestionAllOf() {
    _classCallCheck(this, QuestionAllOf);

    QuestionAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(QuestionAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>QuestionAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuestionAllOf} obj Optional instance to populate.
     * @return {module:model/QuestionAllOf} The populated <code>QuestionAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new QuestionAllOf();

        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('answers')) {
          obj['answers'] = _ApiClient["default"].convertToType(data['answers'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('nextQuestions')) {
          obj['nextQuestions'] = _ApiClient["default"].convertToType(data['nextQuestions'], [_DataSource["default"]]);
        }
      }

      return obj;
    }
  }]);

  return QuestionAllOf;
}();
/**
 * @member {String} text
 */


QuestionAllOf.prototype['text'] = undefined;
/**
 * @member {String} type
 * @default 'question'
 */

QuestionAllOf.prototype['type'] = 'question';
/**
 * @member {String} answers
 */

QuestionAllOf.prototype['answers'] = undefined;
/**
 * @member {String} description
 */

QuestionAllOf.prototype['description'] = undefined;
/**
 * @member {Array.<module:model/DataSource>} nextQuestions
 */

QuestionAllOf.prototype['nextQuestions'] = undefined;
var _default = QuestionAllOf;
exports["default"] = _default;