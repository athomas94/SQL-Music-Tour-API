'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Bands', [
      {name: 'Jukebox the Ghost',
      totalMembers: 3,
      genre: 'Alternative',
      createdAt: new Date(),
      updatedAt: new Date()},
      {name: 'ABBA',
      totalMembers: 4,
      genre: 'Disco',
      createdAt: new Date(),
      updatedAt: new Date()},
      {name: 'The Eagles',
      totalMembers: 6,
      genre: 'Rock',
      createdAt: new Date(),
      updatedAt: new Date()},
      {name: 'Boston',
      totalMembers: 7,
      genre: 'Rock',
      createdAt: new Date(),
      updatedAt: new Date()},
      {name: 'Chicago',
      totalMembers: 12,
      genre: 'Rock',
      createdAt: new Date(),
      updatedAt: new Date()}
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Bands', null, {})
  }
};
