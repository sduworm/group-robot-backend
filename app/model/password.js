/** Created by YangXiaozhe on 2018/8/31 */
'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  return app.model.define('password', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id: STRING(100),
    password: STRING(100),
    created_at: DATE,
    updated_at: DATE,
  });
};
