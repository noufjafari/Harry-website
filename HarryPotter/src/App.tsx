import { Routes, Route } from "react-router-dom"
import Intro from './pages/intro'
import Login from './pages/Login'
import Home from './pages/home'

import './App.css'

function App() {

  return (
    <>
    <div className="all">
    <Routes>
    <Route path="/" element={<Intro/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/home" element={<Home/>}></Route>

    </Routes>
    
{/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
</div>
    </>
  )
}

export default App
    {/* <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/intro" element={<Intro/>}></Route>

    <Route path="/book" element={<BookDetail/>} />
    <Route path="/book/:id" element={<BookDetail/>} />
  
      </Routes>  */}


        // const [count, setCount] = useState(0)

            {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}