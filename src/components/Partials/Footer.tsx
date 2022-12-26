import { Box, Container, Grid, Link, List, ListItem, ListItemText, Typography } from '@mui/material'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { logoImg } from '../../assets'
import { footerLinks } from '../../data/data'

const Footer = () => {
    return (
        <>
            <Box sx={{ py: 10, background: "#000000" }}>
                <Container>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <img src={logoImg}></img>
                            <Typography variant='body1' sx={{ color: "#FFFFFF", py: 5 }}>A new way to make the payments easy, reliable and secure.</Typography>
                        </Grid>
                        {
                            footerLinks.map((footer, i) => (
                                <Grid key={i} item xs={6} md={3} sx={{ color: "#FFFFFF" }}>
                                    <Typography variant='h6' sx={{ fontWeight: 500 }}>{footer.title}</Typography>
                                    <List>
                                        {
                                            footer.links.map((links) => (
                                                <ListItem key={links.name} sx={{ px: "0" }}>
                                                    <AnchorLink key={links.name} href={`#${links.link}`} className="all_unset" >
                                                        <ListItemText sx={{ color: "#FFFFFF", cursor: "pointer" }}>{links.name}</ListItemText>
                                                    </AnchorLink>
                                                </ListItem>
                                            ))
                                        }
                                    </List>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Footer