const dbConnect = require("../context/database/connect2db").get();


const AuthModel = {
    create : (firstname, lastname, email, password) => {

        return dbConnect.then((conn) => {
            return conn.query("INSERT INTO admin_clients (prenom, nom, email, mot_de_passe) "
            +"VALUES (?, ?, ?, ?)", [firstname, lastname, email, password])
        })
    },


    verifyIfUserExist : (email) => {
        return dbConnect.then((conn) => {
            return conn.query("SELECT client_id from admin_clients where email = ?", [email])
        })
    }
}


module.exports = AuthModel