const Category = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define('Category', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING(255),
  },
    {
      tableName: 'categories',
      underscored: true,
      timestamps: false,
    },
  );

  return CategoryTable;
};

module.exports = Category;