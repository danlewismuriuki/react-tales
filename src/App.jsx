import React, {useState} from "react";

export function NameDisplay () {
  const [text, setText] = useState("")

  function handleInput(e) {
    setText(e.target.value)
  }

  function clearInput() {
    setText("")
  }


return (
  <div>
    <input
     type="text"
     value={text}
     onChange={handleInput}
    />
    <p>Typed text: {text}</p>
    <button onClick={clearInput}>del text</button>
  </div>
)
}

export default NameDisplay;