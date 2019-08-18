
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('RecipesIngredients', [
      {
        recipeId: 1,
        ingredientId: 1,
        amount: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        recipeId: 1,
        ingredientId: 2,
        amount: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        recipeId: 2,
        ingredientId: 3,
        amount: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        recipeId: 2,
        ingredientId: 4,
        amount: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('RecipesIngredients', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
}
