"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Hotels", {
      GlobalPropertyID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true, 
      },
      SourcePropertyID: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      GlobalPropertyName: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      GlobalChainCode: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      PropertyAddress1: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      PropertyAddress2: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      PrimaryAirportCode: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      CityID: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Cities",
          key: "CityID",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      PropertyStateProvinceID: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Regions",
          key: "PropertyStateProvinceID",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      PropertyZipPostal: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      PropertyPhoneNumber: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      PropertyFaxNumber: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      SabrePropertyRating: {
        type: Sequelize.DECIMAL(3, 1),
        allowNull: true,
      },
      PropertyLatitude: {
        type: Sequelize.DECIMAL(9, 6),
        allowNull: true,
      },
      PropertyLongitude: {
        type: Sequelize.DECIMAL(9, 6),
        allowNull: true,
      },
      SourceGroupCode: {
        type: Sequelize.STRING(10),
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Hotels");
  },
};
