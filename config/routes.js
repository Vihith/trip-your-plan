const express = require('express')
const router = express.Router()

const authenticateUser = require('../app/middlewares/authentication')
const planController = require('../app/controllers/planController')


router.get('/plans',authenticateUser, planController.list)
router.get('/plans/:id',authenticateUser, planController.show)
router.post('/plans', authenticateUser,planController.create)
router.put('/plans/:id',authenticateUser,planController.update)
router.delete('/plans/:id',authenticateUser,planController.destroy)

module.exports = router