const express = require('express')
const employees = require('../usecases/employees')

const app = express.Router()

app.get('/', async(req, res) => {
    try{

        const allEmployees = await employees.getAll()

        res.json({
            succes: true,
            message: 'All employees',
            data:{
                employees: allEmployees
            }
        })

    } catch(err) {
        res.status(400)
        res.json({
            succes: false,
            message: 'Error at get all employees',
            error: err.message
        })
    }
})

app.post('/', async(req, res) => {
    try{

        const employeeCreated = await employees.create(req.body)

        res.json({
            succes: true,
            message: 'Employee created',
            data:{
                employee: employeeCreated
            }
        })

    } catch (err) {
        res.status(400)
        res.json({
            succes: false,
            message: 'Error at create employee',
            error: err.message
        })
    }
})

module.exports = app