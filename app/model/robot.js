'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;

  return app.model.define('robots', {
    id: { type: INTEGER(20), primaryKey: true, autoIncrement: true },
    userId: INTEGER(20),
    userOpenId: STRING(100),
    type: STRING(50),
    schedule: STRING(50),
    name: STRING(50),
    webhook: STRING(500),
    createdAt: DATE,
    updatedAt: DATE,
  });
};
