import { Box, Container } from '@mui/material'
import { cardImg } from '../../assets'
import BoxText from '../shared/BoxText'
import { CustomBox, CustomSubHeading, CustomTitle } from '../styles'
const CardDeal = () => {
    return (
        <>
            <Box sx={{ py: 5 }}>
                <Container>
                    <CustomBox alignItems='center'>
                        <BoxText
                            title="Find a better card deal in few easy steps."
                            subHeading="Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau."
                            buttonText="Learn More"></BoxText>

                        <Box sx={{ flex: "1" }}>
                            <img src={cardImg} width="100%" height="100%"></img>
                        </Box>
                    </CustomBox>
                </Container>
            </Box>
        </>
    )
}

export default CardDeal