import React from 'react'
import Signup from './SignUp'
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>

    <BrowserRouter>
    <Routes>
    <Route path="/register" element={<Signup />}></Route>
    <Route path="/login" element={<Login />}></Route>
</Routes>
    
    </BrowserRouter>

    </>
  )
}

export default App
