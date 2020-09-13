const request = require('supertest')
const app = require('../index')
const uuid = require('uuid')
const Task = require('../models/Task')

describe('Task Test', () => {
    it('Should GET Task Route', async() => {
        let data = {
            name: uuid.v4(),
            customer: "CustomerTest",
            due_date: "2020-09-19T00:00:00.000Z",
            legal_date: "2020-09-20T00:00:00.000Z",
            fine: false
        }

        const task = await Task.create({
            name: data.name,
            customer: data.customer,
            due_date: data.due_date,
            legal_date: data.legal_date,
            fine: data.fine
        })

        await request(app)
            .get('/api/task')
            .expect(200)
            .then((res) => {
                expect(Array.isArray(res.body)).toBeTruthy()

                res.body.map(obj => {
                    if (obj.name === data.name) {
                        expect(obj.name).toBe(data.name)
                        expect(obj.customer).toBe(data.customer)
                        expect(obj.due_date).toBe(data.due_date)
                        expect(obj.legal_date).toBe(data.legal_date)
                        expect(obj.fine).toBe(data.fine)
                    }
                })
            })

        await Task.deleteOne({ name: data.name })
    })

    it('Should GET Single Task Route', async() => {
        let data = {
            name: uuid.v4(),
            customer: "CustomerTest",
            due_date: "2020-09-19T00:00:00.000Z",
            legal_date: "2020-09-20T00:00:00.000Z",
            fine: false
        }

        const task = await Task.create({
            name: data.name,
            customer: data.customer,
            due_date: data.due_date,
            legal_date: data.legal_date,
            fine: data.fine
        })

        let _id
        await request(app)
            .get('/api/task')
            .then(res => {
                res.body.map(obj => {
                    if (obj.name === data.name)
                        _id = obj._id
                })
            })

        await request(app)
            .get(`/api/task/${_id}`)
            .expect(200)
            .then((res) => {
                expect(res.body._id).toBe(_id)
                expect(res.body.name).toBe(data.name)
                expect(res.body.customer).toBe(data.customer)
                expect(res.body.due_date).toBe(data.due_date)
                expect(res.body.legal_date).toBe(data.legal_date)
                expect(res.body.fine).toBe(data.fine)
            })

        await Task.deleteOne({ name: data.name })
    })

    it('Should POST Task Route', async() => {
        let data = {
            name: uuid.v4(),
            customer: "CustomerTest",
            due_date: "2020-09-19T00:00:00.000Z",
            legal_date: "2020-09-19T00:00:00.000Z",
            fine: false
        }

        await request(app)
            .post('/api/task')
            .send(data)
            .expect(200)
            .then(async(res) => {
                expect(res.body._id).toBeTruthy()
                expect(res.body.name).toBe(data.name)
                expect(res.body.customer).toBe(data.customer)
                expect(res.body.due_date).toBe(data.due_date)
                expect(res.body.legal_date).toBe(data.legal_date)
                expect(res.body.fine).toBe(data.fine)

                const task = await Task.findOne({ _id: res.body._id })
                expect(task).toBeTruthy()
                expect(task.name).toBe(data.name)
                expect(task.customer).toBe(data.customer)
                let date = new Date(data.due_date)
                expect(task.due_date.getTime()).toBe(date.getTime())
                expect(task.fine).toBe(data.fine)

                await Task.deleteOne({ _id: res.body._id })
            })
    })

    it('Should PATCH Task Route', async() => {
        let nameCreate = uuid.v4()
        const task = await Task.create({
            name: nameCreate,
            customer: "CustomerTest",
            due_date: "2020-05-10T00:00:00.000Z",
            legal_date: "2020-05-22T00:00:00.000Z",
            fine: true
        })

        let data = {
            name: nameCreate,
            customer: "CustomerPutTest",
            due_date: "2020-09-19T00:00:00.000Z",
            legal_date: "2020-09-20T00:00:00.000Z",
            fine: false
        }

        let _id
        await request(app)
            .get('/api/task')
            .then(res => {
                res.body.map(obj => {
                    if (obj.name === nameCreate) {
                        _id = obj._id
                    }
                })
            })

        await request(app)
            .patch(`/api/task/${_id}`)
            .send(data)
            .expect(200)
            .then(async(res) => {
                expect(res.body._id).toBe(_id)
                expect(res.body.name).toBe(data.name)
                expect(res.body.customer).toBe(data.customer)
                expect(res.body.due_date).toBe(data.due_date)
                expect(res.body.legal_date).toBe(data.legal_date)
                expect(res.body.fine).toBe(data.fine)

                const task = await Task.findOne({ _id: res.body._id })
                expect(task).toBeTruthy()
                expect(task.name).toBe(data.name)
                expect(task.customer).toBe(data.customer)
                let date = new Date(data.due_date)
                expect(task.due_date.getTime()).toBe(date.getTime())
                expect(task.fine).toBe(data.fine)

            })

        await Task.findByIdAndDelete({ _id: _id })
    })

    it('Should Delete Task Route', async() => {
        let data = {
            name: uuid.v4(),
            customer: "CustomerTest",
            due_date: "2020-09-19T00:00:00.000Z",
            legal_date: "2020-09-20T00:00:00.000Z",
            fine: false
        }

        const task = await Task.create({
            name: data.name,
            customer: data.customer,
            due_date: data.due_date,
            legal_date: data.legal_date,
            fine: data.fine
        })

        let _id
        await request(app)
            .get('/api/task/')
            .then(async(res) => {
                if (res.body.length > 0) {
                    res.body.map(obj => {
                        if (obj.name === data.name) {
                            _id = obj._id
                        }
                    })
                }
            })

        await request(app)
            .delete(`/api/task/${_id}`)
            .expect(200)
            .then(async(res) => {
                expect(res.body.result).toBe(true)
            })
    })
})