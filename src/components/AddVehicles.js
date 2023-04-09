import React, { useEffect,  useState } from 'react'
import './vehicle.css'
import { useNavigate } from 'react-router-dom'

const AddVehicles = () => {
  const navigate = useNavigate()
  const[vehicleList , setVehicleList] =  useState([])
  const [vehicle ,setVehicle] =  useState({
    name:"",
    positionX:"",
    positionY:"",
    speed : "",
    scenario:'',
    direction:''
  })
 

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("vehicleList"));
    if (storedList) {
      setVehicleList(storedList);
    }
  }, []);
  
  const handleOnChange =  (e)=>{

    const {name, value} = e.target
      setVehicle((prev)=>{
      return {
         ...prev,
         [name] : value
      }
    }
    )
  }
  useEffect(() => {
    if(vehicleList.length > 0) {
      //console.log("vehicleList")
    localStorage.setItem("vehicleList", JSON.stringify(vehicleList));
    }
  }, [vehicleList]);

  const handleAdd =  (e) => {
    e.preventDefault()
    setVehicleList([...vehicleList,  vehicle]);
      setVehicle({
        name:"",
        positionX:"",
        positionY:"",
        speed : "",
        scenario:'',
        direction:''
    });
     
   
  };

 

  useEffect(()=>{
    const list = localStorage.getItem('scenarioList')
    const data = JSON.parse(list)
    console.log(data)
    const ele = document.getElementById('scenarioList')
    if(data   && ele.childNodes.length-1 !==data.length ){
    const ele = document.getElementById('scenarioList')
    data.map((e,index)=>{
      const option =  document.createElement('option')
      option.textContent =`${e.name}`
      option.setAttribute="value"
      option.setAttribute="value"
      option.setAttribute="color:white"
      option.value=`${e.name}`
      option.key={index}
      ele.appendChild(option)
      return option
    })
    
  }
  console.log(ele)
  },[])
   
  return (
    <>
    <div id="addscenario">
    <div id="scenario_h3">
      <h3>Scenario/add</h3>
      <h1>Add Scenario</h1>
    </div>
    <div className="input">
      <div className='vehicle'>
        <div className="vehicle_input" >
          <label htmlFor="scenarioList">Scenario List</label>
          <select name="scenario" id="scenarioList" value={vehicle.scenario}  onChange={handleOnChange}>
           <option value="">Select A scenario</option>
            </select>
        </div>
        <div className="vehicle_input">
          <label htmlFor="vehicleName">Vehicle Name</label>
          <input id='vehicleName'  type="text" name="name" value={vehicle.name} onChange={handleOnChange} />
        </div>
        <div className="vehicle_input">
          <label htmlFor="speed">speed</label>
          <input id='speed' type="text" name="speed" value={vehicle.speed} onChange={handleOnChange} />
        </div>
      </div>
      <div  className='position'>
        <div className="vehicle_input">
        <label htmlFor="positinX">positinX</label>
          <input id='positinX' type="text" placeholder='position X' name="positionX" value={vehicle.positionX} onChange={handleOnChange} />
        </div>
        <div className="vehicle_input">
        <label htmlFor="positionY">position Y</label>
          <input id='positionY' type="text" placeholder='position Y' name="positionY" value={vehicle.positionY} onChange={handleOnChange} />
        </div>
        <div className="vehicle_input">
        <label htmlFor="direction"> direction</label>
         <select name="direction" id="" value={vehicle.direction} onChange={handleOnChange} >
          <option value="">Select direction</option>
          <option value="upwards" placeholder='upword'>Upwards</option>
          <option value="downwards" placeholder='down word'>downwards</option>
          <option value="towards" placeholder='to words'>Towards</option>
          <option value="backwards" placeholder='backwords'>Backwards</option>
         </select>
        </div>
      </div>
    </div>
    <div id="button_div">
      <button className="button green " onClick={handleAdd}>Add</button>
      <button className="button orange" onClick={()=>{setVehicle({
                  name:"",
                  positionX:"",
                  positionY:"",
                  speed : "",
                  scenario:'',
                  direction:''
             });}}
             >Reset</button>
      <button className="button blue" onClick={()=>{navigate("/")}}>Go Back</button>
    </div>
  </div>
</>
  )
}

export default AddVehicles
