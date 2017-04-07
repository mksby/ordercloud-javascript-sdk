/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ListProduct', 'model/ListProductAssignment', 'model/ListSupplier', 'model/ListVariant', 'model/Product', 'model/ProductAssignment', 'model/Variant'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListProduct'), require('../model/ListProductAssignment'), require('../model/ListSupplier'), require('../model/ListVariant'), require('../model/Product'), require('../model/ProductAssignment'), require('../model/Variant'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Products = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListProduct, root.OrderCloud.ListProductAssignment, root.OrderCloud.ListSupplier, root.OrderCloud.ListVariant, root.OrderCloud.Product, root.OrderCloud.ProductAssignment, root.OrderCloud.Variant);
  }
}(this, function(ApiClient, ListProduct, ListProductAssignment, ListSupplier, ListVariant, Product, ProductAssignment, Variant) {
  'use strict';

  /**
   * Product service.
   * @module api/Products
   * @version 1.0.45
   */

  /**
   * Constructs a new Products. 
   * @alias module:api/Products
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {module:model/Product} product 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
     */
    this.Create = function(product) {
      var postBody = product;

      // verify the required parameter 'product' is set
      if (product == undefined || product == null) {
        throw new Error("Missing the required parameter 'product' when calling Create");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Product;

      return this.apiClient.callApi(
        '/products', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(productID) {
      var postBody = null;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling Delete");
      }


      var pathParams = {
        'productID': productID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/products/{productID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteAssignment = function(productID, buyerID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling DeleteAssignment");
      }

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling DeleteAssignment");
      }


      var pathParams = {
        'productID': productID,
        'buyerID': buyerID
      };
      var queryParams = {
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/products/{productID}/assignments/{buyerID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overwriteExisting Overwrite existing of the product.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
     */
    this.GenerateVariants = function(productID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling GenerateVariants");
      }


      var pathParams = {
        'productID': productID
      };
      var queryParams = {
        'overwriteExisting': opts['overwriteExisting']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Product;

      return this.apiClient.callApi(
        '/products/{productID}/variants/generate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
     */
    this.Get = function(productID) {
      var postBody = null;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling Get");
      }


      var pathParams = {
        'productID': productID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Product;

      return this.apiClient.callApi(
        '/products/{productID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @param {String} variantID ID of the variant.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Variant}
     */
    this.GetVariant = function(productID, variantID) {
      var postBody = null;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling GetVariant");
      }

      // verify the required parameter 'variantID' is set
      if (variantID == undefined || variantID == null) {
        throw new Error("Missing the required parameter 'variantID' when calling GetVariant");
      }


      var pathParams = {
        'productID': productID,
        'variantID': variantID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Variant;

      return this.apiClient.callApi(
        '/products/{productID}/variants/{variantID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.catalogID ID of the catalog.
     * @param {String} opts.categoryID ID of the category.
     * @param {String} opts.supplierID ID of the supplier.
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListProduct}
     */
    this.List = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'catalogID': opts['catalogID'],
        'categoryID': opts['categoryID'],
        'supplierID': opts['supplierID'],
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListProduct;

      return this.apiClient.callApi(
        '/products', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.productID ID of the product.
     * @param {String} opts.priceScheduleID ID of the price schedule.
     * @param {String} opts.buyerID ID of the buyer.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.level Level of the product.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListProductAssignment}
     */
    this.ListAssignments = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'productID': opts['productID'],
        'priceScheduleID': opts['priceScheduleID'],
        'buyerID': opts['buyerID'],
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID'],
        'level': opts['level'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListProductAssignment;

      return this.apiClient.callApi(
        '/products/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSupplier}
     */
    this.ListSuppliers = function(productID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling ListSuppliers");
      }


      var pathParams = {
        'productID': productID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListSupplier;

      return this.apiClient.callApi(
        '/products/{productID}/suppliers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListVariant}
     */
    this.ListVariants = function(productID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling ListVariants");
      }


      var pathParams = {
        'productID': productID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListVariant;

      return this.apiClient.callApi(
        '/products/{productID}/variants', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @param {module:model/Product} product 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
     */
    this.Patch = function(productID, product) {
      var postBody = product;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling Patch");
      }

      // verify the required parameter 'product' is set
      if (product == undefined || product == null) {
        throw new Error("Missing the required parameter 'product' when calling Patch");
      }


      var pathParams = {
        'productID': productID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Product;

      return this.apiClient.callApi(
        '/products/{productID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @param {String} variantID ID of the variant.
     * @param {module:model/Variant} variant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Variant}
     */
    this.PatchVariant = function(productID, variantID, variant) {
      var postBody = variant;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling PatchVariant");
      }

      // verify the required parameter 'variantID' is set
      if (variantID == undefined || variantID == null) {
        throw new Error("Missing the required parameter 'variantID' when calling PatchVariant");
      }

      // verify the required parameter 'variant' is set
      if (variant == undefined || variant == null) {
        throw new Error("Missing the required parameter 'variant' when calling PatchVariant");
      }


      var pathParams = {
        'productID': productID,
        'variantID': variantID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Variant;

      return this.apiClient.callApi(
        '/products/{productID}/variants/{variantID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @param {String} supplierID ID of the supplier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.RemoveSupplier = function(productID, supplierID) {
      var postBody = null;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling RemoveSupplier");
      }

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling RemoveSupplier");
      }


      var pathParams = {
        'productID': productID,
        'supplierID': supplierID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/products/{productID}/suppliers/{supplierID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {module:model/ProductAssignment} productAssignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveAssignment = function(productAssignment) {
      var postBody = productAssignment;

      // verify the required parameter 'productAssignment' is set
      if (productAssignment == undefined || productAssignment == null) {
        throw new Error("Missing the required parameter 'productAssignment' when calling SaveAssignment");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/products/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @param {String} supplierID ID of the supplier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveSupplier = function(productID, supplierID) {
      var postBody = null;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling SaveSupplier");
      }

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling SaveSupplier");
      }


      var pathParams = {
        'productID': productID,
        'supplierID': supplierID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/products/{productID}/suppliers/{supplierID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @param {module:model/Product} product 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
     */
    this.Update = function(productID, product) {
      var postBody = product;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling Update");
      }

      // verify the required parameter 'product' is set
      if (product == undefined || product == null) {
        throw new Error("Missing the required parameter 'product' when calling Update");
      }


      var pathParams = {
        'productID': productID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Product;

      return this.apiClient.callApi(
        '/products/{productID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @param {String} variantID ID of the variant.
     * @param {module:model/Variant} variant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Variant}
     */
    this.UpdateVariant = function(productID, variantID, variant) {
      var postBody = variant;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling UpdateVariant");
      }

      // verify the required parameter 'variantID' is set
      if (variantID == undefined || variantID == null) {
        throw new Error("Missing the required parameter 'variantID' when calling UpdateVariant");
      }

      // verify the required parameter 'variant' is set
      if (variant == undefined || variant == null) {
        throw new Error("Missing the required parameter 'variant' when calling UpdateVariant");
      }


      var pathParams = {
        'productID': productID,
        'variantID': variantID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Variant;

      return this.apiClient.callApi(
        '/products/{productID}/variants/{variantID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
