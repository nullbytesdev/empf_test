import { Box, Container, styled, Typography } from '@mui/material'
import { heroImg } from '../../assets'
import { HeroInfo } from '../../data/data'
import { CustomBox, SmallTitle, SubP, Title } from '../styles'

const Hero = () => {
    return (
        <>
            <div id="home">
                <Box sx={{ minHeight: "100vh" }}>
                    <Container>
                        {
                            HeroInfo.map((hero, i) => (
                                <CustomBox key={i} alignItems='center'>
                                    <Box sx={{ flex: "1" }}>
                                        <SmallTitle>{hero.heading1}</SmallTitle>
                                        <Title variant="h1">
                                            {hero.heading2}
                                        </Title>
                                        <SubP>
                                            {hero.subheading}
                                        </SubP>
                                    </Box>
                                    <Box sx={{ flex: "1" }}>
                                        <img
                                            src={heroImg}
                                            alt="heroImg"
                                            style={{ maxWidth: "100%", marginBottom: "2rem" }}
                                        />
                                    </Box>
                                </CustomBox>
                            ))
                        }
                    </Container>
                </Box>
            </div>

        </>
    )
}
export default Hero