'use strict';
const crypto = require('crypto');

module.exports = {
  getHmacSHA256: (data, key) => {
    const hmac = crypto.createHmac('sha256', key);
    hmac.update(data);
    return hmac.digest('base64');
  },
};
