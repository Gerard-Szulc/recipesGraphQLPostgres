module.exports = {
  up: (queryInterface, Sequelize) => {
    // Product belongsToMany Tag
    return queryInterface.createTable('RecipesIngredients', {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      recipeId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      ingredientId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    // remove table
    return queryInterface.dropTable('RecipesIngredients')
  }
}
