/**
 * Flotiq User API
 * ## Getting started   This is your Flotiq User API that allows you to access your data through the Content API that you defined.   ### Access to data   There are several methods that you can use to access your data:  * Live API docs - available via [`Try it out`](https://apidoc.flotiq.com) button available next to each endpoint  * Copying example code on the right side of each endpoint  * By downloading the SDKs available in mulitple languages.  * By downloading the Postman collection and importing it into Postman.    Each of these methods is described in length in the [user documentation](https://flotiq.com/docs/).   ### Authorization   In order to make use of the provided documentation, example code, SDKs and so on - you will need to pull out your API key. We recommend that you start with the ReadOnly API Key which will allow you to make all the `GET` requests but will error-out when you try to modify content. Please remember to replace the key for `POST`, `PUT` and `DELETE` calls.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: hello@flotiq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SystemListProperties from './SystemListProperties';

/**
 * The SearchResponse model module.
 * @module model/SearchResponse
 * @version 2.0.0
 */
class SearchResponse {
    /**
     * Constructs a new <code>SearchResponse</code>.
     * @alias module:model/SearchResponse
     * @extends module:model/SystemListProperties
     * @implements module:model/SystemListProperties
     * @param totalCount {Number} 
     * @param count {Number} 
     * @param totalPages {Number} 
     * @param currentPage {Number} 
     */
    constructor(totalCount, count, totalPages, currentPage) { 
        SystemListProperties.initialize(this, totalCount, count, totalPages, currentPage);
        SearchResponse.initialize(this, totalCount, count, totalPages, currentPage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, totalCount, count, totalPages, currentPage) { 
    }

    /**
     * Constructs a <code>SearchResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchResponse} obj Optional instance to populate.
     * @return {module:model/SearchResponse} The populated <code>SearchResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchResponse();
            SystemListProperties.constructFromObject(data, obj);
            SystemListProperties.constructFromObject(data, obj);

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Object]);
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Object>} data
 */
SearchResponse.prototype['data'] = undefined;

/**
 * @member {Object} summary
 */
SearchResponse.prototype['summary'] = undefined;


// Implement SystemListProperties interface:
/**
 * @member {Number} total_count
 */
SystemListProperties.prototype['total_count'] = undefined;
/**
 * @member {Number} count
 */
SystemListProperties.prototype['count'] = undefined;
/**
 * @member {Number} total_pages
 */
SystemListProperties.prototype['total_pages'] = undefined;
/**
 * @member {Number} current_page
 */
SystemListProperties.prototype['current_page'] = undefined;




export default SearchResponse;
