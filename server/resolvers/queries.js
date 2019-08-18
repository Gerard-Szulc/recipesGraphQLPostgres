// import sequelize from 'sequelize'

export default {
  recipes: (parent, args, { db }, info) => {
    return db.recipes.findAll()
  },
  ingredients: (parent, args, { db }, info) => {
    const where = args.recipeId ? { id: args.recipeId } : {}
    return db.ingredients.findAll({
      include: [
        {
          model: db.recipes,
          attributes: ['name'],
          where
        }
      ]
    })
  },
  ingredientsSearch: (parent, args, { db }, info) => {
    const where = args.name ? { name: args.name } : {}
    return db.recipes.findAll({
      include: [
        {
          model: db.ingredients,
          attributes: ['name'],
          where
        }
      ]
    })
  }
}
