import {Link} from 'react-router-dom'

const Sidebar = () =>{
    return(
        <div className="sidebar">
            <ul>
                <li>
                    <Link to ="/" className="_button">Dashboard</Link>
                </li>
                <li>
                    <Link to ="tickets">Tickets</Link>
                </li>
                <li>
                    <Link to ="alumnos">Alumnos</Link>
                </li>
                <li>
                    <Link to ="docentes">Docentes</Link>
                </li>
                <li>
                    <Link to ="busquedas">Busqueda</Link>
                </li>
                <li>
                    <Link to ="config">Configuraciones</Link>
                </li>
                
                
                
            </ul>
        </div>
    )
}

export default Sidebar