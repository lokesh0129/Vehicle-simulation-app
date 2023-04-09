import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";


const AddScenario = () => {
  const navigate = useNavigate()
  const [list, setList] = useState([]);
  const [scenario, setScenario] = useState({
    name: "",
    time: 0,
  });
  console.log(scenario)

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("scenarioList"));
    if (storedList) {
      setList(storedList);
    }
  }, []);

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
    setList([...list, scenario]);
      setScenario({
      name: "",
      time: 0,
    });
     console.log(scenario);
   
  };
  useEffect(() => {
    if(list){
      localStorage.setItem("scenarioList", JSON.stringify(list));
    }
  }, [list]);

   
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
          <button className="button blue" onClick={()=>{navigate('/')}}>Do Back</button>
        </div>
      </div>
    </>
  );
};

export default AddScenario;
