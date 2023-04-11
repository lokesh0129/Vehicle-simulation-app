import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, createRoutesFromElements,Route , RouterProvider} from 'react-router-dom'
import Home from './components/Home';
import AddScenario from './components/AddScenario';
import AddVehicles from './components/AddVehicles';
import AllScenarios from './components/AllScenarios';
import VehiclesList from './components/VehiclesList';
import Info from './components/Info';
import EditScenario from './components/EditScenario';
 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<App/>}>
      <Route path='' element={<Home />}/>
      <Route path='addscenario'element={<AddScenario/>} />
      <Route path='addvehicles' element={<AddVehicles/>}/>
      <Route path='allscenarios' element={<AllScenarios/>}/>
      <Route path='vehiclelist' element={<VehiclesList />}/>
      <Route path='editscenario' element={<EditScenario />}/>
      <Route path='info' element={<Info />}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <RouterProvider router={router} />
 
 
);
 

 