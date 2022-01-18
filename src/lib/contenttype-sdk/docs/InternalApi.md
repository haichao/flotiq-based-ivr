# FlotiqUserApi.InternalApi

All URIs are relative to *https://api.flotiq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteContentDefinition**](InternalApi.md#deleteContentDefinition) | **DELETE** /api/v1/internal/contenttype/{id} | 
[**getContentDefinition**](InternalApi.md#getContentDefinition) | **GET** /api/v1/internal/contenttype/{id} | 
[**getContentDefinitions**](InternalApi.md#getContentDefinitions) | **GET** /api/v1/internal/contenttype | 
[**postContentDefinition**](InternalApi.md#postContentDefinition) | **POST** /api/v1/internal/contenttype | 
[**putContentDefinition**](InternalApi.md#putContentDefinition) | **PUT** /api/v1/internal/contenttype/{id} | 



## deleteContentDefinition

> deleteContentDefinition(id)



Delete ConentTypeDefinition

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.InternalApi();
let id = "id_example"; // String | Id of content type definition
apiInstance.deleteContentDefinition(id, (error, data, response) => {
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
 **id** | **String**| Id of content type definition | 

### Return type

null (empty response body)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getContentDefinition

> getContentDefinition(id)



Returns an user-defined Content Definitions

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.InternalApi();
let id = "id_example"; // String | Id of content type definition
apiInstance.getContentDefinition(id, (error, data, response) => {
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
 **id** | **String**| Id of content type definition | 

### Return type

null (empty response body)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getContentDefinitions

> [ContentTypeDefinitionSchema] getContentDefinitions()



Returns an array of user-defined Content Definitions

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.InternalApi();
apiInstance.getContentDefinitions((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[ContentTypeDefinitionSchema]**](ContentTypeDefinitionSchema.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postContentDefinition

> postContentDefinition(opts)



Create new ConentTypeDefinition to store new type of ContentObjects

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.InternalApi();
let opts = {
  'contentTypeDefinitionSchema': new FlotiqUserApi.ContentTypeDefinitionSchema() // ContentTypeDefinitionSchema | 
};
apiInstance.postContentDefinition(opts, (error, data, response) => {
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
 **contentTypeDefinitionSchema** | [**ContentTypeDefinitionSchema**](ContentTypeDefinitionSchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putContentDefinition

> putContentDefinition(id, opts)



Update ConentTypeDefinition

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.InternalApi();
let id = "id_example"; // String | Id of content type definition
let opts = {
  'contentTypeDefinitionSchema': new FlotiqUserApi.ContentTypeDefinitionSchema() // ContentTypeDefinitionSchema | 
};
apiInstance.putContentDefinition(id, opts, (error, data, response) => {
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
 **id** | **String**| Id of content type definition | 
 **contentTypeDefinitionSchema** | [**ContentTypeDefinitionSchema**](ContentTypeDefinitionSchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

