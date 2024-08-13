import {useState} from "react";
function ChangeMode(){
    // const [username, setUsername]= useState("John");
    const [bgColor, setBgColor]= useState("grey");
    const handleChange=() =>{
        // setUsername(username === "John" ? "Mike": "John");
        setBgColor(bgColor ==="grey"? "white" : "grey");};
    
    return (
        <div style={{backgroundColor: bgColor, padding:200}}>
            <h1>Change bg color</h1>
            {/* <h3>{username}</h3> */}
            <button onClick={handleChange}>Change BG color</button>
        </div>
    )
}
export default ChangeMode;