import {useState} from 'react';


function Form1 (){
    const [score, setScore] = useState('10');
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Number(score) <= 5 && comment.length <= 10 ){
            alert("Please provide a comment explaining why the experience was poor.")
            return;
        }
        console.log("Form submitted!");
        setComment("");
        setScore("10");
    };

    return (
       <div className="card">
        <h1>Using A Controlled Form Component</h1>
        <form onSubmit={handleSubmit}>
            <fieldset style={{ borderRadius: '10px', padding: '20px' }}>
                <h2>Feedback form</h2>
                <div className="Field">
                    <label>Score: {score} ⭐</label>
                    <input type="range" min="0" max="10" value={score} onChange={ e => setScore(e.target.value)} />
                </div>
                <div className='Field'>
                   <label>Comment:</label>
                   <textarea  value={comment} onChange={e => setComment(e.target.value)} />
                </div>
                <button type="submit" style={{ borderRadius: '5px', padding: '10px' }}>Submit</button>
            </fieldset>
        </form>
       </div>
    );

}






export default Form1;