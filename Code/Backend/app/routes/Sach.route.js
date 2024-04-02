const express = require('express')
const router = express.Router()
const controller = require('../controller/Sach.controller')

router.route('/')
    .get(controller.getAllBook)
    .post(controller.importBook)

router.route('/home').get(controller.GetBookHomeView)

router.route('/:bid')
    .get(controller.getBookByID)
    .delete(controller.deleteBook)

module.exports = router