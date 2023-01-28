const BlogPost = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define('BlogPost', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: DataTypes.STRING(255),
    content: DataTypes.STRING(255),
    userId: DataTypes.STRING(255),
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
    {
      tableName: 'blog_posts',
      underscored: true,
      timestamps: false,
    },
  );

 // UserTable.associate = (models) => {
 //   UserTable.hasMany(models.BlogPosts, {
  //    as: 'blogPosts',
  //    foreignKey: 'user_id',
  //  });
 // }

  return UserTable;
};

module.exports = User;