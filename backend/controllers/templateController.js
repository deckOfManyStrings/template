const asyncHandler = require('express-async-handler')

const Template = require('../model/templateModel')

// @desc Get goals
// @route GET /api/goals
// @access Private
const getTemplate = asyncHandler(async (req, res) => {
    const templates = await Template.find()

    res.status(200).json(templates)
})

// @desc set goals
// @route POST /api/goals
// @access Private
const setTemplate = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const template = await Template.create({
        text: req.body.text
    })

    res.status(200).json(template)
})

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateTemplate = asyncHandler( async (req, res) => {
    const template = await Template.findById(req.params.id)

    if(!template){
        res.status(400)
        throw new Error('Template not found')
    }

    const updatedTemplate = await Template.findByIdAndUpdate(
        req.params.id,
        req.body, {
            new: true,
        })

    res.status(200).json(updatedTemplate)
})

// @desc Delete goals
// @route Delete /api/goals/:id
// @access Private
const deleteTemplate = asyncHandler(async (req, res) => {
    const template = await Template.findById(req.params.id)

    if(!template){
        res.status(400)
        throw new Error('Template not found')
    }

    await template.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getTemplate,
    setTemplate,
    updateTemplate,
    deleteTemplate,
}