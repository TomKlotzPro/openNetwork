const MemoryDatabaseServer = require('../lib/MemoryDatabaseServer');

module.exports = async () => {
  await MemoryDatabaseServer.start();
};
