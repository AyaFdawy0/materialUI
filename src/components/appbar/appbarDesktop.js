import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Colors } from "../../styles/theme";
import {
  AppbarActionIcons,
  AppbarContainer,
  AppbarHeader,
  AppbarHeader2,
  MyList,
} from "../../styles/appbar";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Actions from "./actions";


export default function AppbarDesktop({ matches }) {
  


  return (
    <AppbarContainer>
      <AppbarHeader variant="h4">Sine
      <span variant="h4" sx={{color:Colors.secondary}}>Mkt.
</span>
</AppbarHeader>

      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="New Arrival" />
        <ListItemText primary="Features" />
        <ListItemText primary="Blog" />
        <ListItemText primary="Contact" />
       
          </MyList>
       <Actions matches={matches} />   
    </AppbarContainer>
  );
}
