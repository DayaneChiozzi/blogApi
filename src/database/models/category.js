const Category = (Sequelize, DataTypes) => {
  Category = Sequelize.define('Categories', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
    {
      tableName: 'categories',
      timestamps: false,
      underscored: true,
    });

  return Category;
}

module.exports = Category;