import { MoviesList } from "./components/List";


const movies = [
  { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "The Matrix", year: 1999 },
  { id: 3, title: "Interstellar", year: 2014 }
];

export function App() {
  return (
    <>
    <MoviesList MovieList = {movies}/>
    </>
  )
}


export default App;