export default {
  addRecipe: (parent, args, { db }, info) => {
    return db.recipes.create({
      name: args.recipeName,
      label: args.recipeName
    }).then((newRecipe) => {
      return db.recipes.findAll()
    })
  }
  // addIngredientsToRecipe: (parent, args, { db }, info) => {
  //   return db.RecipesIngredients.create({
  //     recipeId: args.recipeId,
  //     ingredientId: args.ingredientId,
  //     amount: args.amount
  //   }).then((newRecipe) => {
  //     return db.RecipesIngredients.findAll()
  //   })
  // },
}
