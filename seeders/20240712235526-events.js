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
    await queryInterface.bulkInsert('events', [
      { 
        event_id: 1,
        name:'BubbleBowl', 
        date: '2027-07-13', 
        event_start_time: '2027-07-13T17:00:00', 
        event_end_time: '2027-07-13T23:30:00'
      },
      { 
        event_id: 2,
        name:'Tucker and the Goldens', 
        date: '2024-12-28', 
        event_start_time: '2024-12-28T15:00:00', 
        event_end_time: '2024-12-28T21:00:00'
      },
      { 
        event_id: 3,
        name:'Birthday Bash', 
        date: '2025-01-06', 
        event_start_time: '2025-01-06T17:00:00', 
        event_end_time: '2025-01-06T23:30:00'
      },
      { 
        event_id: 4,
        name:'Another Bachelor Party party', 
        date: '2025-03-04', 
        event_start_time: '2025-03-04T17:00:00', 
        event_end_time: '2025-03-04T23:30:00'
      }     
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('events', null, {});
  }
};
