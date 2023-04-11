import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
const Home = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [selectedScenario, setSelectedScenario] = useState("");
  const [intervalObj, setIntervalObj] = useState({});
  const [list, setList] = useState([]);
  const [localvehicle, setLocalVehicle] = useState([]);

  const vehicleList = JSON.parse(localStorage.getItem("vehicleList"));
  const [position, setPosition] = useState({
    top: "",
    left: "",
    bottom: "",
    right: "",
  });

  useEffect(() => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const topLeft = [rect.left, rect.top];
    const topRight = [rect.right, rect.top];
    const bottomLeft = [rect.left, rect.bottom];
    const bottomRight = [rect.right, rect.bottom];
    setPosition({
      top: topLeft[1],
      left: topLeft[0],
      bottom: bottomLeft[1],
      right: bottomRight[0],
    });
    localStorage.setItem("position", JSON.stringify(position));
  }, []);
  //console.log(position.top,position.bottom, position.left, position.right)
  useEffect(() => {
    if (vehicleList) {
      const selectedScenarioVehicle = vehicleList.filter((e) => {
        return selectedScenario === e.scenario;
      });
      setList(selectedScenarioVehicle);
    }
  }, [selectedScenario, localvehicle]);

  useEffect(() => {
    const scenariolist = localStorage.getItem("scenarioList");
    const data = JSON.parse(scenariolist);

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
        option.value = `${e.name}`;
        option.key = { index };
        ele.appendChild(option);
        return console.log();
      });
    }
  });

  const handleChange = (e) => {
    setSelectedScenario(e.target.value);
  };

  const handleSimulation = (e) => {
    if (e && list.length > 0) {
      const { left, right, top, bottom } = position;
      console.log(left, right, top, bottom);

      const scenariolist = localStorage.getItem("scenarioList");
      const data = JSON.parse(scenariolist);

      const ourScenario = data.filter((e) => {
        return selectedScenario === e.name;
      });
      console.log(ourScenario);
      let time = ourScenario[0]?.time;

      if (time === undefined) {
        time = 2;
      }
      list.forEach((e, index) => {
        if (e.direction === "upwards") {
          console.log("Upwards");
          const element = document.getElementById(`${index}`);

          let value = element.style.top;
          value = Number(value.slice(0, value.length - 2));

          const name = setInterval(() => {
            element.style.top = value + "px";
            value -= Number(e.speed);
          }, 100);
          setIntervalObj((prev) => {
            return { ...prev, [`id${index}`]: name };
          });

          setTimeout(() => {
            clearInterval(name);
          }, Number(time) * 1000);
        }

        if (e.direction === "downwards") {
          console.log("downwards");
          const element = document.getElementById(`${index}`);

          let value = element.style.top;
          value = Number(value.slice(0, value.length - 2));
          const id = setInterval(() => {
            element.style.top = value + "px";
            value += Number(e.speed);
          }, 100);

          setIntervalObj((prev) => {
            return { ...prev, [`id${index}`]: id };
          });

          setTimeout(() => {
            clearInterval(id);
          }, Number(time) * 1000);
        }

        if (e.direction === "towards") {
          console.log("Towards");
          const element = document.getElementById(`${index}`);

          let value = element.style.left;
          value = Number(value.slice(0, value.length - 2));
          const id = setInterval(() => {
            element.style.left = value + "px";
            value += Number(e.speed);
          }, 100);
          setIntervalObj((prev) => {
            return { ...prev, [`id${index}`]: id };
          });

          setTimeout(() => {
            clearInterval(id);
          }, Number(time) * 1000);
        }
        if (e.direction === "backwards") {
          console.log("backwards");
          const element = document.getElementById(`${index}`);

          let value = element.style.left;
          value = Number(value.slice(0, value.length - 2));
          const id = setInterval(() => {
            element.style.left = value + "px";
            value -= Number(e.speed);
          }, 100);
          setIntervalObj((prev) => {
            return { ...prev, [`id${index}`]: id };
          });

          setTimeout(() => {
            clearInterval(id);
          }, Number(time) * 1000);
        }
      });
    }
  };
  const handleSimulationstop = () => {
    list.forEach((e, index) => {
      clearInterval(intervalObj[`id${index}`]);
    });

    console.log(intervalObj);
  };

  const handleClickedVehicle = (e) => {
    console.log(e);
    const action = e.target.innerHTML;
    console.log(action);
    if (action === "delete") {
      const name = e.target.parentNode.childNodes[1].innerHTML;
      console.log(name);
      const list = localStorage.getItem("vehicleList");
      const data = JSON.parse(list);
      const selectedVehicle = data.filter((e) => {
        return e.name !== name;
      });
      localStorage.setItem("vehicleList", JSON.stringify(selectedVehicle));
      const scenario = selectedScenario;
      console.log(scenario);
      setLocalVehicle(selectedVehicle);
      const parentNode = selectedVehicle.target;
      console.log(parentNode);
      console.log(selectedVehicle);
    } else if (action === "Edit") {
      const name = e.target.parentNode.childNodes[1].innerHTML;
      console.log(name);
      const list = localStorage.getItem("vehicleList");
      const data = JSON.parse(list);
      const selectedVehicle = data.filter((e) => {
        return e.name === name;
      });
      console.log(selectedVehicle);
      navigate("/vehiclelist", { state: selectedVehicle });
    }
  };

  return (
    <div id="home">
      <div id="select_scenario">
        <label htmlFor="direction">Scenario</label>
        <select name="" id="scenarioList" onChange={handleChange}>
          <option value="">select a scenario</option>
        </select>
        <div id="info">
          <AiOutlineInfoCircle
            onClick={() => {
              navigate("/info");
            }}
          />
        </div>
      </div>

      <div id="vehicleList">
        <div id="vehicles">
          <div className="vehicle_heading">
            <h4 className="vehicle_ele">Id</h4>
            <h4 className="vehicle_ele">Name</h4>
            <h4 className="vehicle_ele">position X</h4>
            <h4 className="vehicle_ele">position Y</h4>
            <h4 className="vehicle_ele">speed</h4>
            <h4 className="vehicle_ele">Directon</h4>
            <h4 className="vehicle_ele">Edit</h4>
            <h4 className="vehicle_ele">delete</h4>
          </div>

          <div className="list_render">
            {list &&
              list.map((e, index) => {
                return (
                  <div
                    key={index}
                    className="vehicle_render"
                    onClick={handleClickedVehicle}
                  >
                    <h4 className="vehicle_ele">{index+1}</h4>
                    <h4 className="vehicle_ele">{e.name}</h4>
                    <h4 className="vehicle_ele">{e.positionX}</h4>
                    <h4 className="vehicle_ele">{e.positionY}</h4>
                    <h4 className="vehicle_ele">{e.speed}</h4>
                    <h4 className="vehicle_ele">{e.direction}</h4>
                    <h4 className="vehicle_ele">Edit</h4>
                    <h4 className="vehicle_ele">delete</h4>
                  </div>
                );
              })}
          </div>
        </div>

        <div id="button_div_home">
          <button
            className="button green"
            onClick={() => {
              handleSimulation(13000);
            }}
          >
            Start simulation
          </button>
          <button
            className="button blue"
            onClick={() => {
              handleSimulationstop();
            }}
          >
            Stop simulation
          </button>
        </div>
      </div>
      <div id="simulation" ref={containerRef}>
        {list.map((e, index) => {
          const variableX = Number(e.positionX) + "px";
          const variableY = Number(e.positionY) + "px";
          return (
            <div
              className="element"
              id={index}
              style={{
                position: "absolute",
                left: `${variableX}`,
                top: `${variableY}`,
                zIndex: `${index}`,
              }}
            >
              {e.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
