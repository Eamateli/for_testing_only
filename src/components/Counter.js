import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    return (
        <div className='card'>
            <h1>Counter</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <button onClick={() => setCount(0)}>Start again</button>
        </div>
    );
};

export default Counter;