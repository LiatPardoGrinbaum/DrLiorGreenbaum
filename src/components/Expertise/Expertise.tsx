import { Box, Typography } from "@mui/material";
import { expertise } from "../../text/text";
import { theme } from "../../theme";
import { SectionContainer } from "../../styles/SectionContainer";

const Expertise = () => {
  return (
    <SectionContainer id="expertise">
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
            <Box
              sx={{
                fontWeight: "bold",
                fontFamily: theme.typography.fontFamily,
                fontSize: "22.8px",
                color: "primary.dark",
              }}
              key={expertise.subtitle}>
              ✓ {expertise.subtitle}
              <Box sx={{ marginRight: "2rem" }}>
                {expertise.types.map((type) => {
                  return (
                    <li style={{ fontWeight: "normal", listStyleType: "square" }} key={type}>
                      {type}
                    </li>
                  );
                })}
              </Box>
            </Box>
          );
        })}

        <Typography sx={{ whiteSpace: "break-spaces" }}>{/* {text.neuroConsultation2} */}</Typography>
      </Box>
    </SectionContainer>
  );
};

export default Expertise;
