import {React, useState} from 'react'
import {BrowserRouter, Routes, Route, Outlet, Navigate, Link} from 'react-router-dom'

//React Components
import Layout from './Layout/Layout'; import Auth from './Auth/Auth'
import Home from './Pages/Home/Home' 
import Add_post from './Pages/Create_post/Add_post'
import Error404 from './Pages/404/Error404'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          {/* Unprotected Routes */}
          <Route index element={<Home/>}/>
          
          {/* Protected Routes */}
          <Route element={<Auth/>}>
            <Route path="add_post" element={<Add_post/>}/>
          </Route>

          {/* 404 Page */}
          <Route path="*" element={<Error404/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
