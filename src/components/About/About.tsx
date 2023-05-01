import { Box, Typography } from "@mui/material";
import { text } from "../../text/text";
import liorimg from "../../assets/liorimg.jpeg";
// import { theme } from "../../theme";
import styles from "./style.module.css";
import { SectionContainer } from "../../styles/SectionContainer";

const About = () => {
  return (
    <SectionContainer id="about">
      <Box sx={{ width: "100%" }} className={styles["about-container"]}>
        <Typography variant="h5" width="15rem" sx={{ borderBottom: "5px solid #2d8f91", alignSelf: "right" }}>
          אודות
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center ",
          flexDirection: { xs: "column", sm: "column", lg: "row" },
          gap: "0.5rem",
        }}>
        <Box sx={{ width: "100%", alignSelf: "flex-start" }}>
          <Typography sx={{ whiteSpace: "break-spaces" }}>{text.about}</Typography>
        </Box>

        <Box component="img" sx={{ content: `url(${liorimg})`, width: { xs: "100%", sm: "50%", lg: "35%" } }} />
      </Box>
      <Box>
        {" "}
        <Typography sx={{ whiteSpace: "break-spaces", width: "100%", fontStyle: "italic" }}>
          {text.aboutBottom}
        </Typography>
      </Box>
    </SectionContainer>
  );
};

export default About;
