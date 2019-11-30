var express = require('express');
var router = express.Router();

const { showkraAttributes } = require('./k.r.a.attr.controllers')

router.get('/showkraAttributes', showkraAttributes)



module.exports = router;