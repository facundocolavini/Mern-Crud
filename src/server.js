const express= require('express');
const morgan = require('morgan');
const path = require('path');

const {mongoose} = require ('./database')
const app = express();


//Settings 
app.set('port',process.env.PORT || 3000);

//Middlewares - Funciones que se ejecutan antes de que lleguen a nuestras rutas.npm install morgan.
app.use(morgan('dev'));
app.use(express.json());//confirma si el dato que va a nuestro servidor esta en formato JSON.

//Routes

app.use('/api/tasks',require('./routes/task-routes'));


//Static files
//path concatena nuestra rutas sin tener que fijarse si ejecutamos nuestro server desde win o linux.
app.use(express.static(path.join(__dirname + '/public')))//static hace que muestre en nuestro navegador los archivos staticos(HTML,CSS)

//Starting the server

app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
});