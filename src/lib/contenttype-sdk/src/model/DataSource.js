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

/**
 * The DataSource model module.
 * @module model/DataSource
 * @version 2.0.0
 */
class DataSource {
    /**
     * Constructs a new <code>DataSource</code>.
     * Represents link between data stored internally inside CMS or external
     * @alias module:model/DataSource
     * @param dataUrl {String} 
     * @param type {module:model/DataSource.TypeEnum} 
     */
    constructor(dataUrl, type) { 
        
        DataSource.initialize(this, dataUrl, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, dataUrl, type) { 
        obj['dataUrl'] = dataUrl;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>DataSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DataSource} obj Optional instance to populate.
     * @return {module:model/DataSource} The populated <code>DataSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataSource();

            if (data.hasOwnProperty('dataUrl')) {
                obj['dataUrl'] = ApiClient.convertToType(data['dataUrl'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} dataUrl
 */
DataSource.prototype['dataUrl'] = undefined;

/**
 * @member {module:model/DataSource.TypeEnum} type
 */
DataSource.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
DataSource['TypeEnum'] = {

    /**
     * value: "internal"
     * @const
     */
    "internal": "internal",

    /**
     * value: "external"
     * @const
     */
    "external": "external"
};



export default DataSource;

