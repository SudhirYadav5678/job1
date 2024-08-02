import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { Outlet } from 'react-router'

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout