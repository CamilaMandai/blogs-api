'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', { 
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    display_name: {
      type: Sequelize.STRING(255),
    },
    email: {
      type: Sequelize.STRING(255),
    },
    password: {
      type: Sequelize.STRING(255),
    },
    image: {
      type: Sequelize.STRING(255),
    }
  });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
