export function DoubleClickCard({title="Click Twice", onDoubleClickHandler}) {
  const style = {
    color: "Black"
  }
  return (
    <div style={style} onDoubleClick={() => onDoubleClickHandler(title)}>
      {title}
    </div>
  )
}

export function App() {
  return (
    <DoubleClickCard
    title="Click this twice"
    onDoubleClickHandler = {(msg) => console.log(`Please, ${msg}`)}/>
  )
}

export default App;