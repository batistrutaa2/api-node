const mysql = require ('mysql')

const conn = mysql.createConnection({
    host: "127.0.0.1",
    port: "3307",
    user: "root",
    password: "batista476",
    database: "agendamentos-petshop"
})

module.exports =  conn