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
    define(['ApiClient', 'model/Address'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Shipment = factory(root.OrderCloud.ApiClient, root.OrderCloud.Address);
  }
}(this, function(ApiClient, Address) {
  'use strict';




  /**
   * The Shipment model module.
   * @module model/Shipment
   * @version 1.0.46
   */

  /**
   * Constructs a new <code>Shipment</code>.
   * @alias module:model/Shipment
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>Shipment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Shipment} obj Optional instance to populate.
   * @return {module:model/Shipment} The populated <code>Shipment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('BuyerID')) {
        obj['BuyerID'] = ApiClient.convertToType(data['BuyerID'], 'String');
      }
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Shipper')) {
        obj['Shipper'] = ApiClient.convertToType(data['Shipper'], 'String');
      }
      if (data.hasOwnProperty('DateShipped')) {
        obj['DateShipped'] = ApiClient.convertToType(data['DateShipped'], 'String');
      }
      if (data.hasOwnProperty('DateDelivered')) {
        obj['DateDelivered'] = ApiClient.convertToType(data['DateDelivered'], 'String');
      }
      if (data.hasOwnProperty('TrackingNumber')) {
        obj['TrackingNumber'] = ApiClient.convertToType(data['TrackingNumber'], 'String');
      }
      if (data.hasOwnProperty('Cost')) {
        obj['Cost'] = ApiClient.convertToType(data['Cost'], 'Number');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
      if (data.hasOwnProperty('Account')) {
        obj['Account'] = ApiClient.convertToType(data['Account'], 'String');
      }
      if (data.hasOwnProperty('FromAddressID')) {
        obj['FromAddressID'] = ApiClient.convertToType(data['FromAddressID'], 'String');
      }
      if (data.hasOwnProperty('ToAddressID')) {
        obj['ToAddressID'] = ApiClient.convertToType(data['ToAddressID'], 'String');
      }
      if (data.hasOwnProperty('FromAddress')) {
        obj['FromAddress'] = Address.constructFromObject(data['FromAddress']);
      }
      if (data.hasOwnProperty('ToAddress')) {
        obj['ToAddress'] = Address.constructFromObject(data['ToAddress']);
      }
    }
    return obj;
  }

  /**
   * @member {String} BuyerID
   */
  exports.prototype['BuyerID'] = undefined;
  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Shipper
   */
  exports.prototype['Shipper'] = undefined;
  /**
   * @member {String} DateShipped
   */
  exports.prototype['DateShipped'] = undefined;
  /**
   * @member {String} DateDelivered
   */
  exports.prototype['DateDelivered'] = undefined;
  /**
   * @member {String} TrackingNumber
   */
  exports.prototype['TrackingNumber'] = undefined;
  /**
   * @member {Number} Cost
   */
  exports.prototype['Cost'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;
  /**
   * @member {String} Account
   */
  exports.prototype['Account'] = undefined;
  /**
   * @member {String} FromAddressID
   */
  exports.prototype['FromAddressID'] = undefined;
  /**
   * @member {String} ToAddressID
   */
  exports.prototype['ToAddressID'] = undefined;
  /**
   * @member {module:model/Address} FromAddress
   */
  exports.prototype['FromAddress'] = undefined;
  /**
   * @member {module:model/Address} ToAddress
   */
  exports.prototype['ToAddress'] = undefined;



  return exports;
}));


