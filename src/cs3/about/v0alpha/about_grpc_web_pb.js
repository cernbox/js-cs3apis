/**
 * @fileoverview gRPC-Web generated client stub for cs3.aboutv0alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_about_v0alpha_resources_pb = require('../../../cs3/about/v0alpha/resources_pb.js')

var cs3_rpc_status_pb = require('../../../cs3/rpc/status_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.aboutv0alpha = require('./about_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.aboutv0alpha.AboutServiceClient =
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
proto.cs3.aboutv0alpha.AboutServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.cs3.aboutv0alpha.AboutServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.cs3.aboutv0alpha.AboutServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.aboutv0alpha.ListMembersRequest,
 *   !proto.cs3.aboutv0alpha.ListMembersResponse>}
 */
const methodInfo_AboutService_ListMembers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.aboutv0alpha.ListMembersResponse,
  /** @param {!proto.cs3.aboutv0alpha.ListMembersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.aboutv0alpha.ListMembersResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.aboutv0alpha.ListMembersRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.aboutv0alpha.ListMembersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.aboutv0alpha.ListMembersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.aboutv0alpha.AboutServiceClient.prototype.listMembers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.aboutv0alpha.AboutService/ListMembers',
      request,
      metadata,
      methodInfo_AboutService_ListMembers,
      callback);
};


/**
 * @param {!proto.cs3.aboutv0alpha.ListMembersRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.aboutv0alpha.ListMembersResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.aboutv0alpha.AboutServicePromiseClient.prototype.listMembers =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listMembers(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.aboutv0alpha.GetDocumentationRequest,
 *   !proto.cs3.aboutv0alpha.GetDocumentationResponse>}
 */
const methodInfo_AboutService_GetDocumentation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.aboutv0alpha.GetDocumentationResponse,
  /** @param {!proto.cs3.aboutv0alpha.GetDocumentationRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.aboutv0alpha.GetDocumentationResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.aboutv0alpha.GetDocumentationRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.aboutv0alpha.GetDocumentationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.aboutv0alpha.GetDocumentationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.aboutv0alpha.AboutServiceClient.prototype.getDocumentation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.aboutv0alpha.AboutService/GetDocumentation',
      request,
      metadata,
      methodInfo_AboutService_GetDocumentation,
      callback);
};


/**
 * @param {!proto.cs3.aboutv0alpha.GetDocumentationRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.aboutv0alpha.GetDocumentationResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.aboutv0alpha.AboutServicePromiseClient.prototype.getDocumentation =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getDocumentation(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.cs3.aboutv0alpha;

