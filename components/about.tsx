"use client";

import React from "react";
import { Grid, Typography, Link, Divider } from "@mui/material";
import { useStyles } from "@styles/customStyledComponents";

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
        paddingBottom: "15vh",

        "@media (max-width: 900px)": {
          paddingTop: "10vh",
          paddingBottom: "5vh",
        },

        "@media (max-width: 600px)": {
          height: "fit-content",
          borderRadius: "0 0 50px 0",
          paddingBottom: "5vh",
          paddingTop: "5vh",
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
          width: "80%",
          marginBottom: "2rem",
          "@media (max-width: 900px)": {
            width: "100%",
            marginBottom: "0.5rem",
          },
          "@media (max-width: 600px)": {
            marginBottom: "0.5rem",
            height: "2px",
            width: "100%",
          },
        }}
      />
      <Grid
        item
        xs={12}
        sm={10}
        md={10}
        lg={10}
        xl={10}
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "center",
          alignItems: "center",

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
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
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
            paddingLeft: "2rem",
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
            variant="h3"
            sx={{
              color: "#000 !important",
              textTransform: "uppercase",
              fontWeight: "400 !important  ",
            }}
          >
            Our Mission
          </Typography>

          <Divider
            sx={{
              backgroundColor: "#14b8a6 !important",
              height: "4px",
              width: "53%",
              marginTop: "0",
              marginBottom: "2rem",
              "@media (max-width: 900px)": {
                width: "100%",
                marginBottom: "0.5rem",
              },
              "@media (max-width: 600px)": {
                marginBottom: "0.5rem",
                height: "2px",
                width: "100%",
              },
            }}
          />

          <Typography
            variant="body1"
            sx={{
              color: "#000",
              "@media (max-width: 900px)": {
                textAlign: "left",
              },
              "@media (max-width: 600px)": {
                textAlign: "left",
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
    </Grid>
  );
};

export default AboutUs;
