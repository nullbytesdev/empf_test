import { Typography, styled, Box, Grid, Button } from "@mui/material";

//Global Styles
const CustomTitle = styled(Typography)(({ theme }) => ({
    fontSize: "40px",
    color: "#FFFFFF",
    fontWeight: "900",
    [theme.breakpoints.down("sm")]: {
        fontSize: "25px",
        textAlign: "center",
    },
}));

const CustomSubHeading = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: "#FFFFFF",
    fontWeight: "400",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        fontSize: "15px",
    },
}));

const CustomButton = styled(Button)(({ theme }) => ({
    background: "#33BBCF",
    fontWeight: 300,
    color: "#000000",
    '&:hover': {
        background: "#33BBCF",
        color: "#FFFFFF",
    },
    [theme.breakpoints.down("sm")]: {
        width: "100%",
    },

}));

// Hero Styles
const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        paddingBottom: theme.spacing(5),
    },
}));

const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#FFFFFF",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
        fontSize: "30px",
    },
}));

const SmallTitle = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: "#FFFFFF",
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
    }
}));

const SubP = styled(Typography)(({ theme }) => ({
    fontSize: "15px",
    color: "#FFFFFF",
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
    }
}));

// Client Styles
const CustomGridItem = styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        gap: theme.spacing(0),
        alignItems: "center",
        textAlign: "center",
    },
}));

const CustomSubT = styled(Typography)(({ theme }) => ({
    fontSize: "20px",
    color: "#33BBCF",
    fontWeight: "400",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
    },
}));

//Solution Styles
const BoxHorizontal = styled(Box)(({ theme }) => ({
    display: "flex",
    color: "#FFFFFF",
    gap: theme.spacing(2),
    '&:hover': {
        background: "#14101D",
        borderRadius: "20px",
    },
    padding: "25px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",

    },
}));

const BoxService = styled(Box)(({ theme }) => ({
    display: "flex",
    color: "#FFFFFF",
    gap: theme.spacing(2),
    background: "#14101D",
    borderRadius: "20px",
    padding : "50px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",

    },
}));



export {
    CustomSubHeading,
    CustomButton,
    //Hero
    CustomBox,
    SmallTitle,
    Title,
    SubP,
    //Client
    CustomGridItem,
    CustomTitle,
    CustomSubT,
    //Solutions
    BoxHorizontal,
    //Service
    BoxService,

}
