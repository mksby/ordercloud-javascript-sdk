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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.DevTokenRequest = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DevTokenRequest model module.
   * @module model/DevTokenRequest
   * @version 1.0.45
   */

  /**
   * Constructs a new <code>DevTokenRequest</code>.
   * @alias module:model/DevTokenRequest
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>DevTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DevTokenRequest} obj Optional instance to populate.
   * @return {module:model/DevTokenRequest} The populated <code>DevTokenRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ClientID')) {
        obj['ClientID'] = ApiClient.convertToType(data['ClientID'], 'String');
      }
      if (data.hasOwnProperty('BuyerID')) {
        obj['BuyerID'] = ApiClient.convertToType(data['BuyerID'], 'String');
      }
      if (data.hasOwnProperty('BuyerUsername')) {
        obj['BuyerUsername'] = ApiClient.convertToType(data['BuyerUsername'], 'String');
      }
      if (data.hasOwnProperty('Claims')) {
        obj['Claims'] = ApiClient.convertToType(data['Claims'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} ClientID
   */
  exports.prototype['ClientID'] = undefined;
  /**
   * @member {String} BuyerID
   */
  exports.prototype['BuyerID'] = undefined;
  /**
   * @member {String} BuyerUsername
   */
  exports.prototype['BuyerUsername'] = undefined;
  /**
   * @member {Array.<String>} Claims
   */
  exports.prototype['Claims'] = undefined;



  return exports;
}));


