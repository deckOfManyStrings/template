const express = require('express')
const router = express.Router()
const { getTemplate,
        setTemplate,
        updateTemplate,
        deleteTemplate } = require('../controllers/templateController')

router.route('/').get(getTemplate).post(setTemplate)
router.route('/:id').put(updateTemplate).delete(deleteTemplate)

module.exports = router