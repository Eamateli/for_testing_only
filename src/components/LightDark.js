import React, { useState } from "react";


const LightDark = () => {
  const [theme, setTheme] = useState("light");

  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`card ${theme === "light" ? "light-theme" : "dark-theme"}`}>
        <h1>Just a Dark,Light mode</h1>
      <label className="switch">
        <input type="checkbox" onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
      <button onClick={handleToggle}>
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button>
    </div>
  );
};

export default LightDark;
