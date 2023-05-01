import React from "react";
import { Box } from "@mui/material";
import Home from "../components/Home/Home";
import { Helmet } from "react-helmet-async";

const HomeMain = () => {
  return (
    <Box minHeight="100vh" bgcolor="white" width="100%" sx={{ display: "flex", flexDirection: "column" }}>
      <Helmet>
        <title>ד"ר ליאור גרינבאום ייעוץ נוירוגנטי</title>
        <meta name="description" content='ייעוץ נוירולוגיה נוירוגנטיקה ד"ר ליאור גרינבאום'></meta>
        <link rel="canonical" href="/" />
      </Helmet>
      <Home />
    </Box>
  );
};

export default HomeMain;
