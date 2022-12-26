import { Box } from '@mui/material'
import React from 'react'
import { Billing, CardDeal, Clients, Hero, Partners, Services, Solution } from '../components'

const Home = () => {
    return (
        <>
            <Box sx={{ backgroundColor: "#00040F" }}>
                <Hero />
                <Clients />
                <Solution />
                <Billing />
                <CardDeal />
                <Partners/>
                <Services />
            </Box>

        </>
    )
}

export default Home