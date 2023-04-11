import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const EditScenario = () => {
const {state} =  useLocation()
const navigate = useNavigate()
const [scenario , setScenario] = useState({})
const [list, setList] = useState([]);

 
console.log(state)

useEffect(() => {
  if(list.length > 0) {
    const data = localStorage.getItem("scenarioList")
    const scenarioList = JSON.parse(data)
    const filtered = scenarioList.filter((e)=>{
        return e.name !== state[0].name
    })
    console.log(filtered)
    console.log(scenarioList)
    console.log(list)
    const updatedList =  filtered.concat(list)
    localStorage.setItem('scenarioList', JSON.stringify(updatedList))
  }
},[list])

const handleOnChange =  (e)=>{

    const {name, value} = e.target
      setScenario((prev)=>{
      return {
         ...prev,
         [name] : value
      }
    }
    )
  }


  const handleAdd =  (e) => {
    e.preventDefault()
    setList([  scenario]);
      setScenario({
      name: "",
      time: 0,
    });
     console.log(scenario);
   
  };
  return (
    <>
    <div id="addscenario">
      <div id="scenario_h3">
        <h3>Scenario/add</h3>
        <h1>Add Scenario</h1>
      </div>
      <div className="input">
        <div className="scenario">
          <div className="vehicle_input">
            <label htmlFor="ScenarioName">Scenario Name</label>

            <input
              type="text"
              name="name"
              placeholder="    Scenario Name"
              onChange={handleOnChange}
              value={scenario.name}
            />
          </div>
          <div className="vehicle_input">
            <label htmlFor="ScenarioTime">Scenario Time</label>
            <input
              type="text"
              name="time"
              onChange={handleOnChange}
              value={scenario.time}
              placeholder="   Scenario Time"
            />
          </div>
        </div>
      </div>
      <div id="button_div">
        <button className="button green " onClick={handleAdd}>
          Add
        </button>
        <button className="button orange" onClick={()=>{setScenario({
    name: "",
    time: 0,
  });}}
      >Reset</button>
        <button className="button blue" onClick={()=>{navigate('/allscenarios')}}>Do Back</button>
      </div>
    </div>
  </>
  )
}

export default EditScenario
