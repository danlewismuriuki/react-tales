export function FocusInputCard({placeholder="Focus on me!", onfocusHandler}) {

  const style = {
    color: "black"
}

  return (
  <input style={style} onFocus={() => onfocusHandler(placeholder)}/>
  )
}


export function App() {
  return (
    <FocusInputCard
    placeholder="Focus Again"
    onfocusHandler={(msg) => console.log(`You should, ${msg}`)}
    />
  )
}

export default App;