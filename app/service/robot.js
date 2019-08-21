'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getRobotListByUser(userId) {
    return await this.ctx.model.Robot.findAll({ where: { userId } });
  }

  async upsertRobot(robot) {
    console.log('Upsert Robot::', robot);
    return await this.ctx.model.Robot.upsert(robot);
  }
}

module.exports = UserService;
