import React from "react";
import { Box } from "@mui/material";
import Home from "../components/Home/Home";

const HomeMain = () => {
  return (
    <Box minHeight="100vh" bgcolor="white" width="100%" sx={{ display: "flex", flexDirection: "column" }}>
      <Home />
    </Box>
  );
};

export default HomeMain;
