import About from "./pages/About"
import Home from "./pages/Home"
import Layout from "./component/Layout";
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {

  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
  )
}

export default App
