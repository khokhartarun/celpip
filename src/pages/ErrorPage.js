// pages/404.js
import React from "react";
import { useRouter } from "next/router";
import { Button, Typography } from "@mui/material";

const ErrorPage = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/"); // Use Next.js router to navigate
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <Typography variant="h4" color="error">
        404 - Page Not Found
      </Typography>
      <Typography variant="subtitle1" style={{ marginTop: "1rem" }}>
        {"Oops! The page you're looking for doesn't exist."}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "2rem" }}
        onClick={goToHome}
      >
        Go to Home
      </Button>
    </div>
  );
};

export default ErrorPage;
