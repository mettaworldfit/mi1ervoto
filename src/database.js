const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
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