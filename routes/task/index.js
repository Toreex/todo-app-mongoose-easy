const express = require('express')
const router = express.Router()

const removeTask = require('./handlers/removeTask')
const updateTask = require('./handlers/updateTask')

router.delete('/:id', removeTask)
router.put('/:id', updateTask)
module.exports = router
