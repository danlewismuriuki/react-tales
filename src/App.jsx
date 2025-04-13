export function ActionCard ({message="Defaul Messsage", actionHandler}) {
  const style = {
    backgroundColor: "lightblue"
  }

  return (
    <div style = {style} onClick={() => actionHandler(message)}> 
    {message}
    </div>
  )
}

export function App() {
  return (
    <>
    <ActionCard message="This is an action messsage" actionHandler={(msg) => console.log(`The card says: ${msg}`)}/>
    </>
  )
}
export default App;