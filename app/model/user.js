'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;

  return app.model.define('users', {
    id: { type: INTEGER(20), primaryKey: true, autoIncrement: true },
    openId: STRING(100),
    origin: STRING(10),
    name: STRING(100),
    displayName: STRING(100),
    email: STRING(50),
    telephone: STRING(20),
    photo: STRING(100),
    createdAt: DATE,
    updatedAt: DATE,
  });
};
