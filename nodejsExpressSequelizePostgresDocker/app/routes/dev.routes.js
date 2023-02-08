//creating routes for employee bind with controller
const controller = require('../controllers/dev.controller');
const router = require('express').Router()

router.get('/employee', controller.version);

module.exports = router;