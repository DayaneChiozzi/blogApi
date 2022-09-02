module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
    {},
    { TimeRanges: false },
  );
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categories, {
      as: 'categories',
      through: 'postCategory',
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Categories.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: 'postCategory',
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  }

  return PostCategory;

};
