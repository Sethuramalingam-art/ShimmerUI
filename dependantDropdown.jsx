import React, { useState } from "react";

const Dropdown = () => {
  const country = ["india", "germany", "dubai"];
  const state = {
    india: ["TN", "UP", "Keralam"],
    germany: ["hamburg", "berlin", "frankfurt"],
    dubai: ["duabi"],
  };

  const [selCountry, setSelCountry] = useState("india");
  const [selStateValue, setSelStateValue] = useState(state[selCountry]);

  const handleSelect = (e) => {
    console.log(e.target.value);
    setSelCountry(e.target.value);
    setSelStateValue(state[e.target.value]);
  };
  return (
    <div className="dropdownContainer">
      Dependant dropdown
      <div className="dropdownDiv">
        <span>Dropdown 1 </span>
        <select onChange={handleSelect} value={selCountry}>
          {country.map((item) => {
            return (
              <>
                <option value={item}>{item}</option>
              </>
            );
          })}
        </select>
      </div>
      <div className="dropdownDiv">
        <span>Dropdown 2 </span>
        <select>
          {selStateValue.map((item) => {
            return (
              <>
                <option>{item}</option>
              </>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
