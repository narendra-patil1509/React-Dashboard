
import Dashboard from './Components/Dashboard';
import './App.css'
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';

function App() {
  return (
    <div className='container-fluid bg-secondary min-vh-100'>
      <div className="row">
        <div className="col-2 bg-white vh-100">
          <Sidebar />
        </div>
        <div className="col">
          <Home />
        </div>
      </div>
    </div>
  )
}

export default App
