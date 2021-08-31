import React, { useState } from "react";
import './App.css'

const App=()=> {

  const [result,setResult]=useState('')
  const handler =(event)=>{
    
    setResult(result.concat(event.target.value))
    
  }

  const clear=()=>{
    setResult("")
  }
  const backspace=()=>{
setResult(result.slice(0,result.length-1))
  }

  const calculate=()=>{
    setResult(eval(result).toString())
  }
  return (
    <>
    <div className="container">
      <form><input type="text" value={result} /></form>
      
      
      <div className="keypad">
         <button onClick={clear} className="clear">clear</button>
      <button onClick={backspace} >c</button>
      <button onClick={handler} value="/">&divide;</button>
      <button onClick={handler} value="7">7</button>
      <button onClick={handler} value="8">8</button>
      <button onClick={handler} value="9">9</button>
      <button onClick={handler} value="*">&times;</button>
      <button onClick={handler} value="4">4</button>
      <button onClick={handler} value="5">5</button>
      <button onClick={handler} value="6">6</button>
      <button onClick={handler} value="-">-</button>
      <button onClick={handler} value="1">1</button>
      <button onClick={handler} value="2">2</button>
      <button onClick={handler} value="3">3</button>
      <button onClick={handler} value="+">+</button>
      <button onClick={handler} value="0">0</button>
      <button onClick={handler} value=".">.</button>
      <button onClick={calculate} className="equal">=</button>
      </div>
     
    
      </div>

      </>
  );
}

export default App;
