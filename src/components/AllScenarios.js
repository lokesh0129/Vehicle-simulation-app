import React, { useEffect, useState }  from 'react'
import './AllScenarios.css'
import { useNavigate } from 'react-router-dom'
import NumberOfVehicles from './NumberOfVehicles'


const AllScenarios = () => {
  const navigate = useNavigate()
  const [selectedScenario, setSelectedScenario] = useState("");
  const [localScenario, setlocalScenario] = useState("")
  const [data , setData] = useState([])
   

  useEffect(()=>{
    const scenariolist = localStorage.getItem("scenarioList");
    const datalist = JSON.parse(scenariolist);
    setData(datalist)
  },[selectedScenario])
  
  const handleClickedVehicle = (e) => {
    console.log(e);
    const action = e.target.innerHTML;
    console.log(action);
    if (action === "Delete") {
      const name = e.target.parentNode.childNodes[1].innerHTML;
      console.log(name);
      const list = localStorage.getItem("scenarioList");
      const data = JSON.parse(list);
      const selectedVehicle = data.filter((e) => {
        return e.name !== name;
      });
      



      setlocalScenario(selectedVehicle);
      localStorage.setItem("scenarioList", JSON.stringify(selectedVehicle));
      console.log(selectedVehicle);
      const scenario = selectedScenario;
      console.log(scenario);
      
      const parentNode = selectedVehicle.target;
      console.log(parentNode);
      console.log(selectedVehicle);
      
    } else if (action === "Edit") {
      const name = e.target.parentNode.childNodes[1].innerHTML;
      console.log(name);
      const list = localStorage.getItem("scenarioList");
      const data = JSON.parse(list);
      const selectedVehicle = data.filter((e) => {
        return e.name === name;
      });
      console.log(selectedVehicle);
      navigate("/editscenario", { state: selectedVehicle });
    }
  };
  
  const nodes =  document.getElementById("sort")
  //console.log(nodes?.childNodes.length);

  
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
           
            <h4 className='scenario_ele'>Edit</h4>
            <h4 className='scenario_ele'>Delete</h4>
          </div>
          <div  id= "sort">
             {
              data.length !== nodes?.childNodes.length  && data.map((e,index)=>{
                return (
                  <div key={`${index}${new Date()}`} className='scenario_list' onClick={handleClickedVehicle}  >
                  <h4 className='scenario_ele'>{index+1}</h4>
                  <h4 className='scenario_ele'>{e.name}</h4>
                  <h4 className='scenario_ele'>{e.time}</h4>
                  <h4 className='scenario_ele'>{
                     <NumberOfVehicles scenario={e.name} />
                    }</h4>
                   
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
