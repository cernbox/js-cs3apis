/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var cs3_rpc_status_pb = require('../../../cs3/rpc/status_pb.js');
var cs3_storagebroker_v0alpha_resources_pb = require('../../../cs3/storagebroker/v0alpha/resources_pb.js');
goog.exportSymbol('proto.cs3.storagebrokerv0alpha.FindRequest', null, global);
goog.exportSymbol('proto.cs3.storagebrokerv0alpha.FindResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storagebrokerv0alpha.FindRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storagebrokerv0alpha.FindRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cs3.storagebrokerv0alpha.FindRequest.displayName = 'proto.cs3.storagebrokerv0alpha.FindRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storagebrokerv0alpha.FindRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storagebrokerv0alpha.FindRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storagebrokerv0alpha.FindRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storagebrokerv0alpha.FindRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filename: jspb.Message.getFieldWithDefault(msg, 1, ""),
    extra: msg.getExtra_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storagebrokerv0alpha.FindRequest}
 */
proto.cs3.storagebrokerv0alpha.FindRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storagebrokerv0alpha.FindRequest;
  return proto.cs3.storagebrokerv0alpha.FindRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storagebrokerv0alpha.FindRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storagebrokerv0alpha.FindRequest}
 */
proto.cs3.storagebrokerv0alpha.FindRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setExtra(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storagebrokerv0alpha.FindRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storagebrokerv0alpha.FindRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storagebrokerv0alpha.FindRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storagebrokerv0alpha.FindRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilename();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExtra_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string filename = 1;
 * @return {string}
 */
proto.cs3.storagebrokerv0alpha.FindRequest.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.cs3.storagebrokerv0alpha.FindRequest.prototype.setFilename = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes extra = 2;
 * @return {string}
 */
proto.cs3.storagebrokerv0alpha.FindRequest.prototype.getExtra = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes extra = 2;
 * This is a type-conversion wrapper around `getExtra()`
 * @return {string}
 */
proto.cs3.storagebrokerv0alpha.FindRequest.prototype.getExtra_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getExtra()));
};


/**
 * optional bytes extra = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getExtra()`
 * @return {!Uint8Array}
 */
proto.cs3.storagebrokerv0alpha.FindRequest.prototype.getExtra_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getExtra()));
};


/** @param {!(string|Uint8Array)} value */
proto.cs3.storagebrokerv0alpha.FindRequest.prototype.setExtra = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storagebrokerv0alpha.FindResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storagebrokerv0alpha.FindResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cs3.storagebrokerv0alpha.FindResponse.displayName = 'proto.cs3.storagebrokerv0alpha.FindResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storagebrokerv0alpha.FindResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storagebrokerv0alpha.FindResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storagebrokerv0alpha.FindResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storagebrokerv0alpha.FindResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
    providerInfo: (f = msg.getProviderInfo()) && cs3_storagebroker_v0alpha_resources_pb.ProviderInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storagebrokerv0alpha.FindResponse}
 */
proto.cs3.storagebrokerv0alpha.FindResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storagebrokerv0alpha.FindResponse;
  return proto.cs3.storagebrokerv0alpha.FindResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storagebrokerv0alpha.FindResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storagebrokerv0alpha.FindResponse}
 */
proto.cs3.storagebrokerv0alpha.FindResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_status_pb.Status;
      reader.readMessage(value,cs3_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_storagebroker_v0alpha_resources_pb.ProviderInfo;
      reader.readMessage(value,cs3_storagebroker_v0alpha_resources_pb.ProviderInfo.deserializeBinaryFromReader);
      msg.setProviderInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storagebrokerv0alpha.FindResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storagebrokerv0alpha.FindResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storagebrokerv0alpha.FindResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storagebrokerv0alpha.FindResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getProviderInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storagebroker_v0alpha_resources_pb.ProviderInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storagebrokerv0alpha.FindResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storagebrokerv0alpha.FindResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.cs3.storagebrokerv0alpha.FindResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.cs3.storagebrokerv0alpha.FindResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ProviderInfo provider_info = 2;
 * @return {?proto.cs3.storagebrokerv0alpha.ProviderInfo}
 */
proto.cs3.storagebrokerv0alpha.FindResponse.prototype.getProviderInfo = function() {
  return /** @type{?proto.cs3.storagebrokerv0alpha.ProviderInfo} */ (
    jspb.Message.getWrapperField(this, cs3_storagebroker_v0alpha_resources_pb.ProviderInfo, 2));
};


/** @param {?proto.cs3.storagebrokerv0alpha.ProviderInfo|undefined} value */
proto.cs3.storagebrokerv0alpha.FindResponse.prototype.setProviderInfo = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.cs3.storagebrokerv0alpha.FindResponse.prototype.clearProviderInfo = function() {
  this.setProviderInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.cs3.storagebrokerv0alpha.FindResponse.prototype.hasProviderInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.cs3.storagebrokerv0alpha);
