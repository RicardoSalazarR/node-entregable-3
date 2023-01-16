const {Sequelize} = require('sequelize')

//crear una instancia con parametros de configuracion de la base de datos
const db = new Sequelize({
    database:'coursesapp',
    username:'ricardosalazar',
    host:'localhost',
    port:'5432',
    password:'',
    dialect:'postgres'
})

module.exports = db;