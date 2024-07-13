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
    await queryInterface.bulkInsert('settimes', [
      {
        set_time_id: 1, 
        event_id:1,
        stage_id:1,
        band_id:1,
        start_time:'2027-07-13T15:30:00',
        end_time: '2027-07-13T16:30:00'
      },
      {
        set_time_id: 2, 
        event_id:2,
        stage_id:2,
        band_id:2,
        start_time:'2024-12-28T12:00:00',
        end_time: '2024-12-28T13:00:00'
      },
      {
        set_time_id: 3, 
        event_id:3,
        stage_id:3,
        band_id:3,
        start_time:'2025-01-06T15:00:00',
        end_time: '2025-01-06T16:00:00'
      },
      {
        set_time_id: 4, 
        event_id:4,
        stage_id:4,
        band_id:4,
        start_time:'2025-03-04T13:00:00',
        end_time: '2025-013-04T14:00:00'
      },
    ], {})
    },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
