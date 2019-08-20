'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;

  return app.model.define('robots', {
    id: { type: INTEGER(20), primaryKey: true, autoIncrement: true },
    userId: INTEGER(20),
    userOpenId: STRING(100),
    type: STRING(10),
    schedule: STRING(10),
    name: STRING(100),
    webhook: STRING(100),
    createdAt: DATE,
    updatedAt: DATE,
  });
};
