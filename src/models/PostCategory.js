const PostCategory = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define(
    'PostCategory',
    {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
  },
    {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true
    });

  PostCategoryTable.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      // a FK sempre sera o model da esquerda
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategoryTable
    });

    Category.belongsToMany(BlogPost, {
      as: 'blogPosts',
      // a FK sempre sera o model da esquerda
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategoryTable
    });
  }

  return PostCategoryTable;
}

module.exports = PostCategory;