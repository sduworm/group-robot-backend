'use strict';

const Controller = require('egg').Controller;

class RobotController extends Controller {
  async getRobotList() {
    const { ctx, service } = this;
    const { user } = ctx.session;
    ctx.body = await service.robot.getRobotListByUser(user.id);
  }
}

module.exports = RobotController;
