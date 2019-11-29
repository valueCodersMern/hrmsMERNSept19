const { login } = require('./controllers/login')
const { logout } = require('./controllers/logout')

router.post('/loginadmin', login)
router.post('/logout', auth, logout)


module.exports = router;