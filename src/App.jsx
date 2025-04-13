export function Card(props) {
    const style = {
      color: props.bColor,
      fontSize: props.fontSize,
      border: "1px solid #ccc",
      padding: '10px',
      marginBottom: '10px'
    };

    return (
      <div style = {style}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    )
}

export function App () {
  return(
    <>
    <Card
    title = "Yellow Card"
    description = "This is a yellow card"
    bColor = {'Yellow'}
    fontSize = {16}
    />
    <Card
    title = "Green Card"
    description = "This is a Green card"
    bColor = {'green'}
    fontSize = {14}
    />
    <Card
    title = "Black Card"
    description = "This is a Black card"
    bColor = {'black'}
    fontSize = {18}
    />
    </>
  )
}

export default App;