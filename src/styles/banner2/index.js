import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const BannerContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  height: "100%",
  padding: "20px",
  background: Colors.light_gray,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  // backgroundImage: `url(/images/banner/banner.png)`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
}));

export const BannerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 750,
  padding: "30px 30px",
  height:470,
 position:'absolute',
 backgroundColor:Colors.info,
 opacity:.6
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  // src: `url(${src})`,
  backgroundImage: `url(${src})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "320px",
    height: "300px",
  },
}));

export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
  lineHeight: 1,
  fontSize: "60px",
  marginBottom: "20px",
  color:Colors.white,
  width:1000,
  [theme.breakpoints.down('sm')]: {
    fontSize: '42px',    
  }
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  letterSpacing: 1.25,
  fontSize: "20px",
  wordSpacing:6,
  marginBottom: "20px",
  color:Colors.white,
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));


export const BannerButtons= styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  
  maxWidth: 550,
  padding: "0px 00px",
  gap:2
}));
export const BannerShopButton = styled(Button)(({ theme }) => ({
  padding: "20px 0px",
  color:Colors.white,
  "&:hover": {
    color:Colors.secondary,
    backgroundColor:Colors.light_gray,
    variant:"outlined",

  },
  backgroundColor:Colors.secondary,
  fontSize: "16px",
  width:200,
  [theme.breakpoints.down("sm")]: {
    padding: "10px 0px",
    fontSize: "14px",
  },
}));
export const BannerInfoButton = styled(Button)(({ theme }) => ({
  padding: "20px 0px",
  color:Colors.secondary,
  // variant:"outlined",
  "&:hover": {
    variant:"outlined",

  },
  
  fontSize: "16px",
  width:200,
  [theme.breakpoints.down("sm")]: {
    padding: "10px 0px",
    fontSize: "14px",
  },
}));
