//define how to have obj inside db
const Sequelize = require('sequelize');
const db = require('../utils/database')


//defining model with datatypes - will create for us
const Employee = db.define('employees', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    lastname: {
        type: Sequelize.STRING

    },
    dept: {
        type: Sequelize.STRING
    },
    title: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING

    },
    salary: {
        type: Sequelize.STRING

    },
    birthdate: {
        type: Sequelize.DATE

    },
    joindate: {
        type: Sequelize.DATE

    }
})

module.exports = Employee;
