export function ClickCard({
  color="Red",
  text="Surprised again",
  onClickAction = () => console.log("Default click handler")
}) {
  const style = {
    color: color
  }

  return (
    <div style={style} onClick={() => onClickAction(text)}>
      <h1>{text}</h1>
    </div>
  )
}


export function App() {
  return (
    <>
    <ClickCard text="Surprise!" color="purple" onClickAction = {(t) => console.log(`You clicked: ${t}`)}/>
    <ClickCard onClickAction = {(t) => console.log(`You clicked: ${t}`)}/>
    <ClickCard text="Surprise!" color="purple"/>
    </>
  )
}

export default App;