import { IconButton, List, Typography } from "@mui/material";
import {styled} from "@mui/material/styles";
import { Box } from "@mui/system";
import "@fontsource/montez";
import { Colors, DrawerWidth } from "../theme";
import { textPopUpTop } from "../../animation";

export const AppbarContainer = styled(Box)(() => ({    
    display: 'flex',
    // marginTop: 4,
    position:'static',
    justifyContent: 'center',
  alignItems: 'center',
    padding: '2px 8px',
    
    backgroundColor:Colors.light_gray,
    
   
}));

export const AppbarHeader = styled(Typography)(() => ({
  padding: "20px",
  flexGrow: 1,
  fontSize: "2em",
  marginLeft:160,
  color: Colors.dim_grey,
  "&:hover": {
    color:Colors.secondary
  },
 
}));
// export const AppbarHeader2 = styled(Typography)(() => ({
 
  
//   fontSize: "2em",
//   marginLeft:10,
//   color: Colors.secondary,
//   "&:hover": {
//     color:Colors.secondary
//   },
 
// }));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: 'flex',
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: '100%',
  alignItems: 'center',
  zIndex: 99,  
  borderTop: `1px solid ${Colors.border}`
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
  "&:hover": {
    color:Colors.secondary
  },
}));

export const MyList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
  fontSize:"3em",
  "&:hover": {
    color:Colors.secondary
  },
 
}));



export const DrawerCloseButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: 10,
  left: DrawerWidth,
  zIndex: 1999,      
}));