var mysql = require('mysql');

const connection = mysql.createConnection({
    host: localhost,
    user: lafabulo_root,
    password: Kan533846,
    database: lafabulo_db_fabulosa
});

connection.connect((error)=>{
    if(error){
        console.log('El error de conexión es : ' +error);
        return;
    }
    console.log('Conectado Exitosamente a Base de Datos');
})
module.exports = connection;