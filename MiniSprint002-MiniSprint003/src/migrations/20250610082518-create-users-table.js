"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      FirstName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      LastName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      Email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      ProfileImageUrl: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Password: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      RememberToken: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
