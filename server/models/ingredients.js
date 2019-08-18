module.exports = (sequelize, DataTypes) => {
  var Ingredients = sequelize.define('ingredients', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    name: DataTypes.STRING
  })
  Ingredients.associate = function (models) {
    Ingredients.belongsToMany(models.recipes, {
      through: 'RecipesIngredients',
      foreignKey: 'recipeId'
    })
  }
  return Ingredients
}
