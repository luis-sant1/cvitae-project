import MainMenu from './components/MainMenu';
import CVitae from './components/CVitae';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import cvs from "./assets/data";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainMenu data = {cvs}/>}/>
      <Route path="/CVitae/:id" element={<CVitae data = {cvs}/>}/>
    </Routes>
  )
}

export default App
