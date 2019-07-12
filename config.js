'option strict';

const config = {};

config.networkNodeListJSONurl = './arqma-nodes.json';

config.serverHost = '127.0.0.1';

config.serverPort = 8050;

config.networkNodeTimeout = 10;

config.statsUpdateInterval = 15;

config.nodeTTL = 3600;

config.rpcPort = 19994;

config.queueReseedDelay = 60;

config.dnsServers = ['1.1.1.1', '8.8.8.8'];

config.logging = {
  files: {
    level: 'error',
    directory: 'logs',
    flushInterval: 5
  },
  console: {
    level: 'info',
    colors: true
  }
};

module.exports = config;
