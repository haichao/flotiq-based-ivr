"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AbstractContentTypeMetaDefinition = _interopRequireDefault(require("./AbstractContentTypeMetaDefinition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ContentTypeDefinitionSchema model module.
 * @module model/ContentTypeDefinitionSchema
 * @version 2.0.0
 */
var ContentTypeDefinitionSchema = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContentTypeDefinitionSchema</code>.
   * Representation of content type definition in CMS
   * @alias module:model/ContentTypeDefinitionSchema
   * @param name {String} 
   * @param schemaDefinition {Object} 
   * @param metaDefinition {module:model/AbstractContentTypeMetaDefinition} 
   */
  function ContentTypeDefinitionSchema(name, schemaDefinition, metaDefinition) {
    _classCallCheck(this, ContentTypeDefinitionSchema);

    ContentTypeDefinitionSchema.initialize(this, name, schemaDefinition, metaDefinition);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContentTypeDefinitionSchema, null, [{
    key: "initialize",
    value: function initialize(obj, name, schemaDefinition, metaDefinition) {
      obj['name'] = name;
      obj['schemaDefinition'] = schemaDefinition;
      obj['metaDefinition'] = metaDefinition;
    }
    /**
     * Constructs a <code>ContentTypeDefinitionSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContentTypeDefinitionSchema} obj Optional instance to populate.
     * @return {module:model/ContentTypeDefinitionSchema} The populated <code>ContentTypeDefinitionSchema</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContentTypeDefinitionSchema();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }

        if (data.hasOwnProperty('workflowId')) {
          obj['workflowId'] = _ApiClient["default"].convertToType(data['workflowId'], 'String');
        }

        if (data.hasOwnProperty('schemaDefinition')) {
          obj['schemaDefinition'] = Object.constructFromObject(data['schemaDefinition']);
        }

        if (data.hasOwnProperty('metaDefinition')) {
          obj['metaDefinition'] = _AbstractContentTypeMetaDefinition["default"].constructFromObject(data['metaDefinition']);
        }

        if (data.hasOwnProperty('internal')) {
          obj['internal'] = _ApiClient["default"].convertToType(data['internal'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ContentTypeDefinitionSchema;
}();
/**
 * @member {String} name
 */


ContentTypeDefinitionSchema.prototype['name'] = undefined;
/**
 * @member {String} label
 */

ContentTypeDefinitionSchema.prototype['label'] = undefined;
/**
 * @member {String} workflowId
 */

ContentTypeDefinitionSchema.prototype['workflowId'] = undefined;
/**
 * @member {Object} schemaDefinition
 */

ContentTypeDefinitionSchema.prototype['schemaDefinition'] = undefined;
/**
 * @member {module:model/AbstractContentTypeMetaDefinition} metaDefinition
 */

ContentTypeDefinitionSchema.prototype['metaDefinition'] = undefined;
/**
 * @member {Boolean} internal
 */

ContentTypeDefinitionSchema.prototype['internal'] = undefined;
var _default = ContentTypeDefinitionSchema;
exports["default"] = _default;