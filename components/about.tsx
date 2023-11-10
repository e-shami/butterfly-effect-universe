"use client";

import React from "react";
import { Grid, Typography, Link, Divider } from "@mui/material";
import mission from "../public/assets/images/about1.png";
import Image from "next/image";
import { useStyles } from "@styles/customStyledComponents";

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Grid
    container
    className={classes.forText}
    id = "about"
    sx={{
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "13vh",
      paddingBottom: "15vh",

      "@media (max-width: 600px)": {
          height: "fit-content",
          borderRadius: "0 0 50px 0",
          paddingBottom: "5vh",

      },
    }}
    >
    <Typography variant="h3" sx={{ color: "#000", textTransform: 'uppercase', display: 'flex', justifyContent: 'center', width: '100%' }}>
      About Us
    </Typography>
      <Grid item xs={10} sm={10} md={10} lg={10} xl={10} 
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #14b8a6", boxShadow: "0px 0px 6px 1px rgba(0,0,0,0.75)",
          backgroundColor: "#14b8a6",

          "@media (max-width: 600px)": {
            flexDirection: "column",
            padding: "1rem",
            backgroundColor: "#14b8a6",
          },
        }}
      >
        
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}
          display="flex"
          alignItems="center"

          sx={{
            "@media (max-width: 600px)": {
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
          }}
          >
          <Image src={mission.src} alt="mission"
          width={500}
          height={500}
          style={{ width: "90%" }}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems="left"
          sx={{ paddingRight: "2rem", paddingTop: "2rem",
          "@media (max-width: 600px)": {
            display: "flex",
            justifyContent: "left",
            alignItems: "left",
            padding: "1rem",
          },
        }}
          >
          <Typography variant="h3" sx={{ color: "#fff !important", textTransform: 'uppercase', fontWeight: "400 !important  " }}>
            Our Story
          </Typography>

          <Divider sx={{ backgroundColor: "#fff !important", height: "4px", width: "45%", marginTop: "0", marginBottom: "2rem" }} />

          <Typography variant="body1" sx={{ color: "#fff", textAlign: 'justify',
          "@media (max-width: 600px)": {
            textAlign: "left",
          },
        }}>
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
