'use strict';

module.exports = app => {
  app.router.get('/', 'home.render');

  app.router.get('/user/ddLogin', 'user.ddLogin');
  app.router.post('/api/user/logout', 'user.logout');
  app.router.get('/api/user/get_auth', 'user.getAuthorization');
  app.router.get('/api/current_user', 'user.getCurrentUser');

  app.router.get('/api/robot_list', 'robot.getRobotList');
};
