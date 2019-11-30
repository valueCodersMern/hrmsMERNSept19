var express = require('express');
var router = express.Router();

const { showDepartments } = require('./department.controller')

router.get('/showDepartments', showDepartments)



module.exports = router;