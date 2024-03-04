import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const LandingSearch = () => {
  return (
    <div
      style={{
        padding: "0 40px",
      }}
    >
      <h1
        style={{
          textAlign: "left",
          fontSize: "3rem",
          margin: "0",
          marginBottom: "40px",
        }}
      >
        Order delivery near you
      </h1>
      <div
        style={{
          display: "flex",
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            minWidth: "400px",
            minHeight: "50px",
          }}
        >
          <LocationOnIcon />
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Enter delivery address" />
        </Paper>

        <Paper
          component="form"
          sx={{
            m: "0 0 0 10px",
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "180px",
            minWidth: "180px",
            minHeight: "50px",
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <LocationOnIcon />
          </IconButton>
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Delivaery now" />
        </Paper>
        <br />

        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "white",
            marginLeft: "10px",
            height: "60px",
            width: "130px",
            minWidth: "130px",
          }}
        >
          Search here
        </Button>
      </div>
    </div>
  );
};

export default LandingSearch;
