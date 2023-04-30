import { Box, styled, Typography } from "@mui/material";
import { text } from "../../text/text";

const ExpertiseBox = styled(Box)(({ theme }) => ({
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

const Expertise = () => {
  return (
    <ExpertiseBox id="neuroConsult">
      <Box sx={{ width: "100%" }}>
        <Typography variant="h5" width="15rem" sx={{ borderBottom: "5px solid #2d8f91", alignSelf: "right" }}>
          תחומי התמחות
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
    </ExpertiseBox>
  );
};

export default Expertise;
