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
          ייעוץ נוירוגנטי
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
            width: { sm: "100%", lg: "80%" },
            backgroundColor: "secondary.light",
            color: "primary.dark",
            fontStyle: "italic",
            alignSelf: "center",
            padding: { xs: "1rem", lg: "2rem 6rem" },
            margin: "1rem",
            borderRadius: "1rem",
            borderBottom: `10px solid #548199`,
            borderTop: `10px solid #548199`,
          }}>
          <Typography sx={{ whiteSpace: "break-spaces", fontSize: { sm: "1.8rem" }, textAlign: "center" }}>
            {text.neuroConsultationIntro}
          </Typography>
        </Box>
        <Box sx={{ width: { sm: "100%", lg: "90%" }, alignSelf: "center" }}>
          <Typography variant="h6" sx={{ fontStyle: "bold", color: "primary.main" }}>
            תהליך הייעוץ:
          </Typography>
          <Typography sx={{ whiteSpace: "break-spaces" }} dangerouslySetInnerHTML={{ __html: text.neuroConsultation1 }}>
            {/* <div dangerouslySetInnerHTML={{ __html: text.neuroConsultation1 }} /> */}
          </Typography>
          <Typography variant="h6" sx={{ fontStyle: "bold", color: "primary.main" }}>
            תפיסת עולמי המקצועית:
          </Typography>
          <Typography sx={{ whiteSpace: "break-spaces" }}>{text.neuroConsultation2}</Typography>
        </Box>
      </Box>
    </AboutBox>
  );
};

export default NeuroConsult;
