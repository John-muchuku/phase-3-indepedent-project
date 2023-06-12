import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Display() {
  return (
    <div>
    <Navbar/>
    <div style={{"min-height":'80vh'}}>
    <Outlet/>
    </div>
    <Footer/>

    </div>
  )
}

export default Display