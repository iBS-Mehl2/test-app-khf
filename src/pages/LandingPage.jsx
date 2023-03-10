import { Button, Typography } from "@mui/material";
import React from "react";
import Component from "../components/Component";

const LandingPage = () => {
  const notATroll = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  return (
    <>
      <Typography variant="h1" gutterBottom>
        Das ist ein Test! :)
      </Typography>
      <Component></Component>
      <Button href={notATroll}>klick me</Button>
    </>
  );
};

export default LandingPage;
