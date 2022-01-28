import React from 'react'

import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

const alumno = [
    {id:1, nombre: "Marlon Castro", carrera: "Ingenieria en informatica", celular: "94836857", sede: "Sede Central", correo:"marlongeo1999@gmail.com"},
    {id:2, nombre: "Jhon Doe", carrera: "Ingenieria en Fisica", celular: "95354707", sede: "Sede Norte", correo:"JD@gmail.com"},
    {id:3, nombre: "Jose Daniel", carrera: "Licenciatura en Diseno", celular: "94836857", sede: "Sede Central", correo:"aprikot@gmail.com"},
    {id:4, nombre: "Selvin Carranza", carrera: "Licenciatura en Psicologia", celular: "94836857", sede: "Sede Central", correo:"canvasCaro@gmail.com"},
    {id:5, nombre: "Alfonso Baldomero", carrera: "Licenciatura en Admon. de Empresas", celular: "94836857", sede: "Sede Central", correo:"1997LMCS@gmail.com"},
    {id:6, nombre: "Sara Ignacia", carrera: "Ingenieria Logistica", celular: "94836857", sede: "Sede Central", correo:"MMAA&Joel@gmail.com"},
    {id:7, nombre: "Pedro Sanchez", carrera: "Ingenieria en informatica", celular: "94836857", sede: "Sede Central", correo:"129CC_C@gmail.com"},
    

];

class Alumno extends React.Component{
    state={
        alumno: alumno
    }

    render(){

        return(
            <div className='doc'>
                <h2>Alumnos</h2> 

                <div className="contain">

                    <Container>
        
        
                    <br />
                    <Button color="success">Crear Nuevo Alumno</Button>
                    <br />
                    <br />
                    <Table
                    dark
                    responsive  
                    striped>

                        <thead><tr><th>ID</th>
                        <th>NOMBRE</th>
                        <th>CARRERA</th>
                        <th>CELULAR</th>
                        <th>SEDE</th>
                        <th>CORREO</th>
                        <th></th>
                        <th></th>
                        </tr></thead>
                        <tbody>
                            {this.state.alumno.map((elemento) =>(
                                <tr>
                                    <td>{elemento.id}</td>
                                    <td>{elemento.nombre}</td>
                                    <td>{elemento.carrera}</td>
                                    <td>{elemento.celular}</td>
                                    <td>{elemento.sede}</td>
                                    <td>{elemento.correo}</td>
                                    <td><Button color="primary">Editar</Button></td>
                                    <td><Button color="danger">Eliminar</Button></td>
                                    
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Container>
                </div>
            </div>

        )
    }



    
}


   

export default Alumno