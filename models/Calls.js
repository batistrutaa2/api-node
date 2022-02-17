const moment = require('moment')
const conn = require('../below/connect')

class Calls {
    createCalls(call, res) {
        console.log(call)

        const dateCreate = moment().format('YYYY-MM-DD HH:MM:SS')
        const date = moment(call.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
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

module.exports = new Calls