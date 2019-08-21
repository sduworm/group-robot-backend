'use strict';

const Controller = require('egg').Controller;

class RobotController extends Controller {
  async getRobotList() {
    const { ctx, service } = this;
    const { user } = ctx.session;
    ctx.body = await service.robot.getRobotListByUser(user.id);
  }

  async setRobot() {
    const { ctx, service } = this;
    const { user } = ctx.session;
    const { id, openId } = user;
    const robot = Object.assign(ctx.request.body, { userId: id, userOpenId: openId });

    ctx.body = await service.robot.upsertRobot(robot);
  }
}

module.exports = RobotController;
