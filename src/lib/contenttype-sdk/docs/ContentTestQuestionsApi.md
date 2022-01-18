# FlotiqUserApi.ContentTestQuestionsApi

All URIs are relative to *https://api.flotiq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchCreatetestquestion**](ContentTestQuestionsApi.md#batchCreatetestquestion) | **POST** /api/v1/content/testquestion/batch | 
[**createtestquestion**](ContentTestQuestionsApi.md#createtestquestion) | **POST** /api/v1/content/testquestion | 
[**deletetestquestion**](ContentTestQuestionsApi.md#deletetestquestion) | **DELETE** /api/v1/content/testquestion/{id} | 
[**gettestquestion**](ContentTestQuestionsApi.md#gettestquestion) | **GET** /api/v1/content/testquestion/{id} | 
[**testquestionList**](ContentTestQuestionsApi.md#testquestionList) | **GET** /api/v1/content/testquestion | 
[**updatetestquestion**](ContentTestQuestionsApi.md#updatetestquestion) | **PUT** /api/v1/content/testquestion/{id} | 



## batchCreatetestquestion

> BatchResponse batchCreatetestquestion(opts)



### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentTestQuestionsApi();
let opts = {
  'updateExisting': true, // Boolean | Overwrite existing objects
  'testquestion': [new FlotiqUserApi.Testquestion()] // [Testquestion] | 
};
apiInstance.batchCreatetestquestion(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateExisting** | **Boolean**| Overwrite existing objects | [optional] 
 **testquestion** | [**[Testquestion]**](Testquestion.md)|  | [optional] 

### Return type

[**BatchResponse**](BatchResponse.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createtestquestion

> createtestquestion(opts)



### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentTestQuestionsApi();
let opts = {
  'testquestion': new FlotiqUserApi.Testquestion() // Testquestion | 
};
apiInstance.createtestquestion(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testquestion** | [**Testquestion**](Testquestion.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## deletetestquestion

> deletetestquestion(id)



### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentTestQuestionsApi();
let id = "id_example"; // String | ContentObject identifier
apiInstance.deletetestquestion(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ContentObject identifier | 

### Return type

null (empty response body)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## gettestquestion

> Testquestion gettestquestion(id, opts)



### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentTestQuestionsApi();
let id = "id_example"; // String | ContentObject identifier
let opts = {
  'hydrate': "hydrate_example" // String | Should hydrate relations of object
};
apiInstance.gettestquestion(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ContentObject identifier | 
 **hydrate** | **String**| Should hydrate relations of object | [optional] 

### Return type

[**Testquestion**](Testquestion.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## testquestionList

> TestquestionList testquestionList(opts)



### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentTestQuestionsApi();
let opts = {
  'page': "page_example", // String | Listing page number, 1-based
  'limit': "limit_example", // String | Page limit
  'orderBy': "orderBy_example", // String | Order by field
  'orderDirection': "orderDirection_example", // String | Order direction
  'hydrate': "hydrate_example" // String | Should hydrate relations of object
};
apiInstance.testquestionList(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **String**| Listing page number, 1-based | [optional] 
 **limit** | **String**| Page limit | [optional] 
 **orderBy** | **String**| Order by field | [optional] 
 **orderDirection** | **String**| Order direction | [optional] 
 **hydrate** | **String**| Should hydrate relations of object | [optional] 

### Return type

[**TestquestionList**](TestquestionList.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatetestquestion

> updatetestquestion(id, opts)



### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentTestQuestionsApi();
let id = "id_example"; // String | ContentObject identifier
let opts = {
  'testquestion': new FlotiqUserApi.Testquestion() // Testquestion | 
};
apiInstance.updatetestquestion(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ContentObject identifier | 
 **testquestion** | [**Testquestion**](Testquestion.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

