const mongoose = require('mongoose')

// DB Conection
const DB_USER = 'eduardogrq'
const DB_PASSWORD = 'Tuyyosomos1mismo'
const DB_HOST = 'kodemia11g.utnt4.mongodb.net'
const DB_NAME = 'crud-employees'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

function connect (){
    return mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
}

module.exports = connect