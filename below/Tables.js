class tables {
    init(conn) {
       this.conn = conn

       this.createTableCalls()
    }

    createTableCalls() {
        const sql = 'CREATE TABLE IF NOT EXISTS calls (id int NOT NULL AUTO_INCREMENT, client varchar(50) NOT NULL, pet varchar(20),service varchar(20) NOT NULL, date datetime NOT NULL, dateCreate datetime NOT NULL  , status varchar(20) NOT NULL,comments text, PRIMARY KEY(id))'
        this.conn.query(sql, (error) => {
            if (error) {
                console.log(error)
            } else {
                console.log("tabela call criada com sucesso")
            }
        })
    }
}

module.exports = new tables