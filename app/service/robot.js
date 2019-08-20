'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getRobotListByUser(userId) {
    return await this.ctx.model.Robot.findAll({ where: { userId } });
  }
}

module.exports = UserService;
