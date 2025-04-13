export function HoverCard({label="This is my label", onHoverHandler}) {
  const style = {
    color: "blue"
}

return (
    <div style={style} onMouseEnter={() => onHoverHandler(label)}>
    {label}
    </div>
  )
}

export function App() {
  return (
    <HoverCard
    label="This HoverCard is Simple"
    onHoverHandler={(msg) => console.log(`Hovered On: ${msg}`)}
    />
  )
}

export default App;