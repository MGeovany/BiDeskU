import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Tickets from './pages/Tickets'
import Alumnos from './pages/Alumnos'
import Docentes from './pages/Docentes'

import './App.scss';



function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        
        <Sidebar />
        <div className="content">
         
          <Route path="/" exact={true} component={Dashboard} />
          <Route path="/tickets" exact={true} component={Tickets} />
          <Route path="/alumnos" exact={true} component={Alumnos} />
          <Route path="/docentes" exact={true} component={Docentes} />

        </div>
      </div>
      
    </Router>
  );
}

export default App;
