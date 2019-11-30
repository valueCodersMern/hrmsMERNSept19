var express = require('express');
var router = express.Router();

const { showDesignation } = require('./designation.controller')

router.get('/showDesignation', showDesignation)



module.exports = router;