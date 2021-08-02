import {React,useState} from 'react';
import './App.css';
import lady from './img/lady.png';

function App() {

  const [display,setDisplay] = useState('');

  const number = (num) => {
    setDisplay(display + num.toString())
  }

  const clear = () => {
    setDisplay('')
  }

  const multiply = () => {
    setDisplay(display + '*')
  }

  const divide = () => {
    setDisplay(display + '/')
  }

  const minus = () => {
    setDisplay(display + '-')
  }

  const plus = () => {
    setDisplay(display + '+')
  }

  const equal = () => {
    try{
      setDisplay(Math.round(eval(display) * 10**10) / 10**10)
      
    }
    catch{
      alert('Error: Enter a valid equation')
    }
  }
  
  return (
    <>
    <div className='title'>A Calculator</div>

    <div className='withwoman'>
    <div className="App">
      
      <div className='screen'>{display}</div>

      <div className='row1'>
        <button className='clearbutton' onClick={clear}>Clear</button>
        <button className='flexbutton' onClick={multiply}>x</button>
        <button className='flexbutton' onClick={divide}>÷</button>
      </div>

      <div className='row2'>
        <button className='flexbutton' onClick={()=>number(7)}>7</button>
        <button className='flexbutton' onClick={()=>number(8)}>8</button>
        <button className='flexbutton' onClick={()=>number(9)}>9</button>
        <button className='flexbutton minusbutton' onClick={minus}>-</button>
      </div>

    <div className='row3'>
      <button className='flexbutton' onClick={()=>number(4)}>4</button>
      <button className='flexbutton' onClick={()=>number(5)}>5</button>
      <button className='flexbutton' onClick={()=>number(6)}>6</button>
      <button className='flexbutton' onClick={plus}>+</button>
    </div>

      
    <div className='row4'>
      <button className='flexbutton' onClick={()=>number(1)}>1</button>
      <button className='flexbutton' onClick={()=>number(2)}>2</button>
      <button className='flexbutton' onClick={()=>number(3)}>3</button>
      <button className='flexbutton' onClick={equal}>=</button>
    </div>

    </div>

    <div className='woman' style={{ whiteSpace: 'pre' }}>
      {display===29126 && <img src={lady} alt='lady'/>}
    </div>    
    </div>
    
    </>
  );
}

export default App;

