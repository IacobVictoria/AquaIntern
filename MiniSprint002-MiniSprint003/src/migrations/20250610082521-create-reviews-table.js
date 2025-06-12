module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Hotel_Reviews', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      rating_cleanliness: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      rating_location: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      rating_service: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      rating_value: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      review_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', 
          key: 'Id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
       hotel_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Hotels',
          key: 'GlobalPropertyID',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Hotel_Reviews');
  }
};
