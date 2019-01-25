/**
 * @fileoverview gRPC-Web generated client stub for cs3.appproviderv0alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_rpc_status_pb = require('../../../cs3/rpc/status_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.appproviderv0alpha = require('./appprovider_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.appproviderv0alpha.AppProviderServiceClient =
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
proto.cs3.appproviderv0alpha.AppProviderServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.cs3.appproviderv0alpha.AppProviderServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.cs3.appproviderv0alpha.AppProviderServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.appproviderv0alpha.GetIFrameRequest,
 *   !proto.cs3.appproviderv0alpha.GetIFrameResponse>}
 */
const methodInfo_AppProviderService_GetIFrame = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.appproviderv0alpha.GetIFrameResponse,
  /** @param {!proto.cs3.appproviderv0alpha.GetIFrameRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.appproviderv0alpha.GetIFrameResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.appproviderv0alpha.GetIFrameRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.appproviderv0alpha.GetIFrameResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.appproviderv0alpha.GetIFrameResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.appproviderv0alpha.AppProviderServiceClient.prototype.getIFrame =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.appproviderv0alpha.AppProviderService/GetIFrame',
      request,
      metadata,
      methodInfo_AppProviderService_GetIFrame,
      callback);
};


/**
 * @param {!proto.cs3.appproviderv0alpha.GetIFrameRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.appproviderv0alpha.GetIFrameResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.appproviderv0alpha.AppProviderServicePromiseClient.prototype.getIFrame =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getIFrame(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.cs3.appproviderv0alpha;

