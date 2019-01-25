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

goog.exportSymbol('proto.cs3.tagv0alpha.Tag', null, global);
goog.exportSymbol('proto.cs3.tagv0alpha.TagType', null, global);

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
proto.cs3.tagv0alpha.Tag = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.tagv0alpha.Tag, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cs3.tagv0alpha.Tag.displayName = 'proto.cs3.tagv0alpha.Tag';
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
proto.cs3.tagv0alpha.Tag.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.tagv0alpha.Tag.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.tagv0alpha.Tag} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.tagv0alpha.Tag.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    key: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, ""),
    filename: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.cs3.tagv0alpha.Tag}
 */
proto.cs3.tagv0alpha.Tag.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.tagv0alpha.Tag;
  return proto.cs3.tagv0alpha.Tag.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.tagv0alpha.Tag} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.tagv0alpha.Tag}
 */
proto.cs3.tagv0alpha.Tag.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cs3.tagv0alpha.TagType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
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
proto.cs3.tagv0alpha.Tag.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.tagv0alpha.Tag.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.tagv0alpha.Tag} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.tagv0alpha.Tag.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFilename();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional TagType type = 1;
 * @return {!proto.cs3.tagv0alpha.TagType}
 */
proto.cs3.tagv0alpha.Tag.prototype.getType = function() {
  return /** @type {!proto.cs3.tagv0alpha.TagType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.cs3.tagv0alpha.TagType} value */
proto.cs3.tagv0alpha.Tag.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.cs3.tagv0alpha.Tag.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.cs3.tagv0alpha.Tag.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.cs3.tagv0alpha.Tag.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.cs3.tagv0alpha.Tag.prototype.setValue = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string filename = 4;
 * @return {string}
 */
proto.cs3.tagv0alpha.Tag.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.cs3.tagv0alpha.Tag.prototype.setFilename = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * @enum {number}
 */
proto.cs3.tagv0alpha.TagType = {
  TAG_TYPE_INVALID: 0,
  TAG_TYPE_FILE: 1,
  TAG_TYPE_FOLDER: 2
};

goog.object.extend(exports, proto.cs3.tagv0alpha);
