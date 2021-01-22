const mongoose = require('mongoose');//Conecta la base de datos y define como se van a ver los datos dentro de la base de datos.

/*
    Iniciarlizar el servidor 
    --servidor instalado de forma local
    mongod
    mongo
*/
mongoose.set('useUnifiedTopology', true);  
const URI = 'mongodb://localhost/mern-aulas';
mongoose.connect(URI,{ useNewUrlParser: true })
    .then(db=> console.log('DB is connected'))
    .catch(err=>console.loge.error(err));

module.exports = mongoose;