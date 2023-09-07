import React, { useState } from "react";
import './component.css'

function UserData  () {
    let [input1 , setInput1] = useState('...');
    let [input2 , setInput2] = useState('...');
    let [input3 , setInput3] = useState('...');
    const submit = () => {
       let input1 = document.getElementById('input1').value;
       let input2 = document.getElementById('input2').value;
       let input3 = document.getElementById('input3').value;
       setInput1(input1)
       setInput2(input2)
       setInput3(input3)
    }
    return(
        <>
        <div className="input">
            <label htmlFor="StudentName">* StudentName :</label>
            <input type="text" id="input1" placeholder="StudentName"/><br />
            <label htmlFor="StudentClass">* StudentClass :</label>
            <input type="text" id="input2" placeholder="StudentClass"/><br />
            <label htmlFor="StudentAge">* StudentAge :</label>
            <input type="text" id="input3" placeholder="StudentAge"/><br />
            <button type="button" className="btn btn-primary text-light m-3" onClick={submit}>submit</button>
        </div>
        <div className="show">
           <h5 className="fw-bold">Student Name</h5>
           <h5 className="fw-bold">Student Class</h5>
           <h5 className="fw-bold">Student Age</h5>
        </div>
        <div className="result">
        <p className="fw-bold">{input1}</p>
        <p className="fw-bold">{input2}</p>
        <p className="fw-bold">{input3}</p>
        </div>
        </>
    )
}

export default UserData