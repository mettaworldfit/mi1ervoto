const Mysql_connection = require('../../database');
const path = "../views/"

const accountSid = 'ACaa418faf55287b2a0e443595be368175' // El id de tu cuenta; 
const authToken = 'a84790f3b01c92ff5d3a78e776e5dc86' // El TOKEN de tu cuenta; 
const client = require('twilio')(accountSid, authToken);


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

                const message = `Bienvenid@ _*${req.body.nombre}*_ a este equipo juvenil, Movimiento *#MIPRIMERVOTOCONLUISABINADER* \n \nTe invitamos a unirte a nuestro grupo de Whatsapp: *https://chat.whatsapp.com/LnDkgXSb0nZ5aOyMHZWjqs* \n \nPara mantenernos informados de las estrategias políticas y de todos los acontecimientos en el partido a nivel nacional. \n \nTe invitamos támbien a formar parte del partido \nInscríbete ya: *https://crm.prm.org.do/#!access/members*
                `;

                client.messages.create({
                    //  mediaUrl: ["https://scontent.fpop2-1.fna.fbcdn.net/v/t39.30808-6/271813871_288461766650235_6583434695588413063_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RTs4ltcOZP0AX9LK89Q&_nc_ht=scontent.fpop2-1.fna&oh=00_AfA1Pt0KqQY28wU4y7kgy4p6x2c-oVnh5u_eeZor6r0EYg&oe=63FCE0F5"],
                    body: message,
                    from: 'whatsapp:+14155238886', // El número que te proporcionen       
                    to: `whatsapp:${req.body.telefono1}`
                });
        

            }

        });

    }
}

module.exports = peoplesController;




