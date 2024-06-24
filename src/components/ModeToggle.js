import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function ModeToggle({ darkModeOn, setDarkModeOn }) {
  const handleClick = () => {
    setDarkModeOn(!darkModeOn);
  };

  return (
    <div className="mode-toggle-container">
      <button onClick={handleClick} className="mode-toggle-button">
        <FontAwesomeIcon icon={darkModeOn ? faMoon : faSun} color={darkModeOn ? '#fff' : '#000'} />
      </button>
    </div>
  );
}

export default ModeToggle;
