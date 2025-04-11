import { ProductList } from "./components/List";

const products = [
  { id: 1, name: "Laptop", price: "$999" },
  { id: 2, name: "Headphones", price: "$199" },
  { id: 3, name: "Smartphone", price: "$799" },
  { id: 4, name: "Monitor", price: "$299" }
];

export function App() {
  return (
    <ProductList ProductList={products}/>
  )
}

export default App;