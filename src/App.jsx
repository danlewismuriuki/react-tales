export function GreetingButton({text="Greet Me", color="red", fontSize=16, handleClick}) {
  const style = {
    color: color,
    fontSize: fontSize + "px",
    cursor: "pointer"
  }

  const handleButtonClick = () => {
    handleClick(`Hello from ${text}!`)
  }
  
  return(
  <button onClick={handleButtonClick} style={style}>
    {text}
  </button>
  );
}

export function App() {
  return (
    <>
    <GreetingButton handleClick={(msg) => alert(msg)} />
    <GreetingButton text="Say Hello" handleClick={(msg) => console.log(msg)} />
    <GreetingButton fontSize={20} color="green" handleClick={(msg) => alert(msg)} />   
    </>
  )
}

export default App;