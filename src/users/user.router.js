const router = require('express').Router()

const userServices = require('./user.services')

router.get('/users', userServices.getAllUsers)
router.post('/users', userServices.postUser)
router.get('/users/:id', userServices.getUserById)

module.exports = router