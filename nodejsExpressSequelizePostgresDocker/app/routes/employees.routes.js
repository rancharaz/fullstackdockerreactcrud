// defining the routes of the employees
const controller = require('../controllers/employee.controller')
const router = require('express').Router();

//CRUD router
    router
    .get('/employees', controller.getAll)
    .get('/employees/:id', controller.getOne)
    .post('/employees', controller.createOne)
    .put('/employees/:id', controller.updateOne)
    .delete('/employees/:id', controller.deleteOne)

module.exports = router;