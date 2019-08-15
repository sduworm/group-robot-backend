'use strict';

// const passportInit = require('./passportInit');

module.exports = app => {
  app.router.get('/', 'home.render');
  app.router.get('/user', 'home.render');

  app.router.get('/user/ddLogin', 'user.ddLogin');
  app.router.post('/api/user/logout', 'user.logout');
  app.router.get('/api/user/get_auth', 'user.getAuthorization');
  app.router.get('/api/user/current', 'user.getCurrentUser');
  app.router.get('/api/currentUser', 'user.getCurrentUser');
  // passportInit(app.passport);
};
