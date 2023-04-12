import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { theme } from "../../theme";
import bgtransparent from "../../assets/bgtransparent.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { text } from "../../text/text";
import liorimg from "../../assets/liorimg.jpeg";

import "../Home/style.css";

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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
const AboutBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: theme.spacing(3),
  direction: "rtl",
  // textAlign: "center",
  width: "100%",
  padding: "2rem",
  // background: theme.palette.primary.light,

  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "right",
  },
}));

const Home = () => {
  return (
    <Box
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
                sx={{ textShadow: "2px 2px 5px black", fontSize: "30px" }}>
                Lior.Greenbaum@sheba.health.gov.il
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
              }}>
              <LocalPhoneIcon sx={{ color: "white" }} />
              <Typography
                color="primary.light"
                fontWeight="400"
                sx={{ textShadow: "2px 2px 5px black", fontSize: "30px" }}>
                03-00000000
              </Typography>
            </Box>
          </Box>
        </Box>
      </MainBox>
      <AboutBox>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h5" width="15rem" sx={{ borderBottom: "5px solid #2d8f91", alignSelf: "right" }}>
            אודות
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center ",
            flexDirection: { xs: "column", sm: "column", lg: "row" },
            gap: "0.5rem",
          }}>
          <Box sx={{ width: "100%", alignSelf: "flex-start" }}>
            <Typography sx={{ whiteSpace: "break-spaces" }}>{text.about}</Typography>
          </Box>

          <Box component="img" sx={{ content: `url(${liorimg})`, width: { xs: "100%", sm: "50%", lg: "35%" } }} />
        </Box>
        <Box>
          {" "}
          <Typography sx={{ whiteSpace: "break-spaces", width: "100%", fontStyle: "italic" }}>
            {text.aboutBottom}
          </Typography>
        </Box>
      </AboutBox>
    </Box>
  );
};

export default Home;
