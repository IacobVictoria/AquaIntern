module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('HotelReviews', 'travel_date', {
      type: Sequelize.DATE,
      allowNull: true,
    });

    await queryInterface.addColumn('HotelReviews', 'trip_type', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('HotelReviews', 'travel_date');
    await queryInterface.removeColumn('HotelReviews', 'trip_type');
  },
};
