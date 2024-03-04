import React from "react";
import ShowcaseCard from "./ShowcaseCard";
const LandingShowcase = () => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "60px",
        justifyContent: "center",
      }}
    >
      <ShowcaseCard />
      <ShowcaseCard />
      <ShowcaseCard />
    </div>
  );
};

export default LandingShowcase;
