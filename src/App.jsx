const animals = [
  { id: 1, name: 'Lion' },
  { id: 2, name: 'Leopard' },
  { id: 3, name: 'Tiger' },
  { id: 4, name: 'Elephant' },
  { id: 5, name: 'Giraffe' },
  { id: 6, name: 'Lemur' },
  { id: 7, name: 'Zebra' },
  { id: 8, name: 'Llama' },
  { id: 9, name: 'Panther' },
  { id: 10, name: 'Cheetah' },
];

export function Animal(props) {
  
  if (props.animal.name.startsWith("L")) {
    return <h1>{props.animal.name}</h1>
  }
  return <h1>{props.animal.name} Does not start with L</h1>
}

export function Animals(props) {
  return (
  <div>
    {props.animals.map((animal) =>  ( 
    <Animal key={animal.id} animal={animal}/>
    ))}
    </div>
  );
}

export function App () {
  return (
    <Animals animals={animals}/>
  )
}

export default App;