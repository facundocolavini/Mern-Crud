const express= require('express');//lo usamos para crear rutas
const router = express.Router();//devuelve un objeto el cual se le ingresan rutas

const Task = require('../models/task');

//Obtener las tareas
router.get('/',async (req,res)=>{
    const tasks= await Task.find();
    console.log(tasks);
    res.json(tasks);

});
//Obtener una unica tarea
router.get('/:id',async(req,res)=>{
    const task= await Task.findById(req.params.id);
    res.json(task);
});


//agregar datos con post y con cliente REST con postman
router.post('/',async (req,res)=>{
    const {materia,capacidad,curso,profesor,aula,turno,dia,horario_entrada,horario_salida} = req.body;
    const task = new Task({
        curso:curso,
        profesor:profesor,
        materia:materia,
        capacidad:capacidad,
        aula:aula,
        turno:turno,
        dia:dia,
        horario_entrada:horario_entrada,
        horario_salida:horario_salida
    })
    //save almacena en la base de datos en mongo 
    await task.save();
    res.json({status: 'Task Saved'});
});

//Para actualizar una tarea 
router.put('/:id',async(req,res)=>{
    const {materia,capacidad,curso,profesor,aula,turno,dia,horario_entrada,horario_salida} = req.body;
    const newTask = {
        curso:curso,
        profesor:profesor,
        materia:materia,
        capacidad:capacidad,
        aula:aula,
        turno:turno,
        dia:dia,
        horario_entrada:horario_entrada,
        horario_salida:horario_salida
    };
   await Task.findByIdAndUpdate(req.params.id,newTask);
   res.json({status:'Task Update'});
});

//Eliminar un a tarea
router.delete('/:id',async(req,res)=>{
   await Task.findByIdAndRemove(req.params.id);
   res.json({status:'Task Delete'});
})

module.exports = router;
