import {useState} from 'react'
import {BrowserRouter, Routes, Route, Outlet, Navigate, Link} from 'react-router-dom'

//React Components
import Layout from './Layout/Layout'; import Auth from './Auth/Auth'
import Home from './Pages/Home/Home' 
import Account from './Pages/Account/Account'
import Error404 from './Pages/404/Error404'
import Search from './Pages/Search/Search'
import ItemPage from './Pages/ItemPage/ItemPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          {/* Unprotected Routes */}
          <Route index element={<Home/>}/>
          <Route path="search/:search_query" element={<Search/>}/>
          <Route path="item/:id" element={<ItemPage/>}/>
          
          {/* Protected Routes */}
          <Route element={<Auth/>}>
            <Route path="account" element={<Account/>}/>
          </Route>

          {/* 404 Page */}
          <Route path="*" element={<Error404/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
