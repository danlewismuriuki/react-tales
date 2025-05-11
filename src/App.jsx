import React from 'react';
import './App.css';

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

function addCounter() {
  setCount(function(prev) {return prev + 1})
}

function decCounter() {
  setCount(function(prev) {return prev - 1})
}

  return(
    <>
    <h1>{count}</h1>
    <button onClick={addCounter}>Add</button>
    <button onClick={decCounter}>Sub</button>
    </>
  )
}

export default App;