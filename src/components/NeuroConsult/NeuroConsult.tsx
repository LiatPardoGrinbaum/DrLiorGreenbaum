import { Box, styled, Typography } from "@mui/material";
import { text } from "../../text/text";

// import { theme } from "../../theme";

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

const NeuroConsult = () => {
  return (
    <AboutBox id="neuroConsult">
      <Box sx={{ width: "100%" }}>
        <Typography variant="h5" width="15rem" sx={{ borderBottom: "5px solid #2d8f91", alignSelf: "right" }}>
          ייעוץ נוירולוגי
        </Typography>
      </Box>

      <Box
        sx={{
          alignSelf: "flex-start",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start ",
          flexDirection: "column",
          gap: "0.5rem",
        }}>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "primary.light",
            color: "primary.dark",
            fontStyle: "italic",
            alignSelf: "center",
            padding: { xs: "1rem", lg: "2rem 6rem" },
            borderRadius: "1rem",
          }}>
          <Typography sx={{ whiteSpace: "break-spaces", fontSize: { sm: "1.8rem" }, textAlign: "center" }}>
            {text.neuroConsultationIntro}
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography sx={{ whiteSpace: "break-spaces" }}>
            <div dangerouslySetInnerHTML={{ __html: text.neuroConsultation }} />
          </Typography>
        </Box>
      </Box>
    </AboutBox>
  );
};

export default NeuroConsult;
