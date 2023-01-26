const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
    image: DataTypes.STRING(255)
  },
    {
      tableName: 'users',
      underscored: true,
      timestamps: false,
    },
  );

  UserTable.associate = (models) => {
    UserTable.hasMany(models.BlogPosts, {
      as: 'blogPost',
      foreignKey: 'user_id',
    });
  }

  return UserTable;
};

module.exports = UserSchema;