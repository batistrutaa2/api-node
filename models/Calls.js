const moment = require('moment')
const conn = require('../below/connect')

class Calls {
    createCalls(call, res) {
        const dateCreate = moment().format('YYYY-MM-DD HH:MM:SS')
        const date = moment(call.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const datevalid = moment(date).isSameOrAfter(dateCreate)
        const clientValid = call.client.length >= 5

        const validate = [
            {
                nome: "data",
                valid: datevalid,
                mesage: "A data de agendamento deve ser maior ou igual a hora do agendamento"
            },
            {
                nome: "client",
                valid: clientValid,
                mesage: "O nome do cliente deve ser um nome real (acima de 3 caracteres)"
            },

        ]

        const erros = validate.filter(campo => !campo.valid)
        const thereAreErrors = erros.length

        if (thereAreErrors) {
            res.status(400).json(erros);
        } else {
            const callData = {...call, date, dateCreate}
            const sql = 'INSERT INTO calls SET ? '
    
            conn.query(sql, callData, (error, result) => {
                if (error) {
                    res.status(400).json(error);
                } else {
                    res.status(201).json(result);
                }
            })
        }

    }
}

module.exports = new Calls