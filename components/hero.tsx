"use client";
import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import lib6 from "../public/assets/images/hero.jpg";
import { useStyles } from "@styles/customStyledComponents";

const Hero = () => {
  const heroSectionStyle = {
    backgroundImage: `url(${lib6.src}) !important`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    backgroundPositionY: "bottom",

    "@media (max-width: 600px)": {
      backgroundPositionX: "left",
    },
  };

  const heroContentStyle = {
    borderRadius: "0",
    padding: "2.5rem",
    border: "1px solid #14b8a6",
    background: "rgba(0,0,0,0.4)",
    boxShadow: "0px 0px 6px 1px rgba(0,0,0,0.75)",

    "@media (max-width: 600px)": {
      padding: "1.2rem",
      background: "rgba(0,0,0,0.5)",
    },
  };

  const heroTextStyle = {
    color: "white",
    textAlign: "justify",
  };

  const heroH1Style = {
    color: "#fff !important",
    textAlign: "center",
    textTransform: "capitalize",
    marginBottom: "2rem",
    alignSelf: "center",

    "@media (max-width: 600px)": {
      marginBottom: "0.5rem",
    },
  };

  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={heroSectionStyle}
      className={classes.forText}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          width: "100%",
          height: "100vh",
        }}
      >
        <Grid item xs={10} sm={8} md={6}>
          <Paper sx={heroContentStyle}>
            <Typography variant="h2" sx={heroH1Style}>
              Butterfly effect Universe
            </Typography>
            <Typography variant="body1" sx={heroTextStyle}>
              Experiential education program to nurture environmental awareness
              via butterfly conservatory - imparting education on the complexity
              of butterfly ecosystem as a means to providing palpable sense of
              interdependence of Earth's biosphere. Currently, in the process of
              establishing a state-of-the-art facility in Pakistan dubbed
              "Butterfly Effect Universe", with the ambition to showcase the
              concept on an international scale. The ultimate goal is to create
              a series of conservatories with the intent of sensitizing our
              community to the critical issues of climate change and potential
              remedies.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero;
