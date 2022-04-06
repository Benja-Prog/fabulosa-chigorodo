var mysql = require('mysql');

exports.connection = mysql.createConnection({
    host: localhost,
    user: lafabulo_root,
    password: Kan533846,
    database: lafabulo_db_fabulosa
});

exports.connection.connect((error)=>{
    if(error){
        console.log('El error de conexión es : ' +error);
        return;
    }
    console.log('Conectado Exitosamente a Base de Datos');
})
