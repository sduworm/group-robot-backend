'use strict';

module.exports = app => {
  const { STRING, DATE } = app.Sequelize;

  return app.model.define('robots', {
    id: { type: STRING(100), primaryKey: true, autoIncrement: true },
    userOpenId: STRING(100),
    type: STRING(10),
    schedule: STRING(10),
    name: STRING(100),
    webhook: STRING(100),
    createdAt: DATE,
    updatedAt: DATE,
  });
};
