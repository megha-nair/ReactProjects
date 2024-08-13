import {useState} from "react";
function State(){
    const [username, setUsername]= useState("John");
    const handleChange=() =>{
        setUsername(username === "John" ? "Mike": "John");};
    return (
        <div>
            <h1>State</h1>
            <h3>{username}</h3>
            <button onClick={handleChange}>Change Name</button>
        </div>
    )
}
export default State;