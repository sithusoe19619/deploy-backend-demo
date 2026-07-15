const { Sequelize, DataTypes } = require('sequelize')

const DB_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/ttp'

const db = new Sequelize(DB_URL)

// models --------
const UserModel = db.define('user', {
  name: DataTypes.STRING
})

const FoodModel = db.define('food', {
  name: DataTypes.STRING
})

// model --------

module.exports = {
  db, 
  UserModel,
  FoodModel
}