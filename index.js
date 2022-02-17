const customExpress = require('./config/custom.express')
const conn = require ('./below/connect')
const tables = require ('./below/Tables')

conn.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("conectado com sucesso")
        tables.init(conn)
        const app = customExpress()
        app.listen(3000, () => console.log("servidor funcionando"))
    }
})



