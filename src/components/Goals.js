import React, { useState } from 'react';

function GoalForm(props) {
    const [formData, setFormData] = useState({ goal: "", by: "" });

    function changeHandler(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function submitHandler(e) {
        e.preventDefault();
        props.onAdd(formData);
        setFormData({ goal: "", by: "" });
    }

    return (
        <>
            <h1>My Goals</h1>
            <form onSubmit={submitHandler}>
                <input type='text' name='goal' placeholder='Goal' value={formData.goal} onChange={changeHandler} />
                <input type='text' name='by' placeholder='By...' value={formData.by} onChange={changeHandler} />
                <button>Submit Goal</button>
            </form>
        </>
    );
}

function ListofGoals(props) {
    const [editIndex, setEditIndex] = useState(null);
    const [editFormData, setEditFormData] = useState({ goal: "", by: "" });

    function deleteGoal(index) {
        const updatedGoals = props.allGoals.filter((_, i) => i !== index);
        props.updateGoals(updatedGoals);
    }

    function editGoal(index) {
        setEditIndex(index);
        setEditFormData(props.allGoals[index]);
    }

    function changeEditHandler(e) {
        setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
    }

    function saveEdit(index) {
        const updatedGoals = [...props.allGoals];
        updatedGoals[index] = editFormData;
        props.updateGoals(updatedGoals);
        setEditIndex(null);
        setEditFormData({ goal: "", by: "" });
    }

    function cancelEdit() {
        setEditIndex(null);
        setEditFormData({ goal: "", by: "" });
    }

    return (
        <ul>
            {props.allGoals.map((g, index) => (
                <li key={index}>
                    {editIndex === index ? (
                        <>
                            <input type='text' name='goal' value={editFormData.goal} onChange={changeEditHandler} />
                            <input type='text' name='by' value={editFormData.by} onChange={changeEditHandler} />
                            <button onClick={() => saveEdit(index)}>Save</button>
                            <button onClick={cancelEdit}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <span>My goal is to {g.goal}, by {g.by}</span>
                            <button onClick={() => deleteGoal(index)}>x</button>
                            <button onClick={() => editGoal(index)}>✏️</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default function Goals() {
    const [allGoals, updateAllGoals] = useState([]);

    function addGoal(goal) {
        updateAllGoals([...allGoals, goal]);
    }

    return (
        <div className="card">
            <GoalForm onAdd={addGoal} />
            <ListofGoals allGoals={allGoals} updateGoals={updateAllGoals} />
        </div>
    );
}
























// function GoalForm(props) {
//     const [formData, setFormData] = React.useState({goal:"", by:""});
//     function changeHandler(e) {
//         setFormData({...formData, [e.target.name]:e.target.value});
//     }
//     function submitHandler(e) {
//         e.preventDefault();
//         props.onAdd(formData);
//         setFormData({goal:"", by:""});

//     };
//     return(
//         <>
//          <h1>My Goals</h1>
//          <form onSubmit={submitHandler}>
//             <input type='text' name='goal' placeholder='Goal' value={formData.goal} onChange={changeHandler} />
//             <input type='text' name='by' placeholder='By...' value={formData.by} onChange={changeHandler} />
//             <button>Submit Goal</button>
//          </form>
//         </>
//     );

// }

// function ListofGoals(props){
//     return (
//         <ul>
//             {props.allGoals.map((g) => (
//             <li key={g.goal}>
//                 <span>My goal is to {g.goal}, by {g.by}</span>
//             </li>
//             ))}
//         </ul>
//     );

// }

// export default function Goals() {
//     const [allGoals, updateAllGoals] = React.useState([]);

//     function addGoal(goal) {updateAllGoals([...allGoals, goal]);}

//     return (

//         <div className="card">
//          <GoalForm onAdd={addGoal} />
//          <ListofGoals allGoals={allGoals} />
//         </div>
//     );
// };