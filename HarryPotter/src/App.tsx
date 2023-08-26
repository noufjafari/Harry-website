import { Routes, Route } from "react-router-dom"
import Intro from './pages/intro'
import Login from './pages/Login'
import Home from './pages/home'
import Movie from './pages/movie'
import Signup from './pages/signup'
import Cast from './pages/about'
import BookDetail from "./pages/bookDe";


import './App.css'

function App() {

  
  return (
    <>
    <Routes>
    <Route path="/" element={<Intro/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/movie" element={<Movie/>}></Route>
    <Route path="/about" element={<Cast/>}></Route>

    <Route path="/book" element={<BookDetail/>} />
    <Route path="/book/:id" element={<BookDetail/>} />
    
    </Routes>

    </>
  )
}

export default App
  