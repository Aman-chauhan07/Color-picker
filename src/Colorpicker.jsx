import React, { useState } from "react";


function Colorpicker() {
  const [color, setColor] = useState("#ffffff");

  function handlechangingcolor(e){
    setColor(e.target.value)
  }

  return <div className="color-picker-container">
    <h2>Color Picker</h2>
    <p className="selected-color" style={{backgroundColor:color}}>Selected Color: {color}</p>
    <label>Select a color: {color}</label>
    <input type="color" value={color} onChange={handlechangingcolor}/>
  </div>;
}

export default Colorpicker;
