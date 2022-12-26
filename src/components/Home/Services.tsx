import { Box, Container } from '@mui/material'
import React from 'react'
import { BoxService, CustomButton, CustomSubHeading, CustomTitle } from '../styles'

const Services = () => {
    return (
        <>
            <Box sx={{ py: 5 }}>
                <Container>
                    <BoxService alignItems="center">

                        <Box sx={{ flex: 1 ,py: "30px" }}>
                            <CustomTitle>Let’s try our service now!</CustomTitle>
                            <CustomSubHeading paddingY="20px">Everything you need to accept card payments and grow your business anywhere on the planet.</CustomSubHeading>
                        </Box>
                        <Box >
                            <CustomButton variant="contained" size="large">Get Started</CustomButton>

                        </Box>
                    </BoxService>
                </Container>

            </Box>
        </>
    )
}

export default Services