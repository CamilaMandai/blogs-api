const BlogPost = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define('BlogPost', {
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
    },
    title: DataTypes.STRING(255),
    content: DataTypes.STRING(255),
    userId: DataTypes.INTEGER,
    // categoryId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
    {
      tableName: 'blog_posts',
      underscored: true,
      timestamps: false,
    },
  );
  BlogPostTable.associate = (models) => {
    BlogPostTable.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_id',
    });
  }

  return BlogPostTable;
};

module.exports = BlogPost;