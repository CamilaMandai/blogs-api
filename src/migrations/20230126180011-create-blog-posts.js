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
    // category_id: {
    //     type: Sequelize.ARRAY,
    // },
    // created_at: {
    //    type: Sequelize.DATE,
    //  },
    // updated_at: {
    //    type: Sequelize.DATE,
    // },
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
      // createdAt: {
      //   field: 'published',
      //   type: Sequelize.DATE,
      //   allowNull: false,
      // },
      // updatedAt: {
      //   field: 'updated',
      //   type: Sequelize.DATE,
      //   allowNull: false,
      // }
      published: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date,
      },
      updated: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date,
      }
   });
    
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  }
};
