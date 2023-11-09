"use client";
import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import lib6 from "../public/assets/images/hero.png";
import Image from "next/image";
import { useStyles } from "@styles/customStyledComponents";

const Hero = () => {
  const heroSectionStyle = {
    backgroundImage: `url(${lib6.src}) !important`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    backgroundPositionY: "bottom",
  };

  const heroContentStyle = {
    // background: "none",
    borderRadius: "10px",
    padding: "2.5rem",
    border: "1px solid #14b8a6",
    background: "rgba(0,0,0,0.3)",
      // "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%)",

    // backdropFilter: "blur(1px)",
    boxShadow: "0px 0px 6px 1px rgba(0,0,0,0.75)",

    "@media (max-width: 600px)": {
      padding: "0.5rem",
    },
  };

  const heroTextStyle = {
    color: "white",
    textAlign: "left",
    // fontSize: 18,

  };

  const heroH1Style = {
    color: "#14b8a6",
    textAlign: "center",
    // fontSize: 38,
    // fontWeight: 600,
    textTransform: "capitalize",
    marginBottom: "2rem",
    alignSelf: "center",

    "@media (max-width: 600px)": {
      // fontSize: 24,
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
          // background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%)",
          width: "100%",
          height: "100vh",
        }}
      >
        <Grid item xs={10} sm={8} md={6}>
          <Paper style={heroContentStyle}>
            <Typography variant="h1" sx={heroH1Style}>
              Butterfly Effect Universe
            </Typography>
            <Typography variant="body1" sx={heroTextStyle}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              sed totam quibusdam molestiae eius ullam iste necessitatibus
              quidem perferendis autem veritatis libero nesciunt nihil non,
              inventore fuga, ipsam voluptates illum. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Aliquid sed totam quibusdam
              molestiae eius ullam iste necessitatibus quidem perferendis autem
              veritatis libero nesciunt nihil non, inventore fuga, ipsam
              voluptates illum.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero;
