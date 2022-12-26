import { Box } from '@mui/material'
import { BoxProps } from '@mui/system'
import { CustomButton, CustomSubHeading, CustomTitle } from '../styles'

type BoxTextProps = {
    title: string,
    subHeading: string,
    buttonText: string,
}
const BoxText = (props: BoxTextProps) => {
    return (
        <>
            <Box sx={{ flex: "1" }}>
                <CustomTitle>{props.title}</CustomTitle>
                <CustomSubHeading paddingY="20px">{props.subHeading}</CustomSubHeading>
                <CustomButton variant="contained" size="large">{props.buttonText}</CustomButton>
            </Box>
        </>
    )
}

export default BoxText