import {useState} from 'react';

const Do = props => (
    <tr>
        <td>
            <label>{props.id}</label>
        </td>
        <td>
            <input style={{ width: '100px' }}/>
        </td>
        <td>
            <label>{props.createdAt}</label>
        </td>
    </tr>

);

function ToDo(){
    const [todos, setTodos] = useState([{
        id: 'todo1',
        createdAt: '18:00',
    }, {
        id: 'todo2',
        createdAt: '20:30'

    }]);
    const reverseOrder = () => {
        setTodos([...todos].reverse());
    }
    return (
        <div className='card'>
            <h1>Using keys within list components</h1>
            <table>
                <tbody>
                    {todos.map((todo, index) => (<Do key={todo.id} id={todo.id} createdAt={todo.createdAt} />))}
                </tbody>
            </table>
            <button onClick={reverseOrder}>Reverse</button>
        </div>
    );

}

export default ToDo;