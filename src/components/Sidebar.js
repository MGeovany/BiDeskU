import {Link} from 'react-router-dom'

const Sidebar = () =>{
    return(
        <div className="sidebar">
            <div className="link">
                <Link to ="/" className="_button">Dashboard</Link>
            </div>
            <div className="link">
                <Link to ="tickets">Tickets</Link>    
            </div>
            <div className="link">
                <Link to ="alumnos">Alumnos</Link>
            </div>
            <div className="link">
                <Link to ="docentes">Docentes</Link> 
            </div>
            <div className="link">
                <Link to ="busquedas">Busqueda</Link>
            </div>
            <div className="link">
                <Link to ="config">Configuraciones</Link>
            </div>

            
                    
      
        </div>
    )
}

export default Sidebar