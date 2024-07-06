import React from 'react'
import {Route, Routes} from 'react-router'
import Landing from './pages/Landing/Landing'
import ToDoList from './pages/ToDo/ToDoList'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/to-do-list" element={<ToDoList/>}/>
    </Routes>
  )
}

export default App