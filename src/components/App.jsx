import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  const [displayTime, setDisplayTime] = useState(time);

  function updateTime() {
    let newTime = new Date().toLocaleTimeString();
    setDisplayTime(newTime);
  }
  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{displayTime}</h1>
    </div>
  );
}

export default App;
