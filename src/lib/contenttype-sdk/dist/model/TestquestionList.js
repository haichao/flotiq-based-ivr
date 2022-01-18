"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SystemListProperties = _interopRequireDefault(require("./SystemListProperties"));

var _Testquestion = _interopRequireDefault(require("./Testquestion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TestquestionList model module.
 * @module model/TestquestionList
 * @version 2.0.0
 */
var TestquestionList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TestquestionList</code>.
   * @alias module:model/TestquestionList
   * @extends module:model/SystemListProperties
   * @implements module:model/SystemListProperties
   * @param totalCount {Number} 
   * @param count {Number} 
   * @param totalPages {Number} 
   * @param currentPage {Number} 
   */
  function TestquestionList(totalCount, count, totalPages, currentPage) {
    _classCallCheck(this, TestquestionList);

    _SystemListProperties["default"].initialize(this, totalCount, count, totalPages, currentPage);

    TestquestionList.initialize(this, totalCount, count, totalPages, currentPage);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TestquestionList, null, [{
    key: "initialize",
    value: function initialize(obj, totalCount, count, totalPages, currentPage) {}
    /**
     * Constructs a <code>TestquestionList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestquestionList} obj Optional instance to populate.
     * @return {module:model/TestquestionList} The populated <code>TestquestionList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TestquestionList();

        _SystemListProperties["default"].constructFromObject(data, obj);

        _SystemListProperties["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_Testquestion["default"]]);
        }
      }

      return obj;
    }
  }]);

  return TestquestionList;
}();
/**
 * @member {Array.<module:model/Testquestion>} data
 */


TestquestionList.prototype['data'] = undefined; // Implement SystemListProperties interface:

/**
 * @member {Number} total_count
 */

_SystemListProperties["default"].prototype['total_count'] = undefined;
/**
 * @member {Number} count
 */

_SystemListProperties["default"].prototype['count'] = undefined;
/**
 * @member {Number} total_pages
 */

_SystemListProperties["default"].prototype['total_pages'] = undefined;
/**
 * @member {Number} current_page
 */

_SystemListProperties["default"].prototype['current_page'] = undefined;
var _default = TestquestionList;
exports["default"] = _default;