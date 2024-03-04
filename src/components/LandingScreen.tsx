import React from "react";
import LandingSearch from "./LandingSearch";

import { styled } from "@mui/material/styles";
import landingScreenImg from "../static/images/landing-page-intro-background-img.jpg"; // Path to your image file

const LandingPageContainer = styled("div")({
  backgroundImage: `url(${landingScreenImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh", // Adjust the height as needed
  display: "flex",
  justifyContent: "center",
  alignItems: "left",
  flexDirection: "column",
});

const LandingScreen = () => {
  return (
    <LandingPageContainer>
      <LandingSearch />
    </LandingPageContainer>
  );
};

export default LandingScreen;
