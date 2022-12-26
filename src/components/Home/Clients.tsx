
import { Box, Container, Grid, styled, Typography } from '@mui/material'
import { ClientInfo } from '../../data/data';
import { CustomGridItem, CustomSubT, CustomTitle } from '../styles';

const Clients = () => {
    return (
        <>
            <Box>
                <Container>
                    <Grid container spacing={2}>
                        {
                            ClientInfo.map((client, i) => (
                                <CustomGridItem key={i} item xs={12} md={4} alignItems="center">
                                    <CustomTitle>{client.total}</CustomTitle>
                                    <CustomSubT>{client.details}</CustomSubT>
                                </CustomGridItem>
                            ))
                        }
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Clients