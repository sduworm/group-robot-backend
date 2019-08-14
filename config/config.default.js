'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1535036213132_6720';

  // add your config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql',
    host: 'www.songshuyang.com',
    port: 3306,
    database: 'fixed-throwing',
    username: 'throwing',
    password: 'throwing_throwing',
  };

  config.security = {
    csrf: {
      enable: false,
      // ignore: (ctx) => ['/api/user/login', '/api/user/logout'].includes(ctx.originalUrl),
    },
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.static = {
    prefix: '/',
  };

  return config;
};

