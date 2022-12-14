'use strict';
// validations https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      displayName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        validate: {
          isEmail: true,
        }
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(64),
        validate: {
          is: /^[0-9a-f]{64}$/i
        }
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING,
      }
    });
  },


  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('Users');

  }
};
