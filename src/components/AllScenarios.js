import React  from 'react'
import './AllScenarios.css'
import { useNavigate } from 'react-router-dom'
import NumberOfVehicles from './NumberOfVehicles'

const AllScenarios = () => {
  const navigate = useNavigate()

  const scenariolist = localStorage.getItem("scenarioList");
  const data = JSON.parse(scenariolist);
  
  

  
  return (
    <div className='allscenarios'>
       <div className='heading'>
        <h2>All Scenarios</h2>
        <div id="button_all">
          <buttom className="button green " onClick={()=>{navigate("/addscenario")}} >New Scenario</buttom>
          <buttom className="button  orange " onClick={()=>{navigate("/addvehicles")}}>Add vehicle</buttom>
          <buttom className="button blue" onClick={()=>{localStorage.removeItem("scenarioList");
        window.location.reload()}}>Delete All</buttom>
        </div>
       </div>
       <div className='scenario_container'>
          <div className='scenario_heading'>
            <h4 className='scenario_ele'>Scenario Id</h4>
            <h4 className='scenario_ele'>Name</h4>
            <h4 className='scenario_ele'> Time</h4>
            <h4 className='scenario_ele'> Vehicles</h4>
            <h4 className='scenario_ele'>Add vehicle</h4>
            <h4 className='scenario_ele'>Edit</h4>
            <h4 className='scenario_ele'>Delete</h4>
          </div>
          <div  id= "sort">
             {
             data  && data.map((e,index)=>{
                return (
                  <div key={new Date()} className='scenario_list'   >
                  <h4 className='scenario_ele'>{index}</h4>
                  <h4 className='scenario_ele'>{e.name}</h4>
                  <h4 className='scenario_ele'>{e.time}</h4>
                  <h4 className='scenario_ele'>{
                     <NumberOfVehicles scenario={e.name} />
                    }</h4>
                  <h4 className='scenario_ele' >Add vehicle</h4>
                  <h4 className='scenario_ele'>Edit</h4>
                  <h4 className='scenario_ele'>Delete</h4>
                </div>
                )
              })
             }
          </div>
       </div>
    </div>
  )
}

export default AllScenarios
