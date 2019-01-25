/**
 * @fileoverview gRPC-Web generated client stub for cs3.tagv0alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_rpc_status_pb = require('../../../cs3/rpc/status_pb.js')

var cs3_tag_v0alpha_resources_pb = require('../../../cs3/tag/v0alpha/resources_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.tagv0alpha = require('./tag_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.tagv0alpha.TagServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.tagv0alpha.TagServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.cs3.tagv0alpha.TagServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.cs3.tagv0alpha.TagServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.tagv0alpha.ListTagsRequest,
 *   !proto.cs3.tagv0alpha.ListTagsResponse>}
 */
const methodInfo_TagService_ListTags = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.tagv0alpha.ListTagsResponse,
  /** @param {!proto.cs3.tagv0alpha.ListTagsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.tagv0alpha.ListTagsResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.tagv0alpha.ListTagsRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.tagv0alpha.ListTagsResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.tagv0alpha.TagServiceClient.prototype.listTags =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.tagv0alpha.TagService/ListTags',
      request,
      metadata,
      methodInfo_TagService_ListTags);
};


/**
 * @param {!proto.cs3.tagv0alpha.ListTagsRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.tagv0alpha.ListTagsResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.tagv0alpha.TagServicePromiseClient.prototype.listTags =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/cs3.tagv0alpha.TagService/ListTags',
      request,
      metadata,
      methodInfo_TagService_ListTags);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.tagv0alpha.SetTagRequest,
 *   !proto.cs3.tagv0alpha.SetTagResponse>}
 */
const methodInfo_TagService_SetTag = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.tagv0alpha.SetTagResponse,
  /** @param {!proto.cs3.tagv0alpha.SetTagRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.tagv0alpha.SetTagResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.tagv0alpha.SetTagRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.tagv0alpha.SetTagResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.tagv0alpha.SetTagResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.tagv0alpha.TagServiceClient.prototype.setTag =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.tagv0alpha.TagService/SetTag',
      request,
      metadata,
      methodInfo_TagService_SetTag,
      callback);
};


/**
 * @param {!proto.cs3.tagv0alpha.SetTagRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.tagv0alpha.SetTagResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.tagv0alpha.TagServicePromiseClient.prototype.setTag =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.setTag(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.tagv0alpha.UnsetTagRequest,
 *   !proto.cs3.tagv0alpha.UnsetTagResponse>}
 */
const methodInfo_TagService_UnsetTag = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.tagv0alpha.UnsetTagResponse,
  /** @param {!proto.cs3.tagv0alpha.UnsetTagRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.tagv0alpha.UnsetTagResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.tagv0alpha.UnsetTagRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.tagv0alpha.UnsetTagResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.tagv0alpha.UnsetTagResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.tagv0alpha.TagServiceClient.prototype.unsetTag =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.tagv0alpha.TagService/UnsetTag',
      request,
      metadata,
      methodInfo_TagService_UnsetTag,
      callback);
};


/**
 * @param {!proto.cs3.tagv0alpha.UnsetTagRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.tagv0alpha.UnsetTagResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.tagv0alpha.TagServicePromiseClient.prototype.unsetTag =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.unsetTag(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.cs3.tagv0alpha;

