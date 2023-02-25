const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "Wilmin",
    password: "Mett@1106",
    database: 'movimiento_prm'
});

db.connect(function(err) {
    if (err) {
        console.error(err);
        return;
    }

    console.log("Base de datos conectada correctamente");
});

module.exports = db;