import { Box } from '@mui/material'
import React from 'react'
import Home from '../../pages/Home'
import Footer from '../Partials/Footer'
import Header from '../Partials/Header'

const MainLayout = () => {
    return (
        <>
            <Box height="100vh">
                <Header />
                <main>
                    <Home />
                </main>
                <Footer />
            </Box>

        </>
    )
}

export default MainLayout