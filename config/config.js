const Sequelize = require('sequelize');
const DB_NAME = 'world_student'
const USER_NAME = 't183584'
const PASSWORD = 't183584'
const HOST = 'dev.vk.edu.ee'
const PORT = 5432
const DIALECT = 'postgres'
const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
 host: HOST,
 port: PORT,
 dialect: DIALECT
 })
module.exports = sequelize