"use client";

import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import { useStyles } from "@styles/customStyledComponents";
import BioCard from "./Cards/card";
import teamData from "./Team/team";
import ControlledAccordions from "./visions/accordion";
import InsetDividers, { InsetDividers2 } from "./visions/values";

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
        padding: "2rem 5rem",

        "@media (max-width: 900px)": {
          paddingTop: "5vh",
          padding: "2rem 1rem",
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
          width: "100%",
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

          "@media (max-width: 600px)": {
            flexDirection: "column",
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
            src="https://www.youtube.com/embed/xlziG5d3k2I?si=oA9HAoDrGX9FdNxd&rel=0"
            title="YouTube video player"
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
          alignSelf={'flex-start'}
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
          <ControlledAccordions />
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems="left"
        sx={{
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
            marginTop: "2rem",
            textAlign: "center",

            "@media (max-width: 900px)": {
              marginTop: "2rem",
            },
          }}
        >
          Our Values
        </Typography>
        <Grid container sx={{
          display: "flex",
        }}>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}
            display={'flex'}
            alignContent={'center'}
            justifyContent={'center'}
          >
        <InsetDividers />
        </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}
            display={'flex'}
            alignContent={'center'}
            justifyContent={'center'}>
        <InsetDividers2 />
        </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        id="team"
        xs={12}
        sx={{
          padding: "0 2rem",

          "@media (max-width: 600px)": {
            padding: "0 1rem",
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
            marginTop: "2rem",
            textAlign: "center",

            "@media (max-width: 900px)": {
              marginTop: "2rem",
            },
          }}
        >
          Our Team
        </Typography>
      </Grid>
      <Grid
        container
        spacing={3}
        display={'flex'}
        alignContent={'center'}
        justifyContent={'center'}
        sx={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",

          "@media (max-width: 600px)": {
            flexDirection: "column",
          },
        }}
      >
        {teamData?.map((member) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={3}
            display={'flex'}
            alignContent={'center'}
            justifyContent={'center'}
            sx={{
              alignSelf: "flex-start",
            }}
          >
            <BioCard
              sx={{
                flexGrow: 1,
              }}
              key={member.name}
              name={member.name}
              bio={member.bio}
              history={member.history}
              position={member.position}
              img={member.img}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default AboutUs;
