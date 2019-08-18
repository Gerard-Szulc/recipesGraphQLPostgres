module.exports = (sequelize, DataTypes) => {
  var Recipes = sequelize.define('recipes', {
    name: DataTypes.STRING,
    label: DataTypes.STRING,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE
  })
  Recipes.associate = function (models) {
    Recipes.belongsToMany(models.ingredients, {
      through: 'RecipesIngredients',
      foreignKey: 'ingredientId'
    })
  }
  return Recipes
}
