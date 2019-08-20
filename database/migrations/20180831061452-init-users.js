'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users, authorizations 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER(20), primaryKey: true, autoIncrement: true },
      open_id: STRING(100),
      origin: STRING(10),
      name: STRING(100),
      display_name: STRING(100),
      password: STRING(30),
      email: STRING(50),
      telephone: STRING(20),
      photo: STRING(100),
      provider: STRING(100),
      created_at: DATE,
      updated_at: DATE,
    });

    await queryInterface.createTable('robots', {
      id: { type: INTEGER(20), primaryKey: true, autoIncrement: true },
      user_id: INTEGER(20),
      user_open_id: STRING(100),
      type: STRING(10),
      schedule: STRING(10),
      name: STRING(100),
      webhook: STRING(100),
      created_at: DATE,
      updated_at: DATE,
    });

    await queryInterface.bulkInsert('robots', [{
      id: 1,
      user_id: 1,
      user_open_id: '',
      type: 'T',
      schedule: 'S',
      name: 'N',
      webhook: 'W',
    }]);
  },
  // 在执行数据库降级时调用的函数，删除 users, authorizations 表
  down: async queryInterface => {
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('robots');
  },
};
