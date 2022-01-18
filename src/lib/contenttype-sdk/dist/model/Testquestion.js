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
 * The Testquestion model module.
 * @module model/Testquestion
 * @version 2.0.0
 */
var Testquestion = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Testquestion</code>.
   * @alias module:model/Testquestion
   * @implements module:model/AbstractContentTypeSchemaDefinition
   * @implements module:model/QuestionAllOf
   * @param id {String} 
   * @param text {String} 
   * @param type {String} 
   * @param answers {String} 
   */
  function Testquestion(id, text, type, answers) {
    _classCallCheck(this, Testquestion);

    _AbstractContentTypeSchemaDefinition["default"].initialize(this, id);

    _QuestionAllOf["default"].initialize(this);

    Testquestion.initialize(this, id, text, type, answers);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Testquestion, null, [{
    key: "initialize",
    value: function initialize(obj, id, text, type, answers) {
      obj['id'] = id;
      obj['text'] = text;
      obj['type'] = type;
      obj['answers'] = answers;
    }
    /**
     * Constructs a <code>Testquestion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Testquestion} obj Optional instance to populate.
     * @return {module:model/Testquestion} The populated <code>Testquestion</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Testquestion();

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

  return Testquestion;
}();
/**
 * @member {String} id
 */


Testquestion.prototype['id'] = undefined;
/**
 * @member {module:model/AbstractContentTypeSchemaDefinitionInternal} internal
 */

Testquestion.prototype['internal'] = undefined;
/**
 * @member {String} text
 */

Testquestion.prototype['text'] = undefined;
/**
 * @member {String} type
 * @default 'question'
 */

Testquestion.prototype['type'] = 'question';
/**
 * @member {String} answers
 */

Testquestion.prototype['answers'] = undefined;
/**
 * @member {String} description
 */

Testquestion.prototype['description'] = undefined;
/**
 * @member {Array.<module:model/DataSource>} nextQuestions
 */

Testquestion.prototype['nextQuestions'] = undefined; // Implement AbstractContentTypeSchemaDefinition interface:

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
var _default = Testquestion;
exports["default"] = _default;