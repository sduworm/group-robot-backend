/** Created by YangXiaozhe on 2018/8/31 */
'use strict';

const urlencode = require('urlencode');
const Service = require('egg').Service;
const { getHmacSHA256 } = require('./utils/dd');

class UserService extends Service {
  async query(id) {
    return await this.ctx.model.User.findOne({ where: { id } });
  }

  async register(user) {
    const newUser = await this.ctx.model.User.create(user);
    await this.ctx.model.Authorization.create({ user_id: user.id, authority: 'member' });
    return newUser;
  }

  async getDDUserInfoByCode(code) {
    const { DD_CONFIG } = this.app.config;
    const timestamp = String(Date.now());
    const signature = getHmacSHA256(timestamp, DD_CONFIG.appSecret);
    const baseGetUserInfoUrl = 'https://oapi.dingtalk.com/sns/getuserinfo_bycode';
    const requestUrl = `${baseGetUserInfoUrl}?accessKey=${DD_CONFIG.appId}&signature=${urlencode(signature)}&timestamp=${timestamp}`;
    const result = await this.ctx.curl(requestUrl, {
      method: 'POST',
      contentType: 'json',
      dataType: 'json',
      data: {
        tmp_auth_code: code,
      },
    });
    const { errcode, user_info } = result.data;
    if (errcode === 0) {
      return user_info;
    }
    return null;
  }

  async findOrCreateUser(user, origin) {
    const { nick, openid } = user;
    const users = await this.ctx.model.User.findOrCreate({
      where: {
        openId: openid,
      },
      defaults: {
        origin,
        name: nick,
        displayName: nick,
      },
    });
    if (users && users.length > 0 && users[0]) {
      return users[0].dataValues;
    }
    return null;
  }
}

module.exports = UserService;
