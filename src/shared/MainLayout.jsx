import React from 'react'
import Navbar from '../layout/navbar/Navbar'
import Footer from '../layout/footer/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout({children}) {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default MainLayout