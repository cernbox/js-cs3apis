/**
 * @fileoverview gRPC-Web generated client stub for cs3.authv0alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_auth_v0alpha_resources_pb = require('../../../cs3/auth/v0alpha/resources_pb.js')

var cs3_rpc_status_pb = require('../../../cs3/rpc/status_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.authv0alpha = require('./auth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.authv0alpha.AuthServiceClient =
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
proto.cs3.authv0alpha.AuthServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.cs3.authv0alpha.AuthServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.cs3.authv0alpha.AuthServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.authv0alpha.GenerateAccessTokenRequest,
 *   !proto.cs3.authv0alpha.GenerateAccessTokenResponse>}
 */
const methodInfo_AuthService_GenerateAccessToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.authv0alpha.GenerateAccessTokenResponse,
  /** @param {!proto.cs3.authv0alpha.GenerateAccessTokenRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.authv0alpha.GenerateAccessTokenResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.authv0alpha.GenerateAccessTokenRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.authv0alpha.GenerateAccessTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.authv0alpha.GenerateAccessTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.authv0alpha.AuthServiceClient.prototype.generateAccessToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.authv0alpha.AuthService/GenerateAccessToken',
      request,
      metadata,
      methodInfo_AuthService_GenerateAccessToken,
      callback);
};


/**
 * @param {!proto.cs3.authv0alpha.GenerateAccessTokenRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.authv0alpha.GenerateAccessTokenResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.authv0alpha.AuthServicePromiseClient.prototype.generateAccessToken =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.generateAccessToken(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.authv0alpha.WhoAmIRequest,
 *   !proto.cs3.authv0alpha.WhoAmIResponse>}
 */
const methodInfo_AuthService_WhoAmI = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.authv0alpha.WhoAmIResponse,
  /** @param {!proto.cs3.authv0alpha.WhoAmIRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.authv0alpha.WhoAmIResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.authv0alpha.WhoAmIRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.authv0alpha.WhoAmIResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.authv0alpha.WhoAmIResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.authv0alpha.AuthServiceClient.prototype.whoAmI =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.authv0alpha.AuthService/WhoAmI',
      request,
      metadata,
      methodInfo_AuthService_WhoAmI,
      callback);
};


/**
 * @param {!proto.cs3.authv0alpha.WhoAmIRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.authv0alpha.WhoAmIResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.authv0alpha.AuthServicePromiseClient.prototype.whoAmI =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.whoAmI(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.cs3.authv0alpha;

