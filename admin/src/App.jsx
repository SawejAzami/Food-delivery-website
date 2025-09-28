import { useState } from 'react'
import Navbar from './component/Navbar/Navbar.jsx'
import { Routes, Route } from "react-router-dom";
import Sidebar from './component/sidebar/Sidebar.jsx'
import Add from './pages/Add/Add.jsx';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';

  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

function App() {
  

  return (
    <>
    <ToastContainer/>
      <Navbar/>
      <hr />
      <div className='flex '>
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add/>} />
          <Route path="/list" element={<List/>} />
          <Route path="/orders" element={<Orders/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
