"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AbstractContentTypeSchemaDefinition = _interopRequireDefault(require("./AbstractContentTypeSchemaDefinition"));

var _AbstractContentTypeSchemaDefinitionInternal = _interopRequireDefault(require("./AbstractContentTypeSchemaDefinitionInternal"));

var _DataSource = _interopRequireDefault(require("./DataSource"));

var _QuestionAllOf = _interopRequireDefault(require("./QuestionAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Question model module.
 * @module model/Question
 * @version 2.0.0
 */
var Question = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Question</code>.
   * @alias module:model/Question
   * @implements module:model/AbstractContentTypeSchemaDefinition
   * @implements module:model/QuestionAllOf
   * @param id {String} 
   * @param text {String} 
   * @param type {String} 
   * @param answers {String} 
   */
  function Question(id, text, type, answers) {
    _classCallCheck(this, Question);

    _AbstractContentTypeSchemaDefinition["default"].initialize(this, id);

    _QuestionAllOf["default"].initialize(this);

    Question.initialize(this, id, text, type, answers);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Question, null, [{
    key: "initialize",
    value: function initialize(obj, id, text, type, answers) {
      obj['id'] = id;
      obj['text'] = text;
      obj['type'] = type;
      obj['answers'] = answers;
    }
    /**
     * Constructs a <code>Question</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Question} obj Optional instance to populate.
     * @return {module:model/Question} The populated <code>Question</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Question();

        _AbstractContentTypeSchemaDefinition["default"].constructFromObject(data, obj);

        _QuestionAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('internal')) {
          obj['internal'] = _AbstractContentTypeSchemaDefinitionInternal["default"].constructFromObject(data['internal']);
        }

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

  return Question;
}();
/**
 * @member {String} id
 */


Question.prototype['id'] = undefined;
/**
 * @member {module:model/AbstractContentTypeSchemaDefinitionInternal} internal
 */

Question.prototype['internal'] = undefined;
/**
 * @member {String} text
 */

Question.prototype['text'] = undefined;
/**
 * @member {String} type
 * @default 'question'
 */

Question.prototype['type'] = 'question';
/**
 * @member {String} answers
 */

Question.prototype['answers'] = undefined;
/**
 * @member {String} description
 */

Question.prototype['description'] = undefined;
/**
 * @member {Array.<module:model/DataSource>} nextQuestions
 */

Question.prototype['nextQuestions'] = undefined; // Implement AbstractContentTypeSchemaDefinition interface:

/**
 * @member {String} id
 */

_AbstractContentTypeSchemaDefinition["default"].prototype['id'] = undefined;
/**
 * @member {module:model/AbstractContentTypeSchemaDefinitionInternal} internal
 */

_AbstractContentTypeSchemaDefinition["default"].prototype['internal'] = undefined; // Implement QuestionAllOf interface:

/**
 * @member {String} text
 */

_QuestionAllOf["default"].prototype['text'] = undefined;
/**
 * @member {String} type
 * @default 'question'
 */

_QuestionAllOf["default"].prototype['type'] = 'question';
/**
 * @member {String} answers
 */

_QuestionAllOf["default"].prototype['answers'] = undefined;
/**
 * @member {String} description
 */

_QuestionAllOf["default"].prototype['description'] = undefined;
/**
 * @member {Array.<module:model/DataSource>} nextQuestions
 */

_QuestionAllOf["default"].prototype['nextQuestions'] = undefined;
var _default = Question;
exports["default"] = _default;