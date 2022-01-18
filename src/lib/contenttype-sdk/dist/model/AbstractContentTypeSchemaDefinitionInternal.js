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
 * The AbstractContentTypeSchemaDefinitionInternal model module.
 * @module model/AbstractContentTypeSchemaDefinitionInternal
 * @version 2.0.0
 */
var AbstractContentTypeSchemaDefinitionInternal = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AbstractContentTypeSchemaDefinitionInternal</code>.
   * @alias module:model/AbstractContentTypeSchemaDefinitionInternal
   * @param contentType {String} 
   * @param createdAt {String} 
   * @param updatedAt {String} 
   * @param deletedAt {String} 
   */
  function AbstractContentTypeSchemaDefinitionInternal(contentType, createdAt, updatedAt, deletedAt) {
    _classCallCheck(this, AbstractContentTypeSchemaDefinitionInternal);

    AbstractContentTypeSchemaDefinitionInternal.initialize(this, contentType, createdAt, updatedAt, deletedAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AbstractContentTypeSchemaDefinitionInternal, null, [{
    key: "initialize",
    value: function initialize(obj, contentType, createdAt, updatedAt, deletedAt) {
      obj['contentType'] = contentType;
      obj['createdAt'] = createdAt;
      obj['updatedAt'] = updatedAt;
      obj['deletedAt'] = deletedAt;
    }
    /**
     * Constructs a <code>AbstractContentTypeSchemaDefinitionInternal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AbstractContentTypeSchemaDefinitionInternal} obj Optional instance to populate.
     * @return {module:model/AbstractContentTypeSchemaDefinitionInternal} The populated <code>AbstractContentTypeSchemaDefinitionInternal</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AbstractContentTypeSchemaDefinitionInternal();

        if (data.hasOwnProperty('contentType')) {
          obj['contentType'] = _ApiClient["default"].convertToType(data['contentType'], 'String');
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'String');
        }

        if (data.hasOwnProperty('updatedAt')) {
          obj['updatedAt'] = _ApiClient["default"].convertToType(data['updatedAt'], 'String');
        }

        if (data.hasOwnProperty('deletedAt')) {
          obj['deletedAt'] = _ApiClient["default"].convertToType(data['deletedAt'], 'String');
        }

        if (data.hasOwnProperty('_workflow')) {
          obj['_workflow'] = _ApiClient["default"].convertToType(data['_workflow'], Object);
        }
      }

      return obj;
    }
  }]);

  return AbstractContentTypeSchemaDefinitionInternal;
}();
/**
 * @member {String} contentType
 */


AbstractContentTypeSchemaDefinitionInternal.prototype['contentType'] = undefined;
/**
 * @member {String} createdAt
 */

AbstractContentTypeSchemaDefinitionInternal.prototype['createdAt'] = undefined;
/**
 * @member {String} updatedAt
 */

AbstractContentTypeSchemaDefinitionInternal.prototype['updatedAt'] = undefined;
/**
 * @member {String} deletedAt
 */

AbstractContentTypeSchemaDefinitionInternal.prototype['deletedAt'] = undefined;
/**
 * @member {Object} _workflow
 */

AbstractContentTypeSchemaDefinitionInternal.prototype['_workflow'] = undefined;
var _default = AbstractContentTypeSchemaDefinitionInternal;
exports["default"] = _default;