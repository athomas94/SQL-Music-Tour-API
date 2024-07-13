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
    await queryInterface.bulkInsert('stages', [
      {stage_name: 'stage 1', stage_id:1},
      {stage_name: 'stage 2', stage_id:2},
      {stage_name: 'stage 3', stage_id:3},
      {stage_name: 'stage 4', stage_id:4}
    ], {})
    },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('stages', null, {})
  }
};
