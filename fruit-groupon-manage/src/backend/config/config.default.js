module.exports = appInfo => {
  const config = {};

  // keys
  config.keys = appInfo.name + '_0bcb7d2f-c0be-4d2d-a3e3-72f6d4446453_1652361685709_990';

  // disabledModules
  config.disabledModules = [];

  // subdomainOffset
  config.subdomainOffset = 2;

  // cookies
  config.cookies = {
    sameSite: 'none',
  };

  // i18n
  // config.i18n = {
  //   defaultLocale: 'zh-cn',
  // };

  // 微信小程序配置
  config.modules = {
    'a-wechat': {
      account: {
         // web登录
         web: {
           appID: '',
           appSecret: '',
         },
         // 微信小程序
         minis: {
           default: {
             appID: 'wx889d07855b0cca0d',
             appSecret: '80b7589a589de53fcd38fce20265d9a3',
             token: 'gd_zyu',
             encodingAESKey: 'kakPaaaa48mbubbbbRe0w0ccccGbj1v0rWowctVdddd',
           },
         },
       },
     },
   };

  return config;
};



