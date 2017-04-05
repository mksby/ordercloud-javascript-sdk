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
    define(['ApiClient', 'model/ListSpendingAccount', 'model/ListSpendingAccountAssignment', 'model/SpendingAccount', 'model/SpendingAccountAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListSpendingAccount'), require('../model/ListSpendingAccountAssignment'), require('../model/SpendingAccount'), require('../model/SpendingAccountAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.SpendingAccounts = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListSpendingAccount, root.OrderCloud.ListSpendingAccountAssignment, root.OrderCloud.SpendingAccount, root.OrderCloud.SpendingAccountAssignment);
  }
}(this, function(ApiClient, ListSpendingAccount, ListSpendingAccountAssignment, SpendingAccount, SpendingAccountAssignment) {
  'use strict';

  /**
   * SpendingAccount service.
   * @module api/SpendingAccounts
   * @version 1.0.0
   */

  /**
   * Constructs a new SpendingAccounts. 
   * @alias module:api/SpendingAccounts
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/SpendingAccount} spendingAccount 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SpendingAccount}
     */
    this.Create = function(buyerID, spendingAccount) {
      var postBody = spendingAccount;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Create");
      }

      // verify the required parameter 'spendingAccount' is set
      if (spendingAccount == undefined || spendingAccount == null) {
        throw new Error("Missing the required parameter 'spendingAccount' when calling Create");
      }


      var pathParams = {
        'buyerID': buyerID
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
      var returnType = SpendingAccount;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/spendingaccounts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} spendingAccountID ID of the spending account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(buyerID, spendingAccountID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Delete");
      }

      // verify the required parameter 'spendingAccountID' is set
      if (spendingAccountID == undefined || spendingAccountID == null) {
        throw new Error("Missing the required parameter 'spendingAccountID' when calling Delete");
      }


      var pathParams = {
        'buyerID': buyerID,
        'spendingAccountID': spendingAccountID
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
        '/buyers/{buyerID}/spendingaccounts/{spendingAccountID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} spendingAccountID ID of the spending account.
     * @param {Object} opts Optional parameters
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteAssignment = function(buyerID, spendingAccountID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling DeleteAssignment");
      }

      // verify the required parameter 'spendingAccountID' is set
      if (spendingAccountID == undefined || spendingAccountID == null) {
        throw new Error("Missing the required parameter 'spendingAccountID' when calling DeleteAssignment");
      }


      var pathParams = {
        'buyerID': buyerID,
        'spendingAccountID': spendingAccountID
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
        '/buyers/{buyerID}/spendingaccounts/{spendingAccountID}/assignments', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} spendingAccountID ID of the spending account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SpendingAccount}
     */
    this.Get = function(buyerID, spendingAccountID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Get");
      }

      // verify the required parameter 'spendingAccountID' is set
      if (spendingAccountID == undefined || spendingAccountID == null) {
        throw new Error("Missing the required parameter 'spendingAccountID' when calling Get");
      }


      var pathParams = {
        'buyerID': buyerID,
        'spendingAccountID': spendingAccountID
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
      var returnType = SpendingAccount;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/spendingaccounts/{spendingAccountID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSpendingAccount}
     */
    this.List = function(buyerID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling List");
      }


      var pathParams = {
        'buyerID': buyerID
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
      var returnType = ListSpendingAccount;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/spendingaccounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.spendingAccountID ID of the spending account.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.level Level of the spending account.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSpendingAccountAssignment}
     */
    this.ListAssignments = function(buyerID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling ListAssignments");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
        'spendingAccountID': opts['spendingAccountID'],
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
      var returnType = ListSpendingAccountAssignment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/spendingaccounts/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} spendingAccountID ID of the spending account.
     * @param {module:model/SpendingAccount} spendingAccount 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SpendingAccount}
     */
    this.Patch = function(buyerID, spendingAccountID, spendingAccount) {
      var postBody = spendingAccount;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Patch");
      }

      // verify the required parameter 'spendingAccountID' is set
      if (spendingAccountID == undefined || spendingAccountID == null) {
        throw new Error("Missing the required parameter 'spendingAccountID' when calling Patch");
      }

      // verify the required parameter 'spendingAccount' is set
      if (spendingAccount == undefined || spendingAccount == null) {
        throw new Error("Missing the required parameter 'spendingAccount' when calling Patch");
      }


      var pathParams = {
        'buyerID': buyerID,
        'spendingAccountID': spendingAccountID
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
      var returnType = SpendingAccount;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/spendingaccounts/{spendingAccountID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/SpendingAccountAssignment} assignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveAssignment = function(buyerID, assignment) {
      var postBody = assignment;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling SaveAssignment");
      }

      // verify the required parameter 'assignment' is set
      if (assignment == undefined || assignment == null) {
        throw new Error("Missing the required parameter 'assignment' when calling SaveAssignment");
      }


      var pathParams = {
        'buyerID': buyerID
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
        '/buyers/{buyerID}/spendingaccounts/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} spendingAccountID ID of the spending account.
     * @param {module:model/SpendingAccount} spendingAccount 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SpendingAccount}
     */
    this.Update = function(buyerID, spendingAccountID, spendingAccount) {
      var postBody = spendingAccount;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Update");
      }

      // verify the required parameter 'spendingAccountID' is set
      if (spendingAccountID == undefined || spendingAccountID == null) {
        throw new Error("Missing the required parameter 'spendingAccountID' when calling Update");
      }

      // verify the required parameter 'spendingAccount' is set
      if (spendingAccount == undefined || spendingAccount == null) {
        throw new Error("Missing the required parameter 'spendingAccount' when calling Update");
      }


      var pathParams = {
        'buyerID': buyerID,
        'spendingAccountID': spendingAccountID
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
      var returnType = SpendingAccount;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/spendingaccounts/{spendingAccountID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
