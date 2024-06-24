import React, { useState, useEffect } from 'react';

function Childs({ message, darkModeOn }) {
  const [time, setTime] = useState(message);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, [message]);

  const baseStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    margin: '10px',
    fontSize: '14px',
    color: darkModeOn ? 'white' : 'black',
  };

  return <h1 style={baseStyle}>{time}</h1>;
}

export default Childs;





// function Childs(props){
    

//     return (
//         <h1>{props.message}</h1>
//     )
// }

// export default Childs;