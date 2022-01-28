import Chart from 'react-apexcharts'
import './dash.scss'
import React from 'react'

import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap'


const chartOptions = {
    options: {
        series: [41,30,17,55],
        labels: ["Ticket Pendientes", "Tickets Resueltos", "Tickets Nuevos","Tickets Abiertos"],
        },

    series: [41,30,17,55],
}

const lines = {
    series: [{
        name: ' Ticket Recibido',
        data: [40,70,20,90,36,80,30,91,60]
    }, {
        name: ' Tickets Resueltos',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}
const alumno = [
    {id:10111, nombre: "Marlon Castro", prio: "Alta", sede: "Sede Central", estado:"Pendiente", fecha:"31 de Diciembre"},
    {id:20222, nombre: "Jhon Doe", prio: "Urgente", sede: "Sede Norte", estado:"Abierto", fecha:"25 de Febrero"},
    {id:30333, nombre: "Jose Daniel", prio: "Baja", sede: "Sede Central", estado:"Pendiente", fecha:"03 de Enero"},
    {id:40444, nombre: "Selvin Carranza", prio: "Media", sede: "Sede Central", estado:"Abierto", fecha:"02 de Marzo"},
  
];



class Dashboard extends React.Component{
    state={
        alumno: alumno
    }

    render(){
        return(
            
            <div className='contentD'>
                <div>
                    <h2>Dashboard</h2>
                    <div className="row"> 
                        <div className='col-6'>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className='bloque'>
                                        <h4>500</h4>
                                        <span>Alumnos registrados</span>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='bloque'>
                                        <h4>2.300</h4>
                                        <span>Tickets resueltos</span>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='bloque'>
                                        <h4>$9.990</h4>
                                        <span>Ganancias totales</span>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='bloque'>
                                        <h4>24</h4>
                                        <span>Tickets Totales</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className='col-6'>
                            <div className='bloque'>

                            <Chart options={chartOptions.options} series={chartOptions.series} labels={chartOptions.labels} type="donut"  width='463px' />

                            </div>
                        
                        </div>
                        <div className='col-6'>
                            <div className='bloque'>
                                <Chart options={lines.options} series={lines.series} type="line" height='350px' width='690px' />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='bloque'>
                                <h5>Tickets Recientes</h5>

                        
                                <Table
                                dark
                                responsive  
                                striped>
                                    <thead>
                                        <tr>
                                            <th>Ticket ID</th>
                                            <th>Solicitante</th>
                                            <th>Prioridad</th>
                                            <th>Campus</th>
                                            <th>Estado</th>
                                            <th>Fecha</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.alumno.map((elemento) =>(
                                            <tr>
                                                <td>{elemento.id}</td>
                                                <td>{elemento.nombre}</td>
                                                <td>{elemento.prio}</td>
                                                <td>{elemento.sede}</td>
                                                <td>{elemento.estado}</td>
                                                <td>{elemento.fecha}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>

                                <div className='fooot'>
                                    <div className='izq'>
                                       
                                    </div>
                                    <div className='der'>
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <a>Ver mas...</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard