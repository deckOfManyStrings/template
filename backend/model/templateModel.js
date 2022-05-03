const mongoose = require('mongoose')

const templateSchema = mongoose.Schema({
        text: {
            type: String,
            required: [true, 'Please add a text value']
        }
    },
    {
        timestamps: true,
    }
    )

module.exports = mongoose.model('template', templateSchema)