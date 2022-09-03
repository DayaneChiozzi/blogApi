module.exports = (Sequelize, DataTypes) => {
  const category = Sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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

  return category;
}
