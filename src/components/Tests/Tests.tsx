import React from "react";
import { Box, Typography } from "@mui/material";
import { tests } from "../../text/text";
import { theme } from "../../theme";
import { SectionContainer } from "../../styles/SectionContainer";

const Tests = () => {
  return (
    <SectionContainer id="tests">
      <Box sx={{ width: "100%" }}>
        <Typography variant="h5" width="15rem" sx={{ borderBottom: "5px solid #2d8f91", alignSelf: "right" }}>
          בדיקות
        </Typography>
      </Box>
      <Box sx={{ width: "100%", alignSelf: "center" }}>
        <Typography variant="h6" sx={{ color: "primary.main" }}>
          {tests.title}
        </Typography>
        <Typography sx={{ whiteSpace: "break-spaces" }}>{tests.intro}</Typography>

        {tests.list.map((test) => {
          return (
            <React.Fragment>
              <Box
                sx={{
                  fontWeight: "bold",
                  fontFamily: theme.typography.fontFamily,
                  fontSize: "22.8px",
                  color: "primary.dark",
                }}
                key={test.subtitle}>
                {test.subtitle}
              </Box>
              <Box>
                <Typography
                  sx={{ whiteSpace: "break-spaces" }}
                  dangerouslySetInnerHTML={{ __html: test.content }}></Typography>
              </Box>
            </React.Fragment>
          );
        })}

        <Typography sx={{ whiteSpace: "break-spaces" }}>{/* {text.neuroConsultation2} */}</Typography>
      </Box>
    </SectionContainer>
  );
};

export default Tests;
