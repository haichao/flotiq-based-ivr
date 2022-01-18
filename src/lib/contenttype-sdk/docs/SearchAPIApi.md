# FlotiqUserApi.SearchAPIApi

All URIs are relative to *https://api.flotiq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search**](SearchAPIApi.md#search) | **GET** /api/v1/search | 



## search

> SearchResponse search(opts)



Endpoint for search Queries for Headless Types

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.SearchAPIApi();
let opts = {
  'q': "q_example", // String | Query
  'fields': ["null"], // [String] | Search only in selected fields. Default: title, rawContent
  'page': "page_example", // String | Listing page number, 1-based
  'limit': "limit_example", // String | Page limit
  'orderBy': "orderBy_example", // String | Order by field
  'orderDirection': "orderDirection_example", // String | Order direction
  'contentType': ["null"], // [String] | Restrict search to content types set
  'aggregateBy': ["null"], // [String] | Field to aggregate results direction
  'filters': {"public":true}, // Object | Filter by object properties. Expected format: {property1: value1, property2: value2}
  'postFilters': {"public":true} // Object | Filter by object properties. Use it when you want aggregated counts without filters applied. Expected format: {property1: value1, property2: value2}
};
apiInstance.search(opts, (error, data, response) => {
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
 **q** | **String**| Query | [optional] 
 **fields** | [**[String]**](String.md)| Search only in selected fields. Default: title, rawContent | [optional] 
 **page** | **String**| Listing page number, 1-based | [optional] 
 **limit** | **String**| Page limit | [optional] 
 **orderBy** | **String**| Order by field | [optional] 
 **orderDirection** | **String**| Order direction | [optional] 
 **contentType** | [**[String]**](String.md)| Restrict search to content types set | [optional] 
 **aggregateBy** | [**[String]**](String.md)| Field to aggregate results direction | [optional] 
 **filters** | [**Object**](.md)| Filter by object properties. Expected format: {property1: value1, property2: value2} | [optional] 
 **postFilters** | [**Object**](.md)| Filter by object properties. Use it when you want aggregated counts without filters applied. Expected format: {property1: value1, property2: value2} | [optional] 

### Return type

[**SearchResponse**](SearchResponse.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

