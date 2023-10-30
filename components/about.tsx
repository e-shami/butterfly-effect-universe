import React from "react";
import { Grid, Paper, Typography, Button, Box } from "@mui/material";
import Image from "next/image";
import lib1 from "../public/assets/images/lib1.jpg";
import EastIcon from "@mui/icons-material/East";

const AboutUs = () => {
  return (
    <Grid container sx={{
      position: 'relative',
      backgroundColor: '#c1e5e0',

      "@media (max-width: 600px)": {
        height: 'fit-content',
      },

    }}>
      {/* Heading */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        sx={{
          display: "flex",
          alignItems: "start",
          alignContent: "start",

          "@media (max-width: 600px)": {
            height: "fit-content",
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#526092",
            textAlign: "center",
            fontSize: 38,
            fontWeight: 600,
            textTransform: "capitalize",
            marginBottom: "2rem",
            alignSelf: "flex-start",
            display: "flex",
            padding: "30px",
            flexDirection: "column",
            width: "100%",
            position: "absolute",

            "@media (max-width: 600px)": {
              fontSize: 28,
              marginBottom: "0",
              position: "relative",
              
            },
          }}
        >
          About Us
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={10}
        sx={{
          height: "100vh",
          width: "100%",
          position: "absolute",
          backgroundColor: "#c1e5e0",
          border: "1px solid #fff",
          boxShadow: "0px 0px 6px 1px #dbdbdb",
          display: "flex",
          flexDirection: "column",
          zIndex: -1,

          "@media (max-width: 600px)": {
            height: "fit-content",
          },

        }}
      ></Grid>

      {/* Content */}
      <Grid
        item
        xs={12}
        sm={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "1rem",
          borderRadius: "50p  x 0 0 50px",

          // below md
          "@media (max-width: 960px)": {
            display: "none",
            height: "fit-content",
          },
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          display="flex"
          alignSelf="flex-end"
          justifySelf="flex-end"
          sx={{
            height: "100vh",
            width: "100%",
            borderRadius: "50px 0 0 50px",
            zIndex: 0,
            backgroundSize: "cover",
            background: "none",
            display: "flex",
            justifyContent: "end",
            marginTop: '15vh',
            boxShadow: "0px 0px 6px 1px #dbdbdb",

            // below md
            "@media (max-width: 960px)": {
              height: '50vh',
              width: '100%',
              marginTop: '10vh',
              position: 'absolute',
            },
          }}
        >
          <Image
            src={lib1.src}
            alt="contact"
            width={500}
            height={500}
            style={{
              position: "absolute",
              height: "100%",
              width: "50%",
              zIndex: -1,
              borderRadius: "50px 0 0 50px",
              border: "1px solid #fff",
              boxShadow: "4px 4px 0px 0px #dbdbdb",            
            }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          justifyItems: "center",
          height: "100vh",
          zIndex: 1,
          marginRight: "-25px",

          "@media (max-width: 600px)": {
            height: "fit-content",
            marginRight: "0",
            paddingBottom: "2rem",
            position: 'relative',
          },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            height: "fit-content",
            width: "90%",
            borderRadius: "30px",
            zIndex: 3,
            padding: "2rem !important",
            marginRight: "-100%",
            backgroundColor: "rgba(255, 255, 255, 0.75)",
            border: "1px solid #fff",
            boxShadow: "0px 0px 6px 1px #dbdbdb",

            // below md
            "@media (max-width: 960px)": {
              marginRight: "0",
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#526092",
              textAlign: "center",
              fontSize: 32,
              fontWeight: 600,
              textTransform: "capitalize",
              marginBottom: "2rem",
              alignSelf: "flex-start",
              display: "flex",
              flexDirection: "column",
              width: "100%",

              "@media (max-width: 960px)": {
                fontSize: 24,
                marginBottom: "0.5rem",
              },
            }}
          >
            Our Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "black",
              textAlign: "left",
              fontSize: 18,
              textTransform: "capitalize",
              marginBottom: "2rem",
              alignSelf: "flex-start",
              display: "flex",
              flexDirection: "column",
              width: "100%",

              "@media (max-width: 960px)": {
                fontSize: 14,
                marginBottom: "0.5rem",
              },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            corrupti quos. Ipsam aliquid rem consequatur? Id consectetur, quis
            obcaecati animi sunt suscipit possimus hic blanditiis modi esse
            eligendi commodi neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            corrupti quos. Ipsam aliquid rem consequatur? Id consectetur, quis
            obcaecati animi sunt suscipit possimus hic blanditiis modi esse
            eligendi commodi neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            corrupti quos. Ipsam aliquid rem consequatur? Id consectetur, quis
            obcaecati animi sunt suscipit possimus hic blanditiis modi esse
            eligendi commodi neque.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#526092",
              color: "#fff",
              borderRadius: "10px",
              padding: "0.6rem",
              alignSelf: "flex-start",
              display: "flex",
              flexDirection: "row",
              fontSize: "1.3rem",

              "@media (max-width: 600px)": {
                fontSize: "1rem",
                padding: "0.4rem",
              },
            }}
          >
            Become a Patron
            {/* arrow right */}
            <EastIcon
              sx={{
                fontSize: "2rem",
                marginLeft: "0.6rem",

                "@media (max-width: 600px)": {
                  fontSize: "1.5rem",
                  marginLeft: "0.4rem",
                },
              }}
            />
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
