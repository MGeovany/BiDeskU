import React from 'react'

import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

const alumno = [
    {id:1, nombre: "Marlon Castro", carrera: "Ingenieria en informatica", celular: "94836857", sede: "Sede Central", correo:"marlongeo1999@gmail.com"},
    {id:2, nombre: "Jhon Doe", carrera: "Ingenieria en Fisica", celular: "95354707", sede: "Sede Norte", correo:"JD@gmail.com"},
  ];

class Dashboard extends React.Component{
    state={
        alumno: alumno
    }

    render(){

        return(
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
        )
    }



    
}


   

export default Dashboard