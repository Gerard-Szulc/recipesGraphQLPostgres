module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'ingredients',
      [
        {
          name: 'Sour',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Onion',
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          name: 'Water',
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          name: 'Salt',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ingredients', null, {})
  }
}
