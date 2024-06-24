import {useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'ride':
            return { money: state.money + 10 };
        case 'fuel':
            return { money: state.money - 50 };
        case 'reset':
            return { money: 100 };
        default:
            throw new Error();
    }
}

function Wallet(){
    const initialState = {money: 100};
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className='card'>
            <h1>Using the useReducer !</h1><br/>
            <h1>Wallet: {state.money}</h1>
            <div>
                <button onClick={() => dispatch({type: 'ride'})}>A new customer!</button>
                <button onClick={() => dispatch({type: 'fuel'})}>Refill the tank!</button>
                <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

            </div>
        </div>
    );


};





export default Wallet;

