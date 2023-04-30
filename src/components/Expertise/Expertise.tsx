import { Box, styled, Typography } from "@mui/material";
import { expertise } from "../../text/text";

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
    <ExpertiseBox id="expertise">
      <Box sx={{ width: "100%" }}>
        <Typography variant="h5" width="15rem" sx={{ borderBottom: "5px solid #2d8f91", alignSelf: "right" }}>
          תחומי התמחות
        </Typography>
      </Box>
      <Box sx={{ width: "100%", alignSelf: "center" }}>
        <Typography variant="h6" sx={{ color: "primary.main" }}>
          {expertise.title}
        </Typography>
        {/*     <Typography sx={{ whiteSpace: "break-spaces" }} dangerouslySetInnerHTML={{ __html: text.neuroConsultation1 }}>
          
        </Typography> */}
        {expertise.list.map((expertise) => {
          return (
            <Typography sx={{ color: "primary.dark" }} key={expertise.subtitle}>
              {expertise.subtitle}
              <Box sx={{ marginRight: "2rem" }}>
                {expertise.types.map((type) => {
                  return (
                    <li style={{ fontWeight: "normal" }} key={type}>
                      {type}
                    </li>
                  );
                })}
              </Box>
            </Typography>
          );
        })}

        <Typography sx={{ whiteSpace: "break-spaces" }}>{/* {text.neuroConsultation2} */}</Typography>
      </Box>
    </ExpertiseBox>
  );
};

export default Expertise;
