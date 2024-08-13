import React from 'react';
import {useState} from 'react';
import './Todo.css';
function Todo(){
    const [value, setValue] = useState("");
    const [todo, setTodo]= useState([]);
    const addTask=()=>{
        setTodo([...todo, value]);
        setValue("");
    };
    const deleteTask=(index)=>{
        setTodo(todo.filter((_, i)=> i !== index));
    }
    return(
        <div className='outerdiv'>
            <div className='input'>
            <h1>TO DO</h1>
            
            <input type='text' placeholder='enter list item' 
                value={value} 
                onChange={(e)=>setValue(e.target.value)}
                id='ip' >
                </input>
            <br></br><br></br>
            <button id='b1' onClick={addTask}>ADD</button>
            </div>
            <div className='output'>
                <ul>
                    {todo.map((item,index)=> (<li key={index}>{item}
                    <button onClick={()=> deleteTask(index)} id='b1'>Delete</button>
                    </li>))}
                    
                </ul>
            </div>
        </div>
        
    )
    
}

export default Todo;