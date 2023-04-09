import React from 'react'

const NumberOfVehicles = ({scenario}) => {
    const vehicleList =  localStorage.getItem("vehicleList");
    const list = JSON.parse(vehicleList);
    const number = list && list.filter((ele)=>{
        return ele.scenario ===  scenario
   })
   console.log(number)
   const numberOfvehicle = number ? number.length:0
  return (
    <>
     {
        numberOfvehicle
     }
    </>
  )
}

export default NumberOfVehicles
