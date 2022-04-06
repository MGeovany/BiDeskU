import Chart from 'react-apexcharts'
import './dash.scss'
import React from 'react'

import {Table} from 'reactstrap'
import TablaT from './TablaT'
import FootMove from './FootMove'


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
        data: [40, 70, 45,90,35,60,30,91,40]
    }, {
        name: ' Tickets Resueltos',
        data: [10, 10, 40, 30, 45, 20, 55, 10, 15]
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
    {id:10111, nombre: "Marlon Castro", prio: "Alta", sede: "Sede Central", estado:"Pendiente", fecha:"Dic 31"},
    {id:20222, nombre: "Jhon Doe", prio: "Urgente", sede: "Sede Norte", estado:"Abierto", fecha:"Feb 25"},
    {id:30333, nombre: "Jose Daniel", prio: "Baja", sede: "Sede Central", estado:"Pendiente", fecha:"Ene 03"},
    {id:40444, nombre: "Selvin Carranza", prio: "Media", sede: "Sede Central", estado:"Abierto", fecha:"Mar 02"},
  
];



class Dashboard extends React.Component{


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

                        
                               <TablaT/>

                               <FootMove/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard