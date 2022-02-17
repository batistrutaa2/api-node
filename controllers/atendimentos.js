const Calls = require('../models/Calls')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send("voce está na rota inicial, e esta realizando um post"))

    app.post('/atendimentos', (req, res) => {
        const call = req.body

        Calls.createCalls(call, res)
    })
    
}