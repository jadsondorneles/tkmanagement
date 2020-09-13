const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')
require('dotenv').config()
const uuid = require('uuid')

const Task = require('./models/Task')

//GET: List of tasks
routes.get('/task', async(req, res) => {
    const task = await Task.find()
    return res.json(task)
})

//GET: List especific task
routes.get('/task/:id', async(req, res) => {
    const task = await Task.findById(req.params.id)
    return res.json(task)
})

//POST: Create task
routes.post('/task', async(req, res) => {
    const { name, customer, due_date, legal_date, fine } = req.body

    const nameExists = await Task.findOne({ name: name })
    if (nameExists) {
        return res.json({
            result: false,
            message: `A task with this name already exists, please create with a different name`
        })
    }

    const task = await Task.create({
        name: name,
        customer: customer,
        due_date: due_date,
        legal_date: legal_date,
        fine: fine
    })

    return res.json({
        result: true,
        message: 'Task created successfully'
    })
})

//PATCH: Update specific task
routes.patch('/task/:id', async(req, res) => {
    const { name, customer, due_date, legal_date, fine } = req.body

    const task = await Task.findByIdAndUpdate({ '_id': req.params.id }, {
            name: name,
            customer: customer,
            due_date: due_date,
            legal_date: legal_date,
            fine: fine
        }, { safe: true, upsert: true },
        (err, doc) => {
            if (err) {
                console.log(err)
            } else {
                console.log(doc)
            }
        }
    )

    return res.json({
        result: true,
        message: 'Task updated successfully'
    })
})

//DELETE: Exclude specific task
routes.delete('/task/:id', async(req, res) => {
    const task = await Task.findById(req.params.id)
    if (task) {
        await task.remove()
        return res.json({
            result: true,
            message: 'Task removed successfully'
        })
    } else {
        return res.json({
            result: false,
            message: 'The task could not be removed'
        })
    }
})

//POST: Insert document in task
routes.post('/task/document/:id', multer(multerConfig).single('file'), async(req, res) => {
    const { originalname: name, size, key, location: url = '' } = req.file

    const task = await Task.findByIdAndUpdate({ '_id': req.params.id }, {
            $push: {
                documents: {
                    id: uuid.v4(),
                    key: key,
                    url: `${process.env.APP_URL}/files/uploads/${key}`
                }
            }
        }, { safe: true, upsert: true },
        (err, doc) => {
            if (err) {
                return res.json({
                    result: false,
                    message: `Error. ${err}`
                })
            } else {
                return res.json({
                    result: true,
                    message: 'Document uploaded successfully'
                })
            }
        }
    )
})

//DELETE: Exclude document of task
routes.delete('/task/document/:id/:id_doc', async(req, res) => {
    const task = await Task.findByIdAndUpdate({ "_id": req.params.id }, { $pull: { documents: { "id": req.params.id_doc } } })
    if (task) {
        return res.json({
            result: true,
            message: 'Document removed successfully'
        })
    } else {
        return res.json({
            result: false,
            message: 'The document could not be removed'
        })
    }
})

module.exports = routes