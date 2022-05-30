module.exports = appInfo => {
  const config = {};

  // keys
  config.keys = appInfo.name + '_0bcb7d2f-c0be-4d2d-a3e3-72f6d4446453_1652361685709_990';

  // modules
  config.modules = {};

  // mysql
  config.mysql = {
    clients: {
      // donnot change the name
      __ebdb: {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'mysql', // recommended
        charset: 'utf8mb4_general_ci',
        hook: {
          meta: {
            long_query_time: 200,
          },
        },
      },
    },
  };

  // redis
  const __redisConnectionDefault = {
    host: '127.0.0.1',
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
