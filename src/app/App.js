import React,{Component} from 'react';
import{Grid} from '@material-ui/core';
import Navbar from './components/Navbar';


class App extends Component{
    constructor (){
        super();
        this.state= {
            curso:'',
            profesor:'',
            materia: '',
            capacidad: '',
            aula:'',
            turno:'',
            dia: '' ,
            horario_entrada:'',
            horario_salida:'',
            tasks:[],
            _id: ''
        };
        
        this.handleChange =this.handleChange.bind(this);
        this.addTask =this.addTask.bind(this);
 
    };
    //Captura de datos fetch a mi servidor http://localhost
    addTask(event){
        if(this.state._id){
            fetch(`api/tasks/${this.state._id}`,{
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data)
                M.toast({html:'Información Actualizada'});
                this.setState({materia:'',capacidad:'',curso:'',profesor:'',aula:'',turno:'',dia:'',horario_entrada:'',horario_salida:'',_id:''});
                this.fetchTasks();
            });
        }
        else{
            //Peticiones a nuestra API
            fetch('/api/tasks',{
                method: 'POST',
                body: JSON.stringify(this.state),
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({html:'Información Guardada'})
                this.setState({materia:'',capacidad:'',curso:'',profesor:'',aula:'',turno:'',dia:'',horario_entrada:'',horario_salida:''})
                this.fetchTasks();
            })
            .catch(err => console.log(err));   
        }

        event.preventDefault();
    }

    componentDidMount(){
        this.fetchTasks();
    }
    //Obtener tareas
    fetchTasks(){
        fetch('api/tasks')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({tasks:data});
                console.log(this.state.tasks);
            });
    }
    //Eliminar tarea
    deleteTask(id){
        if(confirm('Estas seguro que quieres eliminarlo?')){
            fetch(`api/tasks/${id}`,{
                method: 'DELETE',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res=> res.json())
                .then(data=>{
                    console.log(data);
                    M.toast({html:'Información Eliminada'})
                    this.fetchTasks();
                });
        }
    }
    //Manejo de los estados de los inputs

 

    handleChange(event){
        console.log(event.target.value)
        const{name,value}= event.target;
        this.setState({
            [name]: value
            
        });
    }

    //Editar tarea
    ediTask(id){
        fetch(`api/tasks/${id}`)
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                this.setState({
                    materia: data.materia,
                    capacidad: data.capacidad,
                    curso: data.curso,
                    profesor: data.profesor,
                    aula:data.aula,
                    turno: data.turno,
                    dia: data.dia,
                    horario_entrada:data.horario_entrada,
                    horario_salida:data.horario_salida,
                    _id: data._id
                })
            });
    }
 
    render(){
        return(
            <div>
                <Navbar/> 
                <Grid style={{ padding: 40 }} container spacing={5}>
                    <Grid container  item xs={4} spacing={5}>
                        <div className="card"style={{ width: 500 }} >
                            <div className="card-content">
                                <form onSubmit={this.addTask}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <select  id="curso" className="validate" required name="curso"  onChange={this.handleChange}>
                                                <option disabled selected >-</option>
                                                <option  value="Informática">Informática</option>
                                                <option value="ElectronÍca">ElectronÍca</option>
                                                <option value="Química">Química</option>
                                                <option value="Mecánica">Mecánica</option>
                                                <option value="Robótica">Robótica</option>
                                                <option value="Física">Física</option>
                                            </select>
                                            <label htmlFor="curso">Nombre del Curso:</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input name="materia" onChange={this.handleChange} type="text" placeholder="Materia" value={this.state.materia}/> 
                                            <label htmlFor="aula">Ingrese la Materia:</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="profesor" name="profesor" className="validate" required  onChange={this.handleChange} type="text" placeholder="Profesor " value={this.state.profesor}/> 
                                            <label htmlFor="profesor">Nombre del Profesor:</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                            <div  className=" input-field col s12" >
                                            <select  id="aula" className="validate" required name="aula"  onChange={this.handleChange}>
                                                <option disabled selected >-</option>
                                                <option>101</option>
                                                <option>102</option>
                                                <option>103</option>
                                                <option>104</option>
                                                <option>105</option>
                                                <option>106</option>
                                                <option>107</option>
                                                <option>108</option>
                                                <option>109</option>
                                                <option>110</option>
                                                <option>200</option>
                                                <option>201</option>
                                                <option>202</option>
                                                <option>203</option>
                                                <option>204</option>
                                                <option>205</option>
                                                <option>206</option>
                                                <option>207</option>
                                                <option>208</option>
                                                <option>209</option>
                                                <option>210</option>
                                            </select>
                                            <label htmlFor="aula">Seleccione el Aula:</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div style={{paddingBottom:'2em'}} className="input-field col s4">
                                            <label style={{paddingleft:'4em'}}>
                                                <input name="turno" onChange={this.handleChange} className="with-gap" value="Mañana"  type="radio"  />
                                                <span>Mañana</span>
                                            </label>
                                        </div>
                                        <div className="input-field col s4">
                                            <label style={{paddingleft:'1em'}}>
                                                <input onChange={this.handleChange} className="with-gap" name="turno" value="Tarde" type="radio" />
                                                <span>Tarde</span>
                                            </label>
                                        </div>
                                        <div className="input-field col s4">
                                            <label >
                                                <input onChange={this.handleChange} className="with-gap" name="turno" value="Noche" type="radio"  />
                                                <span >Noche</span>
                                            </label>
                                        </div>
                                    </div>   
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input name="dia"  onChange={this.handleChange}  value={this.state.dia}  type="date" /> 
                                            <label htmlFor="dia">Día:</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <select  id="capacidad" className="validate" required name="capacidad"  onChange={this.handleChange}>
                                                <option disabled selected >-</option>
                                                <option value={10}>10</option>
                                                <option value={20}>20</option>
                                                <option value={30}>30</option>
                                                <option value={40}>40</option>
                                            </select>
                                            <label htmlFor="capacidad">Capacidad:</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <input name="horario_entrada" onChange={this.handleChange} type="time" placeholder="Horario de ingreso" value={this.state.horario_entrada}/> 
                                            <label htmlFor="horario_entrada">Hora de Ingreso:</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input name="horario_salida" onChange={this.handleChange} type="time" placeholder="Horario de salida" value={this.state.horario_salida}/> 
                                            <label htmlFor="horario_salida">Hora de Salida:</label>
                                        </div>

                                    </div>
                                    <button type="submit" className="btn light-blue darken-4">Send</button>
                                </form>
                            </div>
                        </div>                
                    </Grid>
                    <Grid container item xs={8} spacing={1}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Curso</th>
                                    <th>Materia</th>
                                    <th>Profesor</th>
                                    <th>Aula</th>
                                    <th>Turno</th>
                                    <th>Dia</th>
                                    <th>Capacidad</th>
                                    <th>Ingreso</th>
                                    <th>Salida</th>
                                    <th>Editar/Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tasks.map(task=>{
                                        return (
                                            <tr key={task._id}>
                                                <td>{task.curso}</td>
                                                <td>{task.materia}</td>
                                                <td>{task.profesor}</td>
                                                <td>{task.aula}</td> 
                                                <td>{task.turno}</td>
                                                <td>{task.dia}</td>
                                                <td>{task.capacidad}</td>
                                                <td>{task.horario_entrada}</td>
                                                <td>{task.horario_salida}</td>
                                                <td>
                                                    <button onClick={()=>{this.ediTask(task._id)}} className="btn light-blue darken 4 "style={{margin:'4px'}}><i className="material-icons">edit</i></button>
                                                    <button onClick={()=>{this.deleteTask(task._id)}} className="btn light-blue darken 4"><i className="material-icons ">delete</i></button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                } 
                            </tbody>
                        </table>
                    </Grid> 
                </Grid>
            </div>
        )
    }
}

export default App;