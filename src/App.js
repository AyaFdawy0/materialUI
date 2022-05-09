import logo from "./logo.svg";
import "./App.css";
import { Container, Typography, Box, Stack, Grid, Button } from "@mui/material";
import Appbar from "./components/appbar";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import Banner from "./components/banner";
import Products from "./components/products";
import { UIProvider } from "./context/ui";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import Promotions from "./components/promotions";
import SearchBox from "./components/search";
import { useEffect } from "react";
import Carousel from "./components/crausal";
import Banner2 from "./components/banner2";
import Banner3 from "./components/banner3";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="xxl"
        sx={{
          background: "#fff",
        }}
      >
        <Stack>
          <UIProvider>
            <Appbar />
            <Banner />
            <Banner3/>
            {/* <Carousel/>
            <Promotions /> */}
            <SearchBox />
            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">New Arrivals</Typography>
            </Box>
            <Products />
            <Banner2 />
            <Footer />
            <AppDrawer />
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
