import React from "react";
import { AppBar, Toolbar, Box, Grid, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <div>
      <Grid container sx={{ paddingX: "20px", paddingY: "10px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            style={{ background: "#ADD8E6", width: "100%" }}
          >
            <Toolbar
              variant="dense"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: "90%",
                margin: "auto",
                width: "100%", // Ensure it doesn’t exceed the viewport
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontFamily: "revert", fontSize: "500", color: "black" }}
              >
                Job Portal
              </Typography>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="outlined" href="http://localhost:3000">
                  Home
                </Button>
                <Button variant="outlined" href="http://localhost:3000/create">
                  Add Job
                </Button>
                <Button variant="outlined" href="">
                  Contact Us
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </Grid>
    </div>
  );
};

export default Navbar;
