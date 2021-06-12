

const mongoose = require('mongoose')

const employeesScheme = new mongoose.Schema({
    name: {
        type: String,
        minLenght: 2,
        required: true
    },
    lastName: {
        type: String,
        minLenght: 2,
        required: true
    },
    age: {
        type: Number,
        min: 10,
        max: 90,
        require: true
    },
    email: {
        type: String,
        match: /.+@.+\..+/,
        maxLenght: 100,
        required: true
    },
    salary: {
        type: Number,
        require : true
    },
    company: {
        type: Number,
        require : true
    },
    image:{
        type: String,
        required: false
    }
})

const model = mongoose.model('employees', employeesScheme)

module.exports = model
