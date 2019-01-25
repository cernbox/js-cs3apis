const {grpcWeb} = require('../node_modules/grpc-web/index.js');
const {StorageProviderServiceClient} = require('./cs3/storageprovider/v0alpha/storageprovider_grpc_web_pb.js');
const {CreateDirectoryRequest, CreateDirectoryResponse} = require('./cs3/storageprovider/v0alpha/storageprovider_pb.js');

const client = new StorageProviderServiceClient("http://localhost:8080", null, null);
const req = new CreateDirectoryRequest();
req.setFilename("/test-file-from-grpc-web");

const call = client.createDirectory(req, {'custom-header-1': 'value1'},
  function(err, response) {
    console.log(response.getStatus().getCode());
  });
call.on('status', (status) => {
  console.log("status ...", status);
});
