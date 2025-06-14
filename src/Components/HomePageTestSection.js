import React from "react";
import Link from "@mui/joy/Link";
import MainFeatures from "./MainFeatures";
import Box from "@mui/material/Box";
import { Stack } from "@mui/system";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { Button } from "@mui/material";

export const HomePageTestSection = () => {
  const mainImage = '/images/Homepage_character.png';

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "transparent",
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "transparent",
    }),
  }));
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${mainImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          height: "60vh", // Adjusted height for a responsive design
          width: "100%",
          padding: "20px", // Add padding to ensure content doesn't touch the edges
          boxSizing: "border-box", // Include padding in the width calculation
        }}
      >
        <Stack
          direction="column"
          spacing={3}
          sx={{
            position: "absolute",
            bottom: "40px",
            left: "60px",
            alignItems: "flex-start",
            maxWidth: "calc(100% - 120px)", // Prevent overflow, accounting for padding
            "@media (max-width: 768px)": {
              bottom: "20px",
              left: "30px",
              maxWidth: "calc(100% - 60px)", // Adjust width for tablets
            },
            "@media (max-width: 480px)": {
              bottom: "10px",
              left: "15px",
              maxWidth: "calc(100% - 30px)", // Adjust width for mobile screens
            },
          }}
        >
          <Item>
            <Typography
              level="h1"
              sx={{
                fontSize: "2.5em",
                "@media (max-width: 768px)": {
                  fontSize: "2em",
                },
                "@media (max-width: 480px)": {
                  fontSize: "1.5em",
                },
              }}
            >
              Master CELPIP with
            </Typography>
            <Typography
              level="h1"
              sx={{
                fontSize: "2.5em",
                "@media (max-width: 768px)": {
                  fontSize: "2em",
                },
                "@media (max-width: 480px)": {
                  fontSize: "1.5em",
                },
              }}
            >
              Expert Guidance and
            </Typography>
            <Typography
              level="h1"
              sx={{
                fontSize: "2.5em",
                "@media (max-width: 768px)": {
                  fontSize: "2em",
                },
                "@media (max-width: 480px)": {
                  fontSize: "1.5em",
                },
              }}
            >
              Real Exam Interface
            </Typography>
          </Item>
          <Item>
            <Link
              href="/speaking"
              variant="solid"
              sx={{
                fontSize: "1.2em",
                marginTop: "0.1rem",
                backgroundColor: "#301a52", // Set background to dark blue
                color: "white", // Set text color to white for contrast
                padding: "3px 20px", // Add some padding to the button
                borderRadius: "5px", // Optional: Add rounded corners
                "@media (max-width: 768px)": {
                  fontSize: "1em",
                },
                "@media (max-width: 480px)": {
                  fontSize: "0.9em",
                },
              }}
            >
              Speaking
            </Link>
          </Item>
          <Item>
            <Link
              href="/writing"
              variant="solid"
              sx={{
                fontSize: "1.2em",
                backgroundColor: "#301a52", // Set background to dark blue
                color: "white", // Set text color to white for contrast
                padding: "3px 20px", // Add some padding to the button
                borderRadius: "5px", // Optional: Add rounded corners
                "@media (max-width: 768px)": {
                  fontSize: "1em",
                },
                "@media (max-width: 480px)": {
                  fontSize: "0.9em",
                },
              }}
            >
              Writing
            </Link>
          </Item>
          <Item>
            <Link
              href="/reading"
              variant="solid"
              sx={{
                fontSize: "1.2em",
                backgroundColor: "#301a52", // Set background to dark blue
                color: "white", // Set text color to white for contrast
                padding: "3px 20px", // Add some padding to the button
                borderRadius: "5px", // Optional: Add rounded corners
                "@media (max-width: 768px)": {
                  fontSize: "1em",
                },
                "@media (max-width: 480px)": {
                  fontSize: "0.9em",
                },
              }}
            >
              Reading
            </Link>
          </Item>
          <Item>
            <Link
              href="/listening"
              variant="solid"
              sx={{
                fontSize: "1.2em",
                backgroundColor: "#301a52", // Set background to dark blue
                color: "white", // Set text color to white for contrast
                padding: "5px 20px", // Add some padding to the button
                borderRadius: "3px", // Optional: Add rounded corners
                "@media (max-width: 768px)": {
                  fontSize: "1em",
                },
                "@media (max-width: 480px)": {
                  fontSize: "0.9em",
                },
              }}
            >
              Listening
            </Link>
          </Item>
        </Stack>
      </div>

      <div className="what-is-celpip">
        <Box
          sx={{
            width: 1,
            p: 1,
            my: 1,
            display: "flex",
            flexDirection: "row",
            fontSize: "0.875rem",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          <Card variant="plain">
            <Typography level="h1">
              Welcome to Your CELPIP Preparation Hub!
            </Typography>
           
            <Typography level="body-md" style={{ fontWeight: 'normal', textAlign: 'center' }}>
            Welcome to our comprehensive CELPIP preparation website, your go-to resource for mastering the{' '}
            <span style={{ fontWeight: 'bold' }}>Canadian English Language Proficiency Index Program (CELPIP)</span> test. Whether you&apos;re applying for permanent residency, citizenship, or a professional designation in Canada, our platform is designed to help you succeed with confidence.
            </Typography>

          </Card>
        </Box>
        <Box
          sx={{
            width: 1,
            p: 1,
            my: 1,
            display: "flex",
            flexDirection: "row",
            fontSize: "0.875rem",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          <Card variant="plain">
            <Typography level="h1">What is CELPIP?</Typography>
            <Typography level="body-md" style={{ fontWeight: 'normal', textAlign: "center" }}>
              The CELPIP test is a Canadian English language assessment tool that
              evaluates your ability to function in English in everyday situations.
              Recognized by Immigration, Refugees and Citizenship Canada <strong>(IRCC)</strong> and
              various professional organizations, CELPIP is a key requirement for
              individuals looking to immigrate, work, or study in Canada.
            </Typography>
          </Card>

        </Box>
        <Box
          sx={{
            width: 1,
            p: 1,
            my: 1,
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            fontSize: "0.875rem",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
       <Button
    component="a" // Makes the button act as a link
    href="/testdetails" // The URL you want to navigate to
    variant="contained" // Add this for the button style (optional)
  >
    TEST Details
  </Button>

        </Box>

        {/* <div className="pricing">
          <Pricing></Pricing>
        </div> */}
        <Box
  sx={{
    width: 1,
    p: 1,
    my: 1,
    display: "flex",
    flexDirection: "column", // Use column to stack the card and text vertically
    justifyContent: "center", // Centers the content horizontally
    alignItems: "center",     // Centers the content vertically
    fontSize: "0.875rem",
    fontWeight: "700",
  }}
>
  {/* <Card variant="plain">
    <Typography level="h1" textAlign="center">Main features of our application:</Typography>
  </Card> */}
</Box>

        <div className="mainFeatures">
        
          <MainFeatures></MainFeatures>
        </div>
      </div>
    </div>
  );
};
