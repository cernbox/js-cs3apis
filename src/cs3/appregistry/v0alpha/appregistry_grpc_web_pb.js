/**
 * @fileoverview gRPC-Web generated client stub for cs3.appregistryv0alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_rpc_status_pb = require('../../../cs3/rpc/status_pb.js')

var cs3_appregistry_v0alpha_resources_pb = require('../../../cs3/appregistry/v0alpha/resources_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.appregistryv0alpha = require('./appregistry_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.appregistryv0alpha.AppRegistryServiceClient =
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
proto.cs3.appregistryv0alpha.AppRegistryServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.cs3.appregistryv0alpha.AppRegistryServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.cs3.appregistryv0alpha.AppRegistryServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.appregistryv0alpha.FindRequest,
 *   !proto.cs3.appregistryv0alpha.FindResponse>}
 */
const methodInfo_AppRegistryService_Find = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.appregistryv0alpha.FindResponse,
  /** @param {!proto.cs3.appregistryv0alpha.FindRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.appregistryv0alpha.FindResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.appregistryv0alpha.FindRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.appregistryv0alpha.FindResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.appregistryv0alpha.FindResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.appregistryv0alpha.AppRegistryServiceClient.prototype.find =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.appregistryv0alpha.AppRegistryService/Find',
      request,
      metadata,
      methodInfo_AppRegistryService_Find,
      callback);
};


/**
 * @param {!proto.cs3.appregistryv0alpha.FindRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.appregistryv0alpha.FindResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.appregistryv0alpha.AppRegistryServicePromiseClient.prototype.find =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.find(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.cs3.appregistryv0alpha;

