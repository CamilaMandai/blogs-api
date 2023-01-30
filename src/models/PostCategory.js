const PostCategory = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define(
    'PostCategory',
    {
      // postId: DataTypes.INTEGER,
      // categoryId: DataTypes.INTEGER,
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
      foreignKey: 'post_id',
      otherKey: 'category_id',
      through: PostCategoryTable
    });

    Category.belongsToMany(BlogPost, {
      as: 'blogPosts',
      // a FK sempre sera o model da esquerda
      foreignKey: 'category_id',
      otherKey: 'post_id',
      through: PostCategoryTable
    });
  }

  return PostCategoryTable;
}

module.exports = PostCategory;