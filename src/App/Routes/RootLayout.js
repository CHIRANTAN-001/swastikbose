import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Layout/Navbar'

function RootLayout() {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default RootLayout