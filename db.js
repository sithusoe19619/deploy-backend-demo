const { Sequelize, DataTypes } = require('sequelize')

const DB_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/ttp'

const db = new Sequelize(DB_URL)

// models
const UserModel = db.define('user', {
  name: DataTypes.STRING
})

module.exports = {
  db, 
  UserModel
}