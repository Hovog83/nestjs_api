
"use strict";

/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn("user", "first_name", {
          type: Sequelize.STRING,
          allowNull: true
        }, {
          transaction: t
        }),
        queryInterface.addColumn("user", "last_name", {
          type: Sequelize.STRING,
          allowNull: true
        }, {
          transaction: t
        })
      ]);
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      Promise.all([
        queryInterface.removeColumn("user", "first_name", {
          transaction: t
        })
      ]);
      return Promise.all([
        queryInterface.removeColumn("user", "last_name", {
          transaction: t
        })
      ]);
    });
  }
};