import { Box, Container } from "@mui/material";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";


export default function Error(){
    return(
        <>
           <NavBar />
           <Container maxWidth="80%" sx={{marginTop:"18vh"}}>
                <Box display={"flex"} justifyContent={"center"} sx={{ bgcolor:"ebe5bc"}}>
                    <img src={'./src/img/error.png'} alt='errorMessage' width={"500vh"}></img>
                </Box>
           </Container>
            <Footer />
        </>
    )
}