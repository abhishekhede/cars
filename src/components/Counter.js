import './counter.css';
import { useState } from "react";


const Counter = () =>{
    const [count, setCount] = useState(0);

    return(
        <div className="counter-container">  
            <span>Counter : {count}</span>
            <button className="btn btn-inc"
             onClick={()=>{
                setCount(count+1);
            }} >Increment</button>
            <button className="btn btn-dec"
             onClick={()=>{
                if(count>=1){
                    setCount(count-1);
                }
            }} >Decrement</button>
        </div>
    )
};

// import React from 'react';
// import './counter.css'

// class Counter extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
//     }   
//     increment = () => {
//         const {count} = this.state;
//         this.setState({ count: count + 1 });
//     }
//     decrement = () => {
//         this.setState(prevState => ({
//             count: Math.max(0, prevState.count - 1)
//         }));
//     }
    
//     render() {
//         const {count} = this.state;
//         return (
//             <div className="counter-container">
//                 <h1>Counter: {count}</h1>
//                 <button className='btn btn-inc' onClick={this.increment}>Increment</button>
//                 <button className='btn btn-dec' onClick={this.decrement}>Decrement</button>
//             </div>
//         );
//     }
// }
export default Counter
