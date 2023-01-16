require('dotenv').config();
const mysql = require("promise-mysql");

let db;

module.exports = {

    connect : () => {
        if(!db){
            db_host = process.env.DB_HOST || process.env.DB_HOST_LOCAL;
            db_user = process.env.DB_USER || process.env.DB_USER_LOCAL;
            db_password = process.env.DB_PASSWORD || process.env.DB_PASSWORD_LOCAL;
            db_port = process.env.DB_PORT || process.env.DB_PORT_LOCAL;
            db_name = process.env.DB_NAME || process.env.DB_NAME_LOCAL;
            db_limit = process.env.DB_CONNECT_LIMIT || process.env.DB_CONNECT_LIMIT_LOCAL;

            db = mysql.createPool({
                host : db_host,
                user : db_user,
                password : db_password,
                port : db_port,
                database : db_name,
                connectionLimit : db_limit
            })
        }
    },

    get : () => {
        if(!db){
            if(process.env.CONSOLE_LOG){console.log(db);}
            throw new Error("Connexion non établie")
        }
        else
            return db;
    }
}