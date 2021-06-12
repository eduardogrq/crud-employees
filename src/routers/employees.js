const express = require('express')
const employees = require('../usecases/employees')

const app = express.Router()

// Get all employees
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

// Create a new employee
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

// Edit an employee
app.patch('/:id', async (req, res, next) => {
    try{
        const {id} = req.params
        const employeeUpdated = await employees.updateById(id, req.body)

        res.json({
            succes: true,
            message: 'employee updated',
            data:{
                data: employeeUpdated
            }
        })
    } catch (err){
        res.status(400)
        res.json({
            succes: false,
            message: 'Error at update employee',
            error: err.message
        })
    }
})

module.exports = app