import React from "react"
import { Routes, Route } from "react-router-dom"

import Login from "./components/Login"
import Signup from "./components/Signup"
import Navbar from "./components/Navbar"
import Layout from "./components/Layout"
import AuthLayout from "./components/AuthLayout"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
