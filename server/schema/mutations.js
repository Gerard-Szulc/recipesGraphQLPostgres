import types from './types'
export default `
  type Mutation {
    addRecipe(recipeName: String): [Recipe!]
  }
`
