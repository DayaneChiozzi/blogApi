'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('Categories', {
      id: Sequelize.INTEGER,
      name: Sequelize.STRING,
    });
  },

  down: async (queryInterface, _Sequelize) => {

    await queryInterface.dropTable('Categories');

  }
};
