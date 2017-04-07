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
    define(['ApiClient', 'model/CostCenter', 'model/CostCenterAssignment', 'model/ListCostCenter', 'model/ListCostCenterAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CostCenter'), require('../model/CostCenterAssignment'), require('../model/ListCostCenter'), require('../model/ListCostCenterAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.CostCenters = factory(root.OrderCloud.ApiClient, root.OrderCloud.CostCenter, root.OrderCloud.CostCenterAssignment, root.OrderCloud.ListCostCenter, root.OrderCloud.ListCostCenterAssignment);
  }
}(this, function(ApiClient, CostCenter, CostCenterAssignment, ListCostCenter, ListCostCenterAssignment) {
  'use strict';

  /**
   * CostCenter service.
   * @module api/CostCenters
   * @version 1.0.45
   */

  /**
   * Constructs a new CostCenters. 
   * @alias module:api/CostCenters
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/CostCenter} costCenter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CostCenter}
     */
    this.Create = function(buyerID, costCenter) {
      var postBody = costCenter;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Create");
      }

      // verify the required parameter 'costCenter' is set
      if (costCenter == undefined || costCenter == null) {
        throw new Error("Missing the required parameter 'costCenter' when calling Create");
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
      var returnType = CostCenter;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/costcenters', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} costCenterID ID of the cost center.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(buyerID, costCenterID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Delete");
      }

      // verify the required parameter 'costCenterID' is set
      if (costCenterID == undefined || costCenterID == null) {
        throw new Error("Missing the required parameter 'costCenterID' when calling Delete");
      }


      var pathParams = {
        'buyerID': buyerID,
        'costCenterID': costCenterID
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
        '/buyers/{buyerID}/costcenters/{costCenterID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} costCenterID ID of the cost center.
     * @param {Object} opts Optional parameters
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteAssignment = function(buyerID, costCenterID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling DeleteAssignment");
      }

      // verify the required parameter 'costCenterID' is set
      if (costCenterID == undefined || costCenterID == null) {
        throw new Error("Missing the required parameter 'costCenterID' when calling DeleteAssignment");
      }


      var pathParams = {
        'buyerID': buyerID,
        'costCenterID': costCenterID
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
        '/buyers/{buyerID}/costcenters/{costCenterID}/assignments', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} costCenterID ID of the cost center.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CostCenter}
     */
    this.Get = function(buyerID, costCenterID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Get");
      }

      // verify the required parameter 'costCenterID' is set
      if (costCenterID == undefined || costCenterID == null) {
        throw new Error("Missing the required parameter 'costCenterID' when calling Get");
      }


      var pathParams = {
        'buyerID': buyerID,
        'costCenterID': costCenterID
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
      var returnType = CostCenter;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/costcenters/{costCenterID}', 'GET',
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCostCenter}
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
      var returnType = ListCostCenter;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/costcenters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.costCenterID ID of the cost center.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.level Level of the cost center.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCostCenterAssignment}
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
        'costCenterID': opts['costCenterID'],
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
      var returnType = ListCostCenterAssignment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/costcenters/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} costCenterID ID of the cost center.
     * @param {module:model/CostCenter} costCenter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CostCenter}
     */
    this.Patch = function(buyerID, costCenterID, costCenter) {
      var postBody = costCenter;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Patch");
      }

      // verify the required parameter 'costCenterID' is set
      if (costCenterID == undefined || costCenterID == null) {
        throw new Error("Missing the required parameter 'costCenterID' when calling Patch");
      }

      // verify the required parameter 'costCenter' is set
      if (costCenter == undefined || costCenter == null) {
        throw new Error("Missing the required parameter 'costCenter' when calling Patch");
      }


      var pathParams = {
        'buyerID': buyerID,
        'costCenterID': costCenterID
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
      var returnType = CostCenter;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/costcenters/{costCenterID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/CostCenterAssignment} assignment 
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
        '/buyers/{buyerID}/costcenters/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} costCenterID ID of the cost center.
     * @param {module:model/CostCenter} costCenter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CostCenter}
     */
    this.Update = function(buyerID, costCenterID, costCenter) {
      var postBody = costCenter;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Update");
      }

      // verify the required parameter 'costCenterID' is set
      if (costCenterID == undefined || costCenterID == null) {
        throw new Error("Missing the required parameter 'costCenterID' when calling Update");
      }

      // verify the required parameter 'costCenter' is set
      if (costCenter == undefined || costCenter == null) {
        throw new Error("Missing the required parameter 'costCenter' when calling Update");
      }


      var pathParams = {
        'buyerID': buyerID,
        'costCenterID': costCenterID
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
      var returnType = CostCenter;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/costcenters/{costCenterID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
