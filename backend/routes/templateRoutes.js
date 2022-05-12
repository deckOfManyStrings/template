const express = require('express')
const router = express.Router()
const { getTemplate,
        setTemplate,
        updateTemplate,
        deleteTemplate } = require('../controllers/templateController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getTemplate).post(protect, setTemplate)
router.route('/:id').put(protect, updateTemplate).delete(protect, deleteTemplate)

module.exports = router