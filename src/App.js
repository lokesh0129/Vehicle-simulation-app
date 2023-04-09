import './App.css';
import { Link, Outlet } from 'react-router-dom';
 
 
 

function App() {
  return (
    <div className="App">
      <div id='home_container'>
      <nav id='home_nav'>
       <Link id='link' to={""}>Home</Link>
       <Link id='link' to={"addscenario"}>Add Scenario</Link>
       <Link id='link' to={"allscenarios"}>All Scenarios</Link>
       <Link id='link' to={"addvehicles"}>Add  vehicles</Link>
 
       </nav>
        
      </div>
      <div id="outlet">
        <Outlet />
      </div>
        {/* <IntervalExample /> */}
    </div>
  );
}

export default App;
