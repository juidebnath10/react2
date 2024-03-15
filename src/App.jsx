import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import User from './User';
import Friends from './Friends';

function App() {

  function handleClick() {
    alert('button clicked');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h1>React concept2</h1>

      <Friends></Friends>
      <User></User>
      <Counter></Counter>
      <Team></Team>



      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => { alert('button 2 clicked') }}>Click 2</button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
