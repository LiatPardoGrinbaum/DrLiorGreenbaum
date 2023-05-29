import { Box, Typography } from "@mui/material";
import { theme } from "../../theme";

const Footer = () => {
  return (
    <Box
      sx={{
        background: theme.palette.secondary.light,
        minHeight: "10vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "1rem",
      }}>
      <Typography sx={{ fontSize: "16px", fontFamily: `'Poppins', sans-serif` }}>
        Website designed and developed by
      </Typography>
      <Typography
        component="a"
        href="https://github.com/LiatPardoGrinbaum"
        target="blank"
        sx={{
          color: "primary.main",
          fontSize: "16px",
          fontFamily: `'Poppins', sans-serif`,
          textDecoration: "none",
          "&:hover": { color: "primary.main", fontWeight: "bold" },
        }}>
        Liat Pardo Grinbaum {new Date().getUTCFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
