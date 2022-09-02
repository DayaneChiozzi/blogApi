module.exports = (Sequelize, DataTypes) => {
  const Category = Sequelize.define('Categories', {
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
      tableName: 'Categories',
      timestamps: false,
      underscored: true,
    });

  return Category;
}
