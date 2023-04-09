import React, { useState } from "react";

const IntervalExample = () => {
  const [intervalId, setIntervalId] = useState(null);

  const startInterval = () => {
    if (intervalId === null) {
      const id = setInterval(() => {
        console.log("Interval is running...");
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopInterval = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  return (
    <div>
      <h1>Interval Example</h1>
      <button onClick={startInterval}>Start Interval</button>
      <button onClick={stopInterval}>Stop Interval</button>
    </div>
  );
};

export default IntervalExample;
