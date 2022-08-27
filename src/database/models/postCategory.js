const PostCategory = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
    {},
    { TimeRanges: false },
  );
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'Categories',
      through: 'PostCategory',
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'BlogPost',
      through: 'PostCategory',
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  }

  return PostCategory;

};

module.exports = PostCategory;