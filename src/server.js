
const express = require('express')

const cors = require('cors')

// Routers

const employeesRouter = require('./routers/employees')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', employeesRouter)

module.exports = app