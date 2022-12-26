import { Box, Container, Grid } from '@mui/material'
import { binance, coinbase, dropbox, airbnb } from '../../assets'
import { PartnerImg } from '../../data/data'
import { CustomBox } from '../styles'

const Partners = () => {
    return (
        <>
            <Box sx={{ py: 5 }}>
                <Container>
                    <CustomBox alignItems='center' justifyContent="center">
                        {
                            PartnerImg.map((partner, i) => (
                                <Box key={i} sx={{ flex: "1" }}>
                                    <img src={partner.image} width="150px"></img>
                                </Box>
                            ))
                        }

                    </CustomBox>
                </Container>
            </Box>
        </>
    )
}

export default Partners