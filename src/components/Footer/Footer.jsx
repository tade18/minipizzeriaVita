import * as React from "react";
import "./Footer.css";
import Divider from '@mui/material/Divider';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";


export default function Footer() {
    return (
        <>
       
      <Paper sx={{marginTop: 'calc(10% + 60px)',
      width: '100%',
      position: 'absolute',
      width: '100%'
      }} component="footer" square variant="outlined">
        <Container maxWidth="lg">
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              my:1
            }}
          > <Divider orientation="horizontal" flexItem />
              <div>
              <img height={100} src="src\img\vitaLogo_Red.png" alt="" />
              </div>
          </Box>
  
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              mb: 2,
            }}
          >
            <Typography variant="caption" color="initial">
              Copyright ©2024. [] Limited
            </Typography>
          </Box>
        </Container>
      </Paper>
      </>
    );
  }