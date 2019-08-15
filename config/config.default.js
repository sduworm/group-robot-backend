'use strict';

const { DD_CONFIG } = require('./config.dd.js');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1535036213132_6720';

  // add your config here
  config.middleware = [];

  config.DD_CONFIG = DD_CONFIG;

  config.sequelize = {
    dialect: 'mysql',
    host: 'www.songshuyang.com',
    port: 3306,
    database: 'group-robot',
    username: 'group-robot',
    password: 'group-robot',
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

