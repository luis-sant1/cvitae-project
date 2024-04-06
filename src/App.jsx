import { useState} from 'react';
import MainMenu from './components/MainMenu';
import CVitae from './components/CVitae';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import cvs from "./assets/data";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<MainMenu />}/>
      <Route path="/CVitae/:name" element={<CVitae data = {cvs} />}/>
    </Routes>
  )
}

export default App
