// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from './screens/Landing';
import { Game } from './screens/Game';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="h-screen bg-slate-800">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
