const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')


router.get('/',TaskController.showTasks)
router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.get('/edit/:id', TaskController.updateTask)
router.post('/edit', TaskController.updateTaskSave)
router.post('/updatestatus', TaskController.toogleTaskStatus)
router.post('/remove', TaskController.removeTask)

module.exports = router
