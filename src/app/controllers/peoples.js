const Mysql_connection = require('../../database');
const path = "../views/"

var peoplesController = {

    getPeoples: function (req, res) {
        Mysql_connection.query("SELECT *FROM direcciones", (err, results) => {
            if (err) {
                console.log("Error: " + err.sqlMessage);
            } else {

                res.render(`${path}/index`, {
                    title: 'Formulario de registro',
                    directions: results
                })
            }
        })


    },

    addPeople: function (req, res) {

        var query = "INSERT INTO personas SET ?";

        Mysql_connection.query(query, [req.body], function (err, result) {
            if (err) {

                res.render(`${path}/index`, { error: err.sqlMessage })

            } else {

                console.log("Número de filas instertadas: " + result.affectedRows);
                res.render(`${path}/index`, { message: 'Registrado exitosamente' })

             
               
            }

        });

    }
}


module.exports = peoplesController;




