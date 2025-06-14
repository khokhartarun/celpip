import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import OneSampleAnswer from "../SpeakingCelpip/OneSampleAnswer";

const W_Task1_PracticePage = ({ promptDetails }) => {
  const [responseText, setResponseText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (event) => {
    const text = event.target.value;
    setResponseText(text);
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    setWordCount(words);
  };

  return (
    <React.Fragment>
      <Grid container spacing={1}>
        {/* Left side with prompt text and pointers */}
        <Grid item xs={12} md={4}>
          <Box
            p={2}
            border={1}
            borderColor="grey.300"
            height="92%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h6" gutterBottom>
                Read the below Information:
              </Typography>
              <Typography variant="body1" gutterBottom>
                {promptDetails.prompt_text}
              </Typography>
              <Divider />
              <List dense>
                {promptDetails.prompt_pointers.map((pointer, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemText primary={`• ${pointer}`} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Grid>

        {/* Right side with text area for response */}
        <Grid item xs={12} md={8}>
          <Box
            p={2}
            display="flex"
            flexDirection="column"
            height="100%"
            sx={{
              padding: { xs: "0rem", sm: "1rem", md: "2rem" }, // Responsive padding (less on mobile)
              margin: { xs: "0", sm: "auto" }, // Adjust margins for mobile
            }}
          >
            <Typography
              variant="body2"
              align="left"
              color="green"
              mt={2}
            >
              *Sample response given below:
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={19}
              variant="outlined"
              placeholder="Type your response here..."
              value={responseText}
              onChange={handleTextChange}
              style={{ flex: 1 }}
            />
            <Typography
              variant="body2"
              align="right"
              color="textSecondary"
              mt={2}
            >
              Words: {wordCount}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <OneSampleAnswer
        sample_answer={promptDetails.sample_answer}
        important_keywords={promptDetails.important_keywords}
        text1="Sample Answer"
      />
    </React.Fragment>
  );
};

export default W_Task1_PracticePage;
