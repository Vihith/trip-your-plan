const express = require('express')
const router = express.Router()

const authenticateUser = require('../app/middlewares/authentication')
const planController = require('../app/controllers/planController')
const checkListController =require('../app/controllers/checkListController')
const friendController =require('../app/controllers/friendController')
const destinationController =require('../app/controllers/destinationController')


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

router.get('/friends',authenticateUser, friendController.list)
router.get('/friends/:id',authenticateUser, friendController.show)
router.post('/friends', authenticateUser,friendController.create)
router.put('/friends/:id',authenticateUser,friendController.update)
router.delete('/friends/:id',authenticateUser,friendController.destroy)

router.get('/destinations',authenticateUser, destinationController.list)
router.get('/destinations/:id',authenticateUser, destinationController.show)
router.post('/destinations', authenticateUser,destinationController.create)
router.put('/destinations/:id',authenticateUser,destinationController.update)
router.delete('/destinations/:id',authenticateUser,destinationController.destroy)



module.exports = router