'use strict';

const authUrlWhiteList = [ '/user/ddLogin' ];

const inWhiteList = (str, list) => {
  return list.find(e => str.includes(e));
};

module.exports = options => {
  return async function auth(ctx, next) {
    const { url } = ctx.request;
    if (!inWhiteList(url, authUrlWhiteList)) {
      const user = ctx.session.user;
      if (user) {
        await next(user);
      } else {
        ctx.redirect(ctx.get('referer') || '/#/scanlogin');
      }
      return;
    }
    await next();
  };
};
