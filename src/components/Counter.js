import './counter.css';
import { useState } from "react";


const Counter = () =>{
    const [count, setCount] = useState(0);

    return(
        <div className="counter-container">  
            <span>Counter : {count}</span>
            <button className="btn btn-increment"
             onClick={()=>{
                setCount(count+1);
            }} >Increment</button>
            <button className="btn btn-decrement"
             onClick={()=>{
                if(count>=1){
                    setCount(count-1);
                }
            }} >Decrement</button>
        </div>
    )
};

export default Counter
