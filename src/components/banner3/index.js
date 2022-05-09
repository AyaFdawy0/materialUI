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
} from "../../styles/banner3";
import { Colors } from "../../styles/theme";

export default function Banner3() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
       {/* <BannerImage src="/images/populer-products/p1.png"/>
       <BannerImage src="/images/populer-products/p2.png"/>
       <BannerImage src="/images/populer-products/p3.png"/> */}
      <BannerContent>
      <BannerImage src="/images/populer-products/p1.png"/>
        <BannerTitle variant="h2">
      Arm Chair
        </BannerTitle>

        <BannerDescription variant="subtitle">
        Labore Et Dolore Magna Aliqua.
        </BannerDescription>
       
      </BannerContent>
      <BannerContent>
      <BannerImage src="/images/populer-products/p2.png"/>
        <BannerTitle variant="h2">
       Chair
        </BannerTitle>

        <BannerDescription variant="subtitle">
        Labore Et Dolore Magna Aliqua. 
        </BannerDescription>
       
      </BannerContent>
      <BannerContent>
      <BannerImage src="/images/populer-products/p3.png"/>
        <BannerTitle variant="h2">
        Hanging Lamp
        </BannerTitle>

        <BannerDescription variant="subtitle">
        Labore Et Dolore Magna Aliqua. 
        </BannerDescription>
       
      </BannerContent>
     
    </BannerContainer>
  
  );
}
