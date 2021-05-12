const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const { createProduct } = require('../controller/product')

router.post('/create', upload.single('photo'), createProduct)

module.exports = router
