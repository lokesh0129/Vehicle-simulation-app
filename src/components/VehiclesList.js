import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const VehiclesList = () => {
  const [vehicle, setVehicle] = useState({});
  const navigate = useNavigate();
  const { state } = useLocation();
  const [inject, setInject] = useState(true);
  const [list, setList] = useState({
    name: "",
    positionX: "",
    positionY: "",
    speed: "",
    scenario: "",
    direction: "",
  });

  //const{ name,positionX,positionY,speed,direction}=selectedVehicle
  //console.log( name,positionX,positionY,speed,direction)
  //console.log(state)
  useEffect(() => {
    setVehicle({
      name: state[0].name,
      positionX: state[0].positionX,
      positionY: state[0].positionY,
      speed: state[0].speed,
      scenario: state[0].scenario,
      direction: state[0].direction,
    });
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setVehicle((prev) => {
      return {
        ...prev,
        [name]: value.trim(),
      };
    });
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    await setList(vehicle);
    setInject((prev) => {
      return !prev;
    });

    //   setVehicle({
    //     name:"",
    //     positionX:"",
    //     positionY:"",
    //     speed : "",
    //     scenario:'',
    //     direction:''
    // });
  };
  useEffect(() => {
    console.log(list);
    if (
      list.name !== "" &&
      list.positionX !== "" &&
      list.positionY !== "" &&
      list.speed !== "" &&
      list.direction !== ""
    ) {
      const vehicleList = localStorage.getItem("vehicleList");
      const data = JSON.parse(vehicleList);
      console.log(data);
      console.log(vehicle);
      const newList =
        data &&
        data.filter((e) => {
          return e.name !== list.name;
        });
      console.log(newList);
      console.log(list);
      newList.push(list);
      console.log(newList);
      localStorage.setItem("vehicleList", JSON.stringify(newList));
    } else {
      setTimeout(() => {
        alert("All fields are mandatory!");
      }, 500);
      console.log(list);
    }
  }, [inject]);

  useEffect(() => {
    const scenariolist = localStorage.getItem("scenarioList");
    const data = JSON.parse(scenariolist);
    //console.log(data);
    const ele = document.getElementById("scenarioList");
    if (data && ele.childNodes.length - 1 !== data.length) {
      const ele = document.getElementById("scenarioList");
      data.map((e, index) => {
        const option = document.createElement("option");
        option.textContent = `${e.name}`;
        option.setAttribute = "value";
        option.setAttribute = "value";
        option.setAttribute = "color:white";
        option.setAttribute = "key";
        option.key = { index };
        option.value = `${e.name}`;

        ele.appendChild(option);
        //return console.log(ele);
      });
    }
  });

  return (
    <div className="edit_vehicle">
      <div className="input">
        <div className="vehicle">
          <div className="vehicle_input">
            <label htmlFor="scenarioList">Scenario List</label>
            <select
              name="scenario"
              id="scenarioList"
              value={vehicle.scenario}
              onChange={handleOnChange}
            >
              <option value="">Select A scenario</option>
            </select>
          </div>
          <div className="vehicle_input">
            <label htmlFor="vehicleName">Vehicle Name</label>
            <input
              id="vehicleName"
              type="text"
              name="name"
              value={vehicle.name}
              onChange={handleOnChange}
            />
          </div>
          <div className="vehicle_input">
            <label htmlFor="speed">speed</label>
            <input
              id="speed"
              type="text"
              name="speed"
              value={vehicle.speed}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="position">
          <div className="vehicle_input">
            <label htmlFor="positinX">positinX</label>
            <input
              id="positinX"
              type="text"
              placeholder="position X"
              name="positionX"
              value={vehicle.positionX}
              onChange={handleOnChange}
            />
          </div>
          <div className="vehicle_input">
            <label htmlFor="positionY">position Y</label>
            <input
              id="positionY"
              type="text"
              placeholder="position Y"
              name="positionY"
              value={vehicle.positionY}
              onChange={handleOnChange}
            />
          </div>
          <div className="vehicle_input">
            <label htmlFor="direction"> direction</label>
            <select
              name="direction"
              id=""
              value={vehicle.direction}
              onChange={handleOnChange}
            >
              <option value="">Select direction</option>
              <option value="upwards" placeholder="upword">
                Upwards
              </option>
              <option value="downwards" placeholder="down word">
                downwards
              </option>
              <option value="towards" placeholder="to words">
                Towards
              </option>
              <option value="backwards" placeholder="backwords">
                Backwards
              </option>
            </select>
          </div>
        </div>
        <div>
          <button className="button green" onClick={handleAdd}>
            Save changes
          </button>
          <button
            className="button orange"
            onClick={() => {
              navigate("/");
            }}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehiclesList;
