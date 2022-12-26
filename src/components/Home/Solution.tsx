import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { SolutionsCard } from '../../data/data'
import BoxText from '../shared/BoxText'
import { BoxHorizontal, CustomBox, CustomButton, CustomSubHeading, CustomTitle } from '../styles'

const Solution = () => {

    return (
        <>
            <div id="features">
                <Box sx={{ py: 5 }}>
                    <Container>
                        <CustomBox alignItems='center'>
                            <BoxText 
                                title="You do the business, we’ll handle the money."
                                subHeading="Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau."
                                buttonText="Get Started"></BoxText>
                            <Box sx={{ flex: "1" }}>
                                {
                                    SolutionsCard.map((card, i) => (
                                        <BoxHorizontal key={i}>
                                            <Box><img src={card.icon}></img></Box>
                                            <Box><Typography variant='h6' width="100%" sx={{ fontWeight: 900 }}>{card.title}</Typography>
                                                <Typography variant='body1' width="100%">{card.subHeading}</Typography></Box>
                                        </BoxHorizontal>
                                    ))
                                }
                            </Box>
                        </CustomBox>
                    </Container>
                </Box>
            </div>



        </>
    )
}

export default Solution