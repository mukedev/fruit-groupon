module.exports = appInfo => {
  const config = {};

  // keys
  config.keys = appInfo.name + '_0bcb7d2f-c0be-4d2d-a3e3-72f6d4446453_1652361685709_990';

  // disabledModules
  config.disabledModules = [
    'test-dingtalk', //
    'test-flow',
    'test-hostsimple',
    'test-localeone',
    'test-localetwo',
    'test-note',
    'test-party',
    'test-partymonkey',
    'test-wechat',
    'test-wxwork',
  ];

  // instances
  config.instances = [
    {
      subdomain: '',
      password: '',
      title: '',
      config: {
        'a-base': {
          cors: { whiteList: 'http://localhost' },
        },
      },
    },
  ];

  // modules
  config.modules = {
    'a-base': {
      account: {
        // warning: if set true, should setup the provider's account of mail/sms
        needActivation: false,
      },
    },
  };

  // mysql
  config.mysql = {
    clients: {
      // donnot change the name
      __ebdb: {
        host: 'mysql', // see: docker-compose.yml
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'fruit-groupon',
        charset: 'utf8mb4_general_ci',
        hook: {
          meta: {
            long_query_time: 500,
          },
        },
      },
    },
  };

  // redis
  const __redisConnectionDefault = {
    host: '127.0.0.1', // see: docker-compose.yml
    port: 6379,
    password: '',
    db: 0,
  };
  const __redisConnectionDefaultCache = Object.assign({}, __redisConnectionDefault, {
    keyPrefix: `cache_${appInfo.name}:`,
  });
  const __redisConnectionDefaultIO = Object.assign({}, __redisConnectionDefault, {
    keyPrefix: `io_${appInfo.name}:`,
  });
  const __redisConnectionDefaultAuth = Object.assign({}, __redisConnectionDefault, {
    keyPrefix: `auth_${appInfo.name}:`,
  });

  config.redisConnection = {
    default: __redisConnectionDefault,
    cache: __redisConnectionDefaultCache,
    io: __redisConnectionDefaultIO,
    auth: __redisConnectionDefaultAuth,
  };

  config.redis = {
    clients: {
      redlock: config.redisConnection.default,
      limiter: config.redisConnection.default,
      queue: config.redisConnection.default,
      broadcast: config.redisConnection.default,
      cache: config.redisConnection.cache,
      io: config.redisConnection.io,
      auth: config.redisConnection.auth,
    },
  };

  return config;
};
