import { useState } from 'react';

export default function InputComponent() { 
  const [inputText, setText] = useState(''); 

  function handleChange(e) { 
    setText(e.target.value); 
  } 

  return ( 
    <div className='card'> 
      <h1>Input</h1>
      <input value={inputText} onChange={handleChange} placeholder='Type...'/> 
      <p>You typed: {inputText}</p> 
      <button onClick={() => setText('')}> 
        Reset 
      </button> 
    </div> 
  ); 
};