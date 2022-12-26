import { Box, Container } from '@mui/material'
import { billImg } from '../../assets'
import BoxText from '../shared/BoxText'
import { CustomBox, CustomSubHeading, CustomTitle } from '../styles'

const Billing = () => {
    return (
        <>
            <div id="billing">
                <Box sx={{ py: 5 }}>
                    <Container>
                        <CustomBox alignItems='center'>
                            <Box sx={{ flex: "1" }}>
                                <img src={billImg} width="100%" height="100%"></img>
                            </Box>
                            <BoxText
                                title="Easily control your billing & invoicing."
                                subHeading="Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat."
                                buttonText="Learn More"></BoxText>
                        </CustomBox>
                    </Container>
                </Box>
            </div>

        </>
    )
}

export default Billing