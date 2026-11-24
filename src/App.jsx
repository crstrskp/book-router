import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import './App.css'
import Home from './pages/Home'
import Books from './pages/Books'
import About from './pages/About'
import BookDetails from "./components/BookDetails";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} /> 
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/about" element={<About />} />
        </Route> 
      
      </Routes>

    </BrowserRouter>
  )
}

export default App
