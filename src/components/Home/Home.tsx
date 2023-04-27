import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { theme } from "../../theme";
import bgtransparent from "../../assets/bgtransparent.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import About from "../About/About";
import NeuroConsult from "../NeuroConsult/NeuroConsult";

import "../Home/style.css";
import Contact from "../Contact/Contact";

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
  gap: theme.spacing(5),
  direction: "rtl",
  textAlign: "center",
  width: "100%",

  // padding: theme.spacing(0, 4, 0, 4),
  backgroundImage: `url(${bgtransparent})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  marginTop: "100px",

  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));

const Home = () => {
  return (
    <Box
      id="home"
      minHeight="100vh"
      width="100%"
      sx={{
        position: "relative",

        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
      }}>
      <MainBox>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "3rem",
            width: "100%",
            height: "100%",
          }}>
          <Typography color="common.white" variant="h3" fontWeight="600" sx={{ textShadow: "2px 2px 5px black" }}>
            ד"ר ליאור גרינבאום
          </Typography>
          <Typography color="common.white" variant="h5" fontWeight="600" sx={{ textShadow: "0px 0px 6px black" }}>
            רופא מומחה לנוירולוגיה ולגנטיקה רפואית{" "}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "3rem",
              [theme.breakpoints.down("lg")]: {
                flexDirection: "column",
                gap: "1rem",
              },
              margin: "2rem 0rem 1rem 0rem",
            }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
              }}>
              <MailOutlineIcon sx={{ color: "white" }} />
              <Typography
                color="primary.light"
                fontWeight="400"
                sx={{ textShadow: "2px 2px 5px black", fontSize: { xs: "16px", sm: "30px" } }}>
                Lior.Greenbaum@sheba.health.gov.il
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                transition: "0.5s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}>
              <LocalPhoneIcon sx={{ color: "white", cursor: "pointer" }} href="tel:+9720523308498" />

              <Typography
                component="a"
                href="tel:+9720523308498"
                color="primary.light"
                fontWeight="400"
                sx={{ textShadow: "2px 2px 5px black", fontSize: { xs: "22px", sm: "30px" }, textDecoration: "none" }}>
                052-330-8498
              </Typography>
            </Box>
          </Box>
        </Box>
      </MainBox>
      <About />
      <NeuroConsult />
      <Contact />
    </Box>
  );
};

export default Home;
