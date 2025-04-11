import { BookList } from "./components/List";
import './App.css'

const books = [
  { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "The Catcher in the Rye", author: "J.D. Salinger" }
];

export function App (){
  return (
    <>
    <h1>books</h1>
    <BookList bookLists={books}/>
    </>
  )
}

export default App;