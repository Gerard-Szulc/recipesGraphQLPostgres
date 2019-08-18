module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'recipes',
      [
        {
          name: 'Bread',
          label: 'Bread',
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          name: 'Onion Soup',
          label: 'Onion Soup',
          createdAt: new Date(),
          updatedAt: new Date()

        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('recipes', null, {})
  }
}
