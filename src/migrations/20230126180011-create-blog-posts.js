'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', { 
      id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
      title: {
        type: Sequelize.STRING(255),
    },
      content: {
        type: Sequelize.STRING(255),        
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      created_at: {
        field: 'published',
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        field: 'updated',
        type: Sequelize.DATE,
        allowNull: false,
      }
   });
    
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  }
};
