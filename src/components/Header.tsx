import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { ReactComponent as TextLogo } from "../static/images/text-logo.svg"; // Import SVG file
import Person2Icon from "@mui/icons-material/Person2";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const HeaderContainer = styled("div")({
  position: "fixed",
  top: "0",
  height: "80px",
  width: "100vw",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setDrawerOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <Button variant="contained">Sign up</Button>
      <Button variant="contained">Log in</Button>
      <Typography variant="h6">Create a business account</Typography>
      <Typography variant="h6">Add your restaurant</Typography>
      <Typography variant="h6">Sign up to deliver</Typography>
      <div
        style={{
          backgroundImage:
            "url(https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/31ee382bd0e6ed84.svg)",
          width: "30px",
          height: "30px",
        }}
      ></div>
      <Typography variant="h6">There's more to love in the app.</Typography>
      <Button variant="contained">iPhone</Button>
      <Button variant="contained">Android</Button>
    </Box>
  );

  return (
    <HeaderContainer>
      <div style={{ width: "300px", display: "flex", justifyContent: "space-evenly" }}>
        <DehazeIcon onClick={toggleDrawer(true)} />
        <TextLogo />
      </div>

      <div style={{ width: "300px", display: "flex", justifyContent: "space-evenly" }}>
        <Button
          variant="contained"
          sx={{
            color: "black",
            minHeight: "48px",
            borderRadius: "500px",
            backgroundColor: "#FFFFFF",
            fontSize: "16px",
          }}
          startIcon={<Person2Icon />}
        >
          Log in
        </Button>
        <Button
          variant="contained"
          sx={{
            color: "#FFFFFF",
            minHeight: "48px",
            borderRadius: "500px",
            backgroundColor: "black",
            fontSize: "16px",
          }}
        >
          Sign up
        </Button>
      </div>
      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </HeaderContainer>
  );
};

export default Header;
