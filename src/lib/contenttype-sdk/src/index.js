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


import ApiClient from './ApiClient';
import AbstractContentTypeMetaDefinition from './model/AbstractContentTypeMetaDefinition';
import AbstractContentTypeSchemaDefinition from './model/AbstractContentTypeSchemaDefinition';
import AbstractContentTypeSchemaDefinitionInternal from './model/AbstractContentTypeSchemaDefinitionInternal';
import AbstractPropertiesConfig from './model/AbstractPropertiesConfig';
import AbstractPropertiesConfigValidation from './model/AbstractPropertiesConfigValidation';
import BatchResponse from './model/BatchResponse';
import BatchResponseErrors from './model/BatchResponseErrors';
import BatchResponseErrors1 from './model/BatchResponseErrors1';
import ContentTypeDefinitionSchema from './model/ContentTypeDefinitionSchema';
import DataSource from './model/DataSource';
import InlineObject from './model/InlineObject';
import InlineObject1 from './model/InlineObject1';
import Media from './model/Media';
import MediaAllOf from './model/MediaAllOf';
import MediaList from './model/MediaList';
import Question from './model/Question';
import QuestionAllOf from './model/QuestionAllOf';
import QuestionList from './model/QuestionList';
import SearchResponse from './model/SearchResponse';
import SystemListProperties from './model/SystemListProperties';
import Testquestion from './model/Testquestion';
import TestquestionList from './model/TestquestionList';
import ContentMediaApi from './api/ContentMediaApi';
import ContentQuestionsApi from './api/ContentQuestionsApi';
import ContentTestQuestionsApi from './api/ContentTestQuestionsApi';
import GraphQLApi from './api/GraphQLApi';
import InternalApi from './api/InternalApi';
import MediaApi from './api/MediaApi';
import SearchAPIApi from './api/SearchAPIApi';


/**
* _Getting_started_This_is_your_Flotiq_User_API_that_allows_you_to_access_your_data_through_the_Content_API_that_you_defined___Access_to_data_There_are_several_methods_that_you_can_use_to_access_your_data__Live_API_docs___available_via__Try_it_out_https__apidoc_flotiq_com_button_available_next_to_each_endpoint__Copying_example_code_on_the_right_side_of_each_endpoint__By_downloading_the_SDKs_available_in_mulitple_languages___By_downloading_the_Postman_collection_and_importing_it_into_Postman__Each_of_these_methods_is_described_in_length_in_the__user_documentation_https__flotiq_com_docs____Authorization_In_order_to_make_use_of_the_provided_documentation_example_code_SDKs_and_so_on___you_will_need_to_pull_out_your_API_key__We_recommend_that_you_start_with_the_ReadOnly_API_Key_which_will_allow_you_to_make_all_the_GET_requests_but_will_error_out_when_you_try_to_modify_content__Please_remember_to_replace_the_key_for_POST_PUT_and_DELETE_calls_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var FlotiqUserApi = require('index'); // See note below*.
* var xxxSvc = new FlotiqUserApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new FlotiqUserApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new FlotiqUserApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new FlotiqUserApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 2.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AbstractContentTypeMetaDefinition model constructor.
     * @property {module:model/AbstractContentTypeMetaDefinition}
     */
    AbstractContentTypeMetaDefinition,

    /**
     * The AbstractContentTypeSchemaDefinition model constructor.
     * @property {module:model/AbstractContentTypeSchemaDefinition}
     */
    AbstractContentTypeSchemaDefinition,

    /**
     * The AbstractContentTypeSchemaDefinitionInternal model constructor.
     * @property {module:model/AbstractContentTypeSchemaDefinitionInternal}
     */
    AbstractContentTypeSchemaDefinitionInternal,

    /**
     * The AbstractPropertiesConfig model constructor.
     * @property {module:model/AbstractPropertiesConfig}
     */
    AbstractPropertiesConfig,

    /**
     * The AbstractPropertiesConfigValidation model constructor.
     * @property {module:model/AbstractPropertiesConfigValidation}
     */
    AbstractPropertiesConfigValidation,

    /**
     * The BatchResponse model constructor.
     * @property {module:model/BatchResponse}
     */
    BatchResponse,

    /**
     * The BatchResponseErrors model constructor.
     * @property {module:model/BatchResponseErrors}
     */
    BatchResponseErrors,

    /**
     * The BatchResponseErrors1 model constructor.
     * @property {module:model/BatchResponseErrors1}
     */
    BatchResponseErrors1,

    /**
     * The ContentTypeDefinitionSchema model constructor.
     * @property {module:model/ContentTypeDefinitionSchema}
     */
    ContentTypeDefinitionSchema,

    /**
     * The DataSource model constructor.
     * @property {module:model/DataSource}
     */
    DataSource,

    /**
     * The InlineObject model constructor.
     * @property {module:model/InlineObject}
     */
    InlineObject,

    /**
     * The InlineObject1 model constructor.
     * @property {module:model/InlineObject1}
     */
    InlineObject1,

    /**
     * The Media model constructor.
     * @property {module:model/Media}
     */
    Media,

    /**
     * The MediaAllOf model constructor.
     * @property {module:model/MediaAllOf}
     */
    MediaAllOf,

    /**
     * The MediaList model constructor.
     * @property {module:model/MediaList}
     */
    MediaList,

    /**
     * The Question model constructor.
     * @property {module:model/Question}
     */
    Question,

    /**
     * The QuestionAllOf model constructor.
     * @property {module:model/QuestionAllOf}
     */
    QuestionAllOf,

    /**
     * The QuestionList model constructor.
     * @property {module:model/QuestionList}
     */
    QuestionList,

    /**
     * The SearchResponse model constructor.
     * @property {module:model/SearchResponse}
     */
    SearchResponse,

    /**
     * The SystemListProperties model constructor.
     * @property {module:model/SystemListProperties}
     */
    SystemListProperties,

    /**
     * The Testquestion model constructor.
     * @property {module:model/Testquestion}
     */
    Testquestion,

    /**
     * The TestquestionList model constructor.
     * @property {module:model/TestquestionList}
     */
    TestquestionList,

    /**
    * The ContentMediaApi service constructor.
    * @property {module:api/ContentMediaApi}
    */
    ContentMediaApi,

    /**
    * The ContentQuestionsApi service constructor.
    * @property {module:api/ContentQuestionsApi}
    */
    ContentQuestionsApi,

    /**
    * The ContentTestQuestionsApi service constructor.
    * @property {module:api/ContentTestQuestionsApi}
    */
    ContentTestQuestionsApi,

    /**
    * The GraphQLApi service constructor.
    * @property {module:api/GraphQLApi}
    */
    GraphQLApi,

    /**
    * The InternalApi service constructor.
    * @property {module:api/InternalApi}
    */
    InternalApi,

    /**
    * The MediaApi service constructor.
    * @property {module:api/MediaApi}
    */
    MediaApi,

    /**
    * The SearchAPIApi service constructor.
    * @property {module:api/SearchAPIApi}
    */
    SearchAPIApi
};
