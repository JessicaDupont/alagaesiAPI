const dbConnect = require("../context/database/connect2db").get();


const LogModel = {

    getAll : () => {
        return dbConnect.then((conn) => {
            return conn.query(`SELECT * FROM admin_logs order by id desc`)
        })
    },


    create : (message) => {

        return dbConnect.then((conn) => {
            return conn.query("INSERT INTO admin_logs (message, date_log) VALUES (?, ?)", [message, new Date()])
        })
    },


    deleteAll : () => { 
        return dbConnect.then((conn) => {
            return conn.query("DELETE from admin_logs")
        })
    }
}


module.exports = LogModel