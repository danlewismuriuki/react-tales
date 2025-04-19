import React, {useState} from "react";

export function Counter() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("")

  function Increment () {
    setCount(count + 1)
    setMessage("")
  }

  function Decrement () {
    if (count > 0) {
      setCount(count - 1 )
      setMessage("")
    }
  }

  function Reset () {
    if (count == 0) {
      setMessage("count is already at 0!")
    }
    setCount(0)
    setMessage("Count has been reset")
  }

  return (
  <div>
    <p>Count: {count}</p>
    <button onClick={Increment}>Increase</button>
    <button onClick={Decrement}>Decrease</button>
    <button onClick={Reset}>Reset</button>
    {message && <p style={{color: "red"}}>{message}</p>}
  </div>
  )
}

export default Counter;