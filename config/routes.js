const express = require('express')
const router = express.Router()

const authenticateUser = require('../app/middlewares/authentication')
const planController = require('../app/controllers/planController')
const checkListController =require('../app/controllers/checkListController')


router.get('/plans',authenticateUser, planController.list)
router.get('/plans/:id',authenticateUser, planController.show)
router.post('/plans', authenticateUser,planController.create)
router.put('/plans/:id',authenticateUser,planController.update)
router.delete('/plans/:id',authenticateUser,planController.destroy)

router.get('/checklists',authenticateUser, checkListController.list)
router.get('/checklists/:id',authenticateUser, checkListController.show)
router.post('/checklists', authenticateUser,checkListController.create)
router.put('/checklists/:id',authenticateUser,checkListController.update)
router.delete('/checklists/:id',authenticateUser,checkListController.destroy)

module.exports = router