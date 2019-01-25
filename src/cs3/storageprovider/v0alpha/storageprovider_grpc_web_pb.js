/**
 * @fileoverview gRPC-Web generated client stub for cs3.storageproviderv0alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_rpc_status_pb = require('../../../cs3/rpc/status_pb.js')

var cs3_storageprovider_v0alpha_resources_pb = require('../../../cs3/storageprovider/v0alpha/resources_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.storageproviderv0alpha = require('./storageprovider_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient =
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
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.cs3.storageproviderv0alpha.StorageProviderServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.cs3.storageproviderv0alpha.StorageProviderServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.DerefRequest,
 *   !proto.cs3.storageproviderv0alpha.DerefResponse>}
 */
const methodInfo_StorageProviderService_Deref = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.DerefResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.DerefRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.DerefResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.DerefRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.DerefResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.DerefResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.deref =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/Deref',
      request,
      metadata,
      methodInfo_StorageProviderService_Deref,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.DerefRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.DerefResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.deref =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deref(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.CreateDirectoryRequest,
 *   !proto.cs3.storageproviderv0alpha.CreateDirectoryResponse>}
 */
const methodInfo_StorageProviderService_CreateDirectory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.CreateDirectoryResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.CreateDirectoryRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.CreateDirectoryResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.CreateDirectoryRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.CreateDirectoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.CreateDirectoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.createDirectory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/CreateDirectory',
      request,
      metadata,
      methodInfo_StorageProviderService_CreateDirectory,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.CreateDirectoryRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.CreateDirectoryResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.createDirectory =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createDirectory(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.DeleteRequest,
 *   !proto.cs3.storageproviderv0alpha.DeleteResponse>}
 */
const methodInfo_StorageProviderService_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.DeleteResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.DeleteRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.DeleteResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.DeleteRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.DeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.DeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/Delete',
      request,
      metadata,
      methodInfo_StorageProviderService_Delete,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.DeleteRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.DeleteResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.delete(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.MoveRequest,
 *   !proto.cs3.storageproviderv0alpha.MoveResponse>}
 */
const methodInfo_StorageProviderService_Move = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.MoveResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.MoveRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.MoveResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.MoveRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.MoveResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.MoveResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.move =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/Move',
      request,
      metadata,
      methodInfo_StorageProviderService_Move,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.MoveRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.MoveResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.move =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.move(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.StatRequest,
 *   !proto.cs3.storageproviderv0alpha.StatResponse>}
 */
const methodInfo_StorageProviderService_Stat = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.StatResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.StatRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.StatResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.StatRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.StatResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.StatResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.stat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/Stat',
      request,
      metadata,
      methodInfo_StorageProviderService_Stat,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.StatRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.StatResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.stat =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.stat(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.ListRequest,
 *   !proto.cs3.storageproviderv0alpha.ListResponse>}
 */
const methodInfo_StorageProviderService_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.ListResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.ListRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.ListResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.ListRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.ListResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/List',
      request,
      metadata,
      methodInfo_StorageProviderService_List);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.ListRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.ListResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/List',
      request,
      metadata,
      methodInfo_StorageProviderService_List);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.StartWriteSessionRequest,
 *   !proto.cs3.storageproviderv0alpha.StartWriteSessionResponse>}
 */
const methodInfo_StorageProviderService_StartWriteSession = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.StartWriteSessionResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.StartWriteSessionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.StartWriteSessionResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.StartWriteSessionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.StartWriteSessionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.StartWriteSessionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.startWriteSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/StartWriteSession',
      request,
      metadata,
      methodInfo_StorageProviderService_StartWriteSession,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.StartWriteSessionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.StartWriteSessionResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.startWriteSession =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.startWriteSession(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.FinishWriteSessionRequest,
 *   !proto.cs3.storageproviderv0alpha.FinishWriteSessionResponse>}
 */
const methodInfo_StorageProviderService_FinishWriteSession = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.FinishWriteSessionResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.FinishWriteSessionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.FinishWriteSessionResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.FinishWriteSessionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.FinishWriteSessionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.FinishWriteSessionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.finishWriteSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/FinishWriteSession',
      request,
      metadata,
      methodInfo_StorageProviderService_FinishWriteSession,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.FinishWriteSessionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.FinishWriteSessionResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.finishWriteSession =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.finishWriteSession(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.ReadRequest,
 *   !proto.cs3.storageproviderv0alpha.ReadResponse>}
 */
const methodInfo_StorageProviderService_Read = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.ReadResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.ReadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.ReadResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.ReadRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.ReadResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.read =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/Read',
      request,
      metadata,
      methodInfo_StorageProviderService_Read);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.ReadRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.ReadResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.read =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/Read',
      request,
      metadata,
      methodInfo_StorageProviderService_Read);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.ListVersionsRequest,
 *   !proto.cs3.storageproviderv0alpha.ListVersionsResponse>}
 */
const methodInfo_StorageProviderService_ListVersions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.ListVersionsResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.ListVersionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.ListVersionsResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.ListVersionsRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.ListVersionsResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.listVersions =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/ListVersions',
      request,
      metadata,
      methodInfo_StorageProviderService_ListVersions);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.ListVersionsRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.ListVersionsResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.listVersions =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/ListVersions',
      request,
      metadata,
      methodInfo_StorageProviderService_ListVersions);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.ReadVersionRequest,
 *   !proto.cs3.storageproviderv0alpha.ReadVersionResponse>}
 */
const methodInfo_StorageProviderService_ReadVersion = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.ReadVersionResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.ReadVersionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.ReadVersionResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.ReadVersionRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.ReadVersionResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.readVersion =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/ReadVersion',
      request,
      metadata,
      methodInfo_StorageProviderService_ReadVersion);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.ReadVersionRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.ReadVersionResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.readVersion =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/ReadVersion',
      request,
      metadata,
      methodInfo_StorageProviderService_ReadVersion);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.RestoreVersionRequest,
 *   !proto.cs3.storageproviderv0alpha.RestoreVersionResponse>}
 */
const methodInfo_StorageProviderService_RestoreVersion = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.RestoreVersionResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.RestoreVersionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.RestoreVersionResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.RestoreVersionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.RestoreVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.RestoreVersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.restoreVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/RestoreVersion',
      request,
      metadata,
      methodInfo_StorageProviderService_RestoreVersion,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.RestoreVersionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.RestoreVersionResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.restoreVersion =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.restoreVersion(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.ListRecycleRequest,
 *   !proto.cs3.storageproviderv0alpha.ListRecycleResponse>}
 */
const methodInfo_StorageProviderService_ListRecycle = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.ListRecycleResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.ListRecycleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.ListRecycleResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.ListRecycleRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.ListRecycleResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.listRecycle =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/ListRecycle',
      request,
      metadata,
      methodInfo_StorageProviderService_ListRecycle);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.ListRecycleRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.ListRecycleResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.listRecycle =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/ListRecycle',
      request,
      metadata,
      methodInfo_StorageProviderService_ListRecycle);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest,
 *   !proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse>}
 */
const methodInfo_StorageProviderService_RestoreRecycleItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.restoreRecycleItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/RestoreRecycleItem',
      request,
      metadata,
      methodInfo_StorageProviderService_RestoreRecycleItem,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.restoreRecycleItem =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.restoreRecycleItem(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.PurgeRecycleRequest,
 *   !proto.cs3.storageproviderv0alpha.PurgeRecycleResponse>}
 */
const methodInfo_StorageProviderService_PurgeRecycle = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.PurgeRecycleResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.PurgeRecycleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.PurgeRecycleResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.PurgeRecycleRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.PurgeRecycleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.PurgeRecycleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.purgeRecycle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/PurgeRecycle',
      request,
      metadata,
      methodInfo_StorageProviderService_PurgeRecycle,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.PurgeRecycleRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.PurgeRecycleResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.purgeRecycle =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.purgeRecycle(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.SetACLRequest,
 *   !proto.cs3.storageproviderv0alpha.SetACLResponse>}
 */
const methodInfo_StorageProviderService_SetACL = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.SetACLResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.SetACLRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.SetACLResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.SetACLRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.SetACLResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.SetACLResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.setACL =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/SetACL',
      request,
      metadata,
      methodInfo_StorageProviderService_SetACL,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.SetACLRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.SetACLResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.setACL =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.setACL(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.UpdateACLRequest,
 *   !proto.cs3.storageproviderv0alpha.UpdateACLResponse>}
 */
const methodInfo_StorageProviderService_UpdateACL = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.UpdateACLResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.UpdateACLRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.UpdateACLResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.UpdateACLRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.UpdateACLResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.UpdateACLResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.updateACL =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/UpdateACL',
      request,
      metadata,
      methodInfo_StorageProviderService_UpdateACL,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.UpdateACLRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.UpdateACLResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.updateACL =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateACL(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.UnsetACLRequest,
 *   !proto.cs3.storageproviderv0alpha.UnsetACLResponse>}
 */
const methodInfo_StorageProviderService_UnsetACL = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.UnsetACLResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.UnsetACLRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.UnsetACLResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.UnsetACLRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.UnsetACLResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.UnsetACLResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.unsetACL =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/UnsetACL',
      request,
      metadata,
      methodInfo_StorageProviderService_UnsetACL,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.UnsetACLRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.UnsetACLResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.unsetACL =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.unsetACL(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.GetQuotaRequest,
 *   !proto.cs3.storageproviderv0alpha.GetQuotaResponse>}
 */
const methodInfo_StorageProviderService_GetQuota = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.GetQuotaResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.GetQuotaRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.GetQuotaResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.GetQuotaRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.GetQuotaResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.GetQuotaResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.getQuota =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/GetQuota',
      request,
      metadata,
      methodInfo_StorageProviderService_GetQuota,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.GetQuotaRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.GetQuotaResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.getQuota =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getQuota(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.cs3.storageproviderv0alpha;

