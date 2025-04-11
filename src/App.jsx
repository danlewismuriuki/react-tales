function List(props) {

  if (props.animals.length === 0) {
    return <div>No Animals</div>
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function App() {
  // const animals = ["Lion", "Cow", "Snake", "Lizard"];

  const animals = [];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}

export default App;