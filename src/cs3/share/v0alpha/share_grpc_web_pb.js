/**
 * @fileoverview gRPC-Web generated client stub for cs3.sharev0alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_rpc_status_pb = require('../../../cs3/rpc/status_pb.js')

var cs3_share_v0alpha_resources_pb = require('../../../cs3/share/v0alpha/resources_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.sharev0alpha = require('./share_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.sharev0alpha.ShareServiceClient =
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
proto.cs3.sharev0alpha.ShareServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.cs3.sharev0alpha.ShareServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.cs3.sharev0alpha.ShareServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharev0alpha.CreateShareRequest,
 *   !proto.cs3.sharev0alpha.CreateShareResponse>}
 */
const methodInfo_ShareService_CreateShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharev0alpha.CreateShareResponse,
  /** @param {!proto.cs3.sharev0alpha.CreateShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharev0alpha.CreateShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharev0alpha.CreateShareRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharev0alpha.CreateShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharev0alpha.CreateShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.sharev0alpha.ShareServiceClient.prototype.createShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharev0alpha.ShareService/CreateShare',
      request,
      metadata,
      methodInfo_ShareService_CreateShare,
      callback);
};


/**
 * @param {!proto.cs3.sharev0alpha.CreateShareRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharev0alpha.CreateShareResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.sharev0alpha.ShareServicePromiseClient.prototype.createShare =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createShare(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharev0alpha.UpdateShareRequest,
 *   !proto.cs3.sharev0alpha.UpdateShareResponse>}
 */
const methodInfo_ShareService_UpdateShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharev0alpha.UpdateShareResponse,
  /** @param {!proto.cs3.sharev0alpha.UpdateShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharev0alpha.UpdateShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharev0alpha.UpdateShareRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharev0alpha.UpdateShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharev0alpha.UpdateShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.sharev0alpha.ShareServiceClient.prototype.updateShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharev0alpha.ShareService/UpdateShare',
      request,
      metadata,
      methodInfo_ShareService_UpdateShare,
      callback);
};


/**
 * @param {!proto.cs3.sharev0alpha.UpdateShareRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharev0alpha.UpdateShareResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.sharev0alpha.ShareServicePromiseClient.prototype.updateShare =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateShare(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharev0alpha.ListSharesRequest,
 *   !proto.cs3.sharev0alpha.ListSharesResponse>}
 */
const methodInfo_ShareService_ListShares = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharev0alpha.ListSharesResponse,
  /** @param {!proto.cs3.sharev0alpha.ListSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharev0alpha.ListSharesResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharev0alpha.ListSharesRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharev0alpha.ListSharesResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.sharev0alpha.ShareServiceClient.prototype.listShares =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.sharev0alpha.ShareService/ListShares',
      request,
      metadata,
      methodInfo_ShareService_ListShares);
};


/**
 * @param {!proto.cs3.sharev0alpha.ListSharesRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharev0alpha.ListSharesResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.sharev0alpha.ShareServicePromiseClient.prototype.listShares =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/cs3.sharev0alpha.ShareService/ListShares',
      request,
      metadata,
      methodInfo_ShareService_ListShares);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharev0alpha.UnshareRequest,
 *   !proto.cs3.sharev0alpha.UnshareResponse>}
 */
const methodInfo_ShareService_Unshare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharev0alpha.UnshareResponse,
  /** @param {!proto.cs3.sharev0alpha.UnshareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharev0alpha.UnshareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharev0alpha.UnshareRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharev0alpha.UnshareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharev0alpha.UnshareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.sharev0alpha.ShareServiceClient.prototype.unshare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharev0alpha.ShareService/Unshare',
      request,
      metadata,
      methodInfo_ShareService_Unshare,
      callback);
};


/**
 * @param {!proto.cs3.sharev0alpha.UnshareRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharev0alpha.UnshareResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.sharev0alpha.ShareServicePromiseClient.prototype.unshare =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.unshare(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharev0alpha.GetShareRequest,
 *   !proto.cs3.sharev0alpha.GetShareResponse>}
 */
const methodInfo_ShareService_GetShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharev0alpha.GetShareResponse,
  /** @param {!proto.cs3.sharev0alpha.GetShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharev0alpha.GetShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharev0alpha.GetShareRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharev0alpha.GetShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharev0alpha.GetShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.sharev0alpha.ShareServiceClient.prototype.getShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharev0alpha.ShareService/GetShare',
      request,
      metadata,
      methodInfo_ShareService_GetShare,
      callback);
};


/**
 * @param {!proto.cs3.sharev0alpha.GetShareRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharev0alpha.GetShareResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.sharev0alpha.ShareServicePromiseClient.prototype.getShare =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getShare(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharev0alpha.ListReceivedSharesRequest,
 *   !proto.cs3.sharev0alpha.ListReceivedSharesResponse>}
 */
const methodInfo_ShareService_ListReceivedShares = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharev0alpha.ListReceivedSharesResponse,
  /** @param {!proto.cs3.sharev0alpha.ListReceivedSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharev0alpha.ListReceivedSharesResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharev0alpha.ListReceivedSharesRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharev0alpha.ListReceivedSharesResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.sharev0alpha.ShareServiceClient.prototype.listReceivedShares =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.sharev0alpha.ShareService/ListReceivedShares',
      request,
      metadata,
      methodInfo_ShareService_ListReceivedShares);
};


/**
 * @param {!proto.cs3.sharev0alpha.ListReceivedSharesRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharev0alpha.ListReceivedSharesResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.sharev0alpha.ShareServicePromiseClient.prototype.listReceivedShares =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/cs3.sharev0alpha.ShareService/ListReceivedShares',
      request,
      metadata,
      methodInfo_ShareService_ListReceivedShares);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharev0alpha.AcceptReceivedShareRequest,
 *   !proto.cs3.sharev0alpha.AcceptReceivedShareResponse>}
 */
const methodInfo_ShareService_AcceptReceivedShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharev0alpha.AcceptReceivedShareResponse,
  /** @param {!proto.cs3.sharev0alpha.AcceptReceivedShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharev0alpha.AcceptReceivedShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharev0alpha.AcceptReceivedShareRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharev0alpha.AcceptReceivedShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharev0alpha.AcceptReceivedShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.sharev0alpha.ShareServiceClient.prototype.acceptReceivedShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharev0alpha.ShareService/AcceptReceivedShare',
      request,
      metadata,
      methodInfo_ShareService_AcceptReceivedShare,
      callback);
};


/**
 * @param {!proto.cs3.sharev0alpha.AcceptReceivedShareRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharev0alpha.AcceptReceivedShareResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.sharev0alpha.ShareServicePromiseClient.prototype.acceptReceivedShare =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.acceptReceivedShare(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharev0alpha.RejectReceivedShareRequest,
 *   !proto.cs3.sharev0alpha.RejectReceivedShareResponse>}
 */
const methodInfo_ShareService_RejectReceivedShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharev0alpha.RejectReceivedShareResponse,
  /** @param {!proto.cs3.sharev0alpha.RejectReceivedShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharev0alpha.RejectReceivedShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharev0alpha.RejectReceivedShareRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharev0alpha.RejectReceivedShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharev0alpha.RejectReceivedShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.sharev0alpha.ShareServiceClient.prototype.rejectReceivedShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharev0alpha.ShareService/RejectReceivedShare',
      request,
      metadata,
      methodInfo_ShareService_RejectReceivedShare,
      callback);
};


/**
 * @param {!proto.cs3.sharev0alpha.RejectReceivedShareRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharev0alpha.RejectReceivedShareResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.sharev0alpha.ShareServicePromiseClient.prototype.rejectReceivedShare =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.rejectReceivedShare(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.cs3.sharev0alpha;

