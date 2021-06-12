
const Employees = require('../models/employees')

function getAll() {
    return Employees.find()
}

function create(employee){
    return Employees.create(employee)
}

function updateById(id, dataToUpdate) {
    return Employees.findByIdAndUpdate(id, dataToUpdate)
}

// function findEmployee(id){
//     return Employees.findById(id)
// }


module.exports = {
    getAll,
    create,
    updateById
}