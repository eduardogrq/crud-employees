const server = require('./src/server')
const dbConnect = require('./src/lib/db')

dbConnect()
    .then(() => {
        console.log('DB Connected')
        server.listen(8080, () => {
            console.log('Server listening...')
        })
    })
    .catch((error) => {
        console.log('error: ', error)
    })

    