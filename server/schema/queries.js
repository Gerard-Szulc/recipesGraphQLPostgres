import types from './types'
export default `
  type Query {
    recipes: [Recipe!],
    ingredients(recipeId: Int): [Ingredient!],
    ingredientsSearch(name: String): [Recipe!]
 }
`
