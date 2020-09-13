const { Schema, model } = require('mongoose')

const TaskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    customer: {
        type: String,
        required: true
    },
    due_date: {
        type: Date,
        required: true
    },
    legal_date: {
        type: Date,
        required: true
    },
    fine: {
        type: Boolean,
        required: true
    },
    documents: [{
        type: Array
    }]
}, {
    timestamps: true
})

module.exports = model('Task', TaskSchema)