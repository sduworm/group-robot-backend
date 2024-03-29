'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async logout() {
    const ctx = this.ctx;
    try {
      ctx.logout();
    } catch (e) {
      // 在没有session的情况下强行logout，会进入error
      console.error(e);
    }
    ctx.body = { status: 'ok' };
  }

  async ddLogin() {
    const { ctx, service } = this;
    const { query } = ctx;
    const { code } = query;
    const ddUser = await service.user.getDDUserInfoByCode(code);
    if (!ddUser) {
      ctx.redirect(ctx.get('referer') || '/#/404');
      return;
    }
    const user = await service.user.findOrCreateUser(ddUser, 'dd');
    ctx.session.user = user;

    ctx.redirect(ctx.get('referer') || '/');
  }

  async getAuthorization() {
    const { ctx, service } = this;
    const { user } = ctx.session.passport || {};
    const auth = await service.authorization.getAuth(user ? user.id : 'non-existent-user');
    ctx.body = { auth };
  }

  async getCurrentUser() {
    const { ctx } = this;
    const { user } = ctx.session;
    ctx.body = user;
  }
}

module.exports = UserController;
