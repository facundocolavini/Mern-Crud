const express= require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const {mongoose} = require ('./database')
const app = express();


//Settings 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//Middlewares - Funciones que se ejecutan antes de que lleguen a nuestras rutas.npm install morgan.
app.use(morgan('dev'));
app.use(express.json());//confirma si el dato que va a nuestro servidor esta en formato JSON.
// allow cors requests from any origin and with credentials
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));
//Routes

app.use('/api/tasks',require('./routes/task-routes'));


//Static files
//path concatena nuestra rutas sin tener que fijarse si ejecutamos nuestro server desde win o linux.
app.use(express.static(path.join(__dirname + '/public')))//static hace que muestre en nuestro navegador los archivos staticos(HTML,CSS)

//Starting the server

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});
