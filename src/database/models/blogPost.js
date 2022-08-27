const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPosts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    published: {
      types: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.NOW,
    },
    updated: {
      types: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.NOW,
    }
  },
    {
      timestamps: false,
      tableName: 'BlogPosts',
    });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId', as: 'Users'
    })
  };

  return BlogPost;

}





module.exports = BlogPost;