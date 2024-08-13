import {useState} from "react";
// import './component/Change.css';
import '/Users/meghanair/development/react/colorbuttons/src/component/Change.css';
function ChangeMode(){

    const [bgColor, setBgColor]= useState("grey");
    const colorChange=() =>{
        const randColor= `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
        setBgColor(randColor);};
    
    return (
        <div style={{backgroundColor: bgColor, padding:200}}>
            <h1>Change bg color</h1>
            <button onClick={colorChange} className="change">Change BG color</button>
        </div>
    )
}
export default ChangeMode;