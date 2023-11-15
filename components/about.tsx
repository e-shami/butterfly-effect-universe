"use client";

import React from "react";
import { Grid, Typography, Link, Divider } from "@mui/material";
import { useStyles } from "@styles/customStyledComponents";
import BioCard from "./Cards/card";

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.forText}
      id="about"
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "13vh",

        "@media (max-width: 900px)": {
          paddingTop: "5vh",
        },

        "@media (max-width: 600px)": {
          height: "fit-content",
          borderRadius: "0 0 50px 0",
        },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#000",
          textTransform: "uppercase",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginBottom: "1%",
        }}
      >
        About Us
      </Typography>
      <Divider
        sx={{
          backgroundColor: "#14b8a6 !important",
          height: "4px",
          width: "90%",
          marginBottom: "2rem",
          "@media (max-width: 900px)": {
            marginBottom: "0.5rem",
          },
          "@media (max-width: 600px)": {
            marginBottom: "0.5rem",
            height: "2px",
          },
        }}
      />
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 2rem",

          "@media (max-width: 600px)": {
            flexDirection: "column",
            padding: "1rem",
          },
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          display="flex"
          alignItems="center"
          sx={{
            "@media (max-width: 900px)": {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            "@media (max-width: 600px)": {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xlziG5d3k2I?si=oA9HAoDrGX9FdNxd"
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              flex: "1",
            }}
          ></iframe>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems="left"
          sx={{
            paddingRight: "2rem",
            paddingTop: "2rem",
            "@media (max-width: 600px)": {
              display: "flex",
              justifyContent: "left",
              alignItems: "left",
              padding: "0",
              paddingTop: "1rem",
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#526092 !important",
              textTransform: "uppercase",
              fontWeight: "400 !important  ",
              marginBottom: "2rem",

              "@media (max-width: 900px)": {
                textAlign: "center",
                marginBottom: "0.5rem",
              },
            }}
          >
            Our Mission
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#000",
              paddingRight: "3rem",
              "@media (max-width: 900px)": {
                textAlign: "justify",
                paddingRight: "0",
              },
              "@media (max-width: 600px)": {
                paddingRight: "0",
                textAlign: "justify",
              },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            voluptatibus, voluptatem, quia, doloribus laboriosam quidem
            voluptatum quibusdam quae quod molestias voluptate? Quisquam
            voluptate, quibusdam voluptas quod, quas, quia voluptatibus
            voluptatem quos quae quidem. Quisquam, quae. Quisquam, quae.
            Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
          </Typography>
        </Grid>
        </Grid>
      <Grid item xs={12} sx={{ 
          padding: "0 2rem",

          "@media (max-width: 600px)": {
            padding: "0 1rem",
          },  }}>
        <Typography
          variant="h4"
          sx={{
            color: "#526092 !important",
            textTransform: "uppercase",
            fontWeight: "400 !important  ",
            // marginBottom: "2rem",
            marginTop: "2rem",
            textAlign: "center",

            "@media (max-width: 900px)": {
              marginTop: "0rem",
              // marginBottom: "0.5rem",
              // textAlign: "left",
            },
          }}
        >
          Our Team
        </Typography>
      </Grid>
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "2.5rem 2rem",
          
          "@media (max-width: 600px)": {
            flexDirection: "column",
            padding: "1rem",
          },
        }}
      >
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <BioCard role="PRESIDENT" />  
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <BioCard role="BOD" />  
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <BioCard role="MEMBER" />  
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <BioCard role="MEMBER" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
