import React from "react";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();
 
  return (
    <div   id="home" >
      <h1> Here , you can get few tips how this works</h1>
      <large>{" * "} First add a scenario your wish</large>
      <br />
      <large>
        {" * "}
        It must contain name and time to run that scenario , best suited in
        seconds
      </large>
      <br />
      <large>
        {" * "}
        You can keep adding scenarios and all the scenarios are listed in all
        scenarios tap on side bar
      </large>
      <br />
      <large>{" * "} now add a vehicle use a scenario of your kind </large>
      <br />
      <large>
        {" * "}
        you can add any number of vehicle to a scenario but there will only one
        scenario for a vehicle
      </large>
      <br />
      <large>
        {" * "}
        edit and delete buttons on home are fully functional based on you cursor
        postion while clicking resped items is deleted
      </large>
      <br />
      <large>
        {" * "}
        click on edit it re-directed to a page based on element you have
        selected with some predefined info of vehicle is shown{" "}
      </large>
      <br />
      <large>
        {" * "}
        now you can change the vehicle properties of you wish you mandatory to note
        all the fileds are mandatory <br />
      </large>
      <br />
      <h3>About grid</h3>
      <large>
        {" * "} Top left coner is (0,0) co-ordinates based on the screen size
        rest 3 corners have different value
      </large><br />
      <large>
        {" * "} if selected location of a vehicle falls out of this grid is hidden
        but all functionalites are applied
      </large><br />
      <large>
        {" * "}for example if a vehicle is located below of grid in y-axis with direction
        of motion upwards , it will be visible when its location is in range of
        grid
      </large><br />
      <large>
        {" * "}vehicle intially in grid can move out grid in process of moving
        based on applied speed and time of scenario
      </large><br />
      <small>app is adjusted for all screen sizes and give same result but best suited for sceen width 700px and above</small> <br /><br />
      <button
        className="button green"
        onClick={() => {
          navigate("/");
        }}
      >
        Go back
      </button>
      <p style={{color:"red",paddingTop:"15px"}}>------- In every section all fields are mandatory missing a field may cause unexpected result---------</p>
    </div>
  );
};

export default Info;
