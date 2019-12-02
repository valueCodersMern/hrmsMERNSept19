var express = require('express');
var router = express.Router();
const adminauth=require('../middleware/adminauth')
const userauth = require('../middleware/userauth')

const {addUser}=require('./user.controllers/adduser')
const { login } = require('./user.controllers/loginuser')
const { logout } = require('./user.controllers/logoutuser')
const { showme } = require('./user.controllers/showProfile')

router.post('/adduser',adminauth, addUser)
//console.log("kjkduhf")
router.post('/loginuser', login)
router.post('/logout', userauth, logout)
router.get('/showme', userauth, showme)


module.exports = router;