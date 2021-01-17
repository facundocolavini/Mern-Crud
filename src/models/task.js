const mongoose = require('mongoose');
const {Schema} = mongoose; //Define el esquema de los datos

const TaskSchema= new Schema({
    curso:{type:String, required:true},
    profesor:{type:String, required:true},
    materia: {type: String,reuired:true},
    capacidad:{type:String, required:true},
    aula:{type:String, required:true},
    turno:{type:String, required:true},
    dia:{type: String, required:true},
    horario_entrada:{type:String, required:true},
    horario_salida:{type:String, required:true},
})


//Nombre del modelo - como lo reutilizo dentro de mi aplicacion y como lucen los datos
module.exports= mongoose.model('Task',TaskSchema);