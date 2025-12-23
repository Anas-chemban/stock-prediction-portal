import { useState } from 'react'
import './assets/css/style.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Login from './components/Login.jsx'
import Footer from './components/Footer.jsx'
import Register from './components/register.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes >
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login'  element={<Login />}/>
      </Routes>
    <Footer />
    </BrowserRouter>
    {/* <Main />     */}

      
    </>
  )
}

export default App
