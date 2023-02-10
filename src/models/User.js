const User = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    displayName: DataTypes.STRING(255),
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
   UserTable.hasMany(models.BlogPost, {
     as: 'blogPosts',
     foreignKey: 'userId',
   });
 }

  return UserTable;
};

module.exports = User;