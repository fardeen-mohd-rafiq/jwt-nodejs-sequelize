const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('jwt_imp', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize