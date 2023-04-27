import React from "react";
import { Box, Typography } from "@mui/material";
// import Title from "../../styles/Title";
import { theme } from "../../theme";
import ContactForm from "./ContactForm";
import { LocationOn, Phone } from "@mui/icons-material";

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        background: `linear-gradient( to right,${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
        minHeight: "30vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "0.5rem 0",
        direction: "rtl",
        gap: "1rem",
      }}>
      {/*   <Title fontColor="primary.dark" fontSize="2rem">
        צרו קשר
      </Title> */}
      {/*  <ContactDivs /> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
        }}>
        <ContactForm />

        {/*    <iframe
          title="map location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13531.63327494852!2d34.79562943663796!3d32.01759706213614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b4bb0c33bf39%3A0xfbdd79640525e72d!2z15fXldec15XXnw!5e0!3m2!1siw!2sil!4v1678799013436!5m2!1siw!2sil"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen={undefined}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe> */}
      </Box>{" "}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "1rem",
          gap: "2rem",
          flexWrap: "wrap",
        }}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <LocationOn sx={{ color: "primary.main" }} />{" "}
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "1.4rem",
              color: "primary.dark",
              marginRight: "1rem",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.5rem",
              },
            }}>
            בית הרופאים, כניסה א, הברזל 11 תל אביב, קומה 3, מרפאות דורי
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
          <Phone sx={{ color: "primary.main" }} />
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "1.4rem",
              color: "primary.dark",
              marginRight: "1rem",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.5rem",
              },
            }}>
            052-330-8498
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
