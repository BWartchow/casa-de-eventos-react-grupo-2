import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Login/login'
import Homepage from './pages/Homepage/homepage'
import Contact from './pages/Contact/contact'

import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
