'use strict';

const Controller = require('egg').Controller;

module.exports = class HomeController extends Controller {
  async render() {
    await this.ctx.render('index.html');
  }
};
