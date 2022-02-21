'use strict';
module.exports = {
 up: async (queryInterface, Sequelize) => {
 await queryInterface.createTable('siswa', {
 nisn: {
 allowNull: false,
 autoIncrement: true,
 primaryKey: true,
 type: Sequelize.INTEGER
 },
 nis: {
 type: Sequelize.CHAR
 },
 nama: {
 type: Sequelize.STRING
 },
 id_kelas: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
    model: "kelas",
    key: "id_kelas"
    }
    },
 alamat: {
 type: Sequelize.TEXT
 },
 no_tlp: {
 type: Sequelize.STRING
 },
 createdAt: {
 allowNull: false,
 type: Sequelize.DATE
 },
 updatedAt: {
 allowNull: false,
 type: Sequelize.DATE
 }
 });
 },
 down: async (queryInterface, Sequelize) => {
 await queryInterface.dropTable('siswa');
 }
};