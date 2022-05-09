import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerInfoButton,
  BannerButtons,
  BannerTitle,
} from "../../styles/banner";
import { Colors } from "../../styles/theme";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      
      <BannerContent>
        <Typography variant="h6" sx={{marginBottom: "20px", color:Colors.info}}>Great Design Collection</Typography>
        <BannerTitle variant="h2">
        Cloth Covered Accent Chair
        </BannerTitle>

        <BannerDescription variant="subtitle">
        Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip.
        <p>
															$ 399.00
															<del>$ 499.00</del>
														</p>
        </BannerDescription>
   <BannerButtons>
     <BannerShopButton >Add To Cart</BannerShopButton>
        <BannerInfoButton >More Info</BannerInfoButton>
        </BannerButtons>
        
      </BannerContent>
      <BannerImage src="/images/slider/slider3.png"/>
    </BannerContainer>
  );
}
