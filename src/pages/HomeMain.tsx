import React from "react";
import { Box } from "@mui/material";
import Home from "../components/Home/Home";
// import { SectionIdEnum } from "../types/SectionIdEnum";
// import About from "../components/About/About";
// import AboutMe from "../components/AboutMe/AboutMe";
// import Contact from "../components/Contact/Contact";

const HomeMain = () => {
  return (
    <Box minHeight="100vh" bgcolor="white" width="100%" sx={{ display: "flex", flexDirection: "column" }}>
      <Home />
    </Box>
  );
};

export default HomeMain;
