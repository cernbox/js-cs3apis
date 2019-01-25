/**
 * @fileoverview gRPC-Web generated client stub for cs3.publicsharev0alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_publicshare_v0alpha_resources_pb = require('../../../cs3/publicshare/v0alpha/resources_pb.js')

var cs3_rpc_status_pb = require('../../../cs3/rpc/status_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.publicsharev0alpha = require('./publicshare_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.publicsharev0alpha.PubicShareServiceClient =
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
proto.cs3.publicsharev0alpha.PubicShareServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.cs3.publicsharev0alpha.PubicShareServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.cs3.publicsharev0alpha.PubicShareServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.publicsharev0alpha.CreatePublicShareRequest,
 *   !proto.cs3.publicsharev0alpha.CreatePublicShareResponse>}
 */
const methodInfo_PubicShareService_CreatePublicShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.publicsharev0alpha.CreatePublicShareResponse,
  /** @param {!proto.cs3.publicsharev0alpha.CreatePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.publicsharev0alpha.CreatePublicShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.publicsharev0alpha.CreatePublicShareRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.publicsharev0alpha.CreatePublicShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.publicsharev0alpha.CreatePublicShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.publicsharev0alpha.PubicShareServiceClient.prototype.createPublicShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.publicsharev0alpha.PubicShareService/CreatePublicShare',
      request,
      metadata,
      methodInfo_PubicShareService_CreatePublicShare,
      callback);
};


/**
 * @param {!proto.cs3.publicsharev0alpha.CreatePublicShareRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.publicsharev0alpha.CreatePublicShareResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.publicsharev0alpha.PubicShareServicePromiseClient.prototype.createPublicShare =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createPublicShare(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.publicsharev0alpha.UpdatePublicShareRequest,
 *   !proto.cs3.publicsharev0alpha.UpdatePublicShareResponse>}
 */
const methodInfo_PubicShareService_UpdatePublicShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.publicsharev0alpha.UpdatePublicShareResponse,
  /** @param {!proto.cs3.publicsharev0alpha.UpdatePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.publicsharev0alpha.UpdatePublicShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.publicsharev0alpha.UpdatePublicShareRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.publicsharev0alpha.UpdatePublicShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.publicsharev0alpha.UpdatePublicShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.publicsharev0alpha.PubicShareServiceClient.prototype.updatePublicShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.publicsharev0alpha.PubicShareService/UpdatePublicShare',
      request,
      metadata,
      methodInfo_PubicShareService_UpdatePublicShare,
      callback);
};


/**
 * @param {!proto.cs3.publicsharev0alpha.UpdatePublicShareRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.publicsharev0alpha.UpdatePublicShareResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.publicsharev0alpha.PubicShareServicePromiseClient.prototype.updatePublicShare =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updatePublicShare(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.publicsharev0alpha.ListPublicSharesRequest,
 *   !proto.cs3.publicsharev0alpha.ListPublicSharesResponse>}
 */
const methodInfo_PubicShareService_ListPublicShares = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.publicsharev0alpha.ListPublicSharesResponse,
  /** @param {!proto.cs3.publicsharev0alpha.ListPublicSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.publicsharev0alpha.ListPublicSharesResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.publicsharev0alpha.ListPublicSharesRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.publicsharev0alpha.ListPublicSharesResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.publicsharev0alpha.PubicShareServiceClient.prototype.listPublicShares =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.publicsharev0alpha.PubicShareService/ListPublicShares',
      request,
      metadata,
      methodInfo_PubicShareService_ListPublicShares);
};


/**
 * @param {!proto.cs3.publicsharev0alpha.ListPublicSharesRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.publicsharev0alpha.ListPublicSharesResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.publicsharev0alpha.PubicShareServicePromiseClient.prototype.listPublicShares =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/cs3.publicsharev0alpha.PubicShareService/ListPublicShares',
      request,
      metadata,
      methodInfo_PubicShareService_ListPublicShares);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.publicsharev0alpha.RevokePublicShareRequest,
 *   !proto.cs3.publicsharev0alpha.RevokePublicShareResponse>}
 */
const methodInfo_PubicShareService_RevokePublicShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.publicsharev0alpha.RevokePublicShareResponse,
  /** @param {!proto.cs3.publicsharev0alpha.RevokePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.publicsharev0alpha.RevokePublicShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.publicsharev0alpha.RevokePublicShareRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.publicsharev0alpha.RevokePublicShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.publicsharev0alpha.RevokePublicShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.publicsharev0alpha.PubicShareServiceClient.prototype.revokePublicShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.publicsharev0alpha.PubicShareService/RevokePublicShare',
      request,
      metadata,
      methodInfo_PubicShareService_RevokePublicShare,
      callback);
};


/**
 * @param {!proto.cs3.publicsharev0alpha.RevokePublicShareRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.publicsharev0alpha.RevokePublicShareResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.publicsharev0alpha.PubicShareServicePromiseClient.prototype.revokePublicShare =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.revokePublicShare(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.publicsharev0alpha.GetPublicShareRequest,
 *   !proto.cs3.publicsharev0alpha.GetPublicShareResponse>}
 */
const methodInfo_PubicShareService_GetPublicShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.publicsharev0alpha.GetPublicShareResponse,
  /** @param {!proto.cs3.publicsharev0alpha.GetPublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.publicsharev0alpha.GetPublicShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.publicsharev0alpha.GetPublicShareRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.publicsharev0alpha.GetPublicShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.publicsharev0alpha.GetPublicShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.publicsharev0alpha.PubicShareServiceClient.prototype.getPublicShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.publicsharev0alpha.PubicShareService/GetPublicShare',
      request,
      metadata,
      methodInfo_PubicShareService_GetPublicShare,
      callback);
};


/**
 * @param {!proto.cs3.publicsharev0alpha.GetPublicShareRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.publicsharev0alpha.GetPublicShareResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.publicsharev0alpha.PubicShareServicePromiseClient.prototype.getPublicShare =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getPublicShare(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.publicsharev0alpha.GetPublicShareByTokenRequest,
 *   !proto.cs3.publicsharev0alpha.GetPublicShareByTokenResponse>}
 */
const methodInfo_PubicShareService_GetPublicShareByToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.publicsharev0alpha.GetPublicShareByTokenResponse,
  /** @param {!proto.cs3.publicsharev0alpha.GetPublicShareByTokenRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.publicsharev0alpha.GetPublicShareByTokenResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.publicsharev0alpha.GetPublicShareByTokenRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.publicsharev0alpha.GetPublicShareByTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.publicsharev0alpha.GetPublicShareByTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.publicsharev0alpha.PubicShareServiceClient.prototype.getPublicShareByToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.publicsharev0alpha.PubicShareService/GetPublicShareByToken',
      request,
      metadata,
      methodInfo_PubicShareService_GetPublicShareByToken,
      callback);
};


/**
 * @param {!proto.cs3.publicsharev0alpha.GetPublicShareByTokenRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.publicsharev0alpha.GetPublicShareByTokenResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.publicsharev0alpha.PubicShareServicePromiseClient.prototype.getPublicShareByToken =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getPublicShareByToken(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.cs3.publicsharev0alpha;

