import React, {useState} from 'react';

export function Toggle() {
  const [toggle, setToggle]=useState(true)
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <p>The switch is {toggle ? 'ON': 'OFF'}</p>
      <button onClick={handleToggle}>
        Toggle
      </button>
    </div>
  )
}

export default Toggle;