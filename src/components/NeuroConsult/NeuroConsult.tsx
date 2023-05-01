import { Box, Typography } from "@mui/material";
import { text } from "../../text/text";
import { SectionContainer } from "../../styles/SectionContainer";

const NeuroConsult = () => {
  return (
    <SectionContainer id="neuroConsult">
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
          <Typography sx={{ whiteSpace: "break-spaces", fontSize: "1.5rem", textAlign: "center" }}>
            {text.neuroConsultationIntro}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", alignSelf: "center" }}>
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
    </SectionContainer>
  );
};

export default NeuroConsult;
