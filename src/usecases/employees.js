
const Employees = require('../models/employees')

function getAll() {
    return Employees.find()
}

function create(employee){
    return Employees.create(employee)
}

// function findPost(id){
//     return Posts.findById(id)
// }


module.exports = {
    getAll,
    create
}