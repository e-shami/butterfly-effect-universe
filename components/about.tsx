import React from "react";
import { Grid, Paper, Typography, Link } from "@mui/material";
import Image from "next/image";
import lib1 from "../public/assets/images/lib1.jpg";
import mission from "../public/assets/images/b.jpg";
import EastIcon from "@mui/icons-material/East";

const AboutUs = () => {
  return (
    <Grid
    container
    id = "about"
    sx={{
      position: "relative",
      zIndex: -1,
      height: "130vh",
      "@media (max-width: 600px)": {
        height: "fit-content",
      },
    }}
    >
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
          marginBottom: "5vh",

          "@media (max-width: 600px)": {
            height: "fit-content",
            marginBottom: "0",
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
        xs={0}
        sm={0}
        md={10}
        sx={{
          height: "120vh",
          width: "100%",
          position: "absolute",
          backgroundColor: "#c1e5e0",
          border: "1px solid #fff",
          boxShadow: "0px 0px 6px 1px #dbdbdb",
          display: "flex",
          flexDirection: "column",
          zIndex: -1,
          borderRadius: "0 0 50px 0",

          "@media (max-width: 960px)": {
            height: "120vh",
          },
          
          "@media (max-width: 600px)": {
            height: "85vh",
          },

        }}
      ></Grid>

      <Grid
        item
        xs={12}
        sm={8}
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
          position: "relative",

          "@media (max-width: 960px)": {
            flexDirection: "column-reverse",
          },

          "@media (max-width: 600px)": {
            height: "fit-content",
            marginRight: "0",
            paddingBottom: "2rem",
          },
        }}
      >
        <Paper
          sx={{

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            justifySelf: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "10px",
            padding: "2rem",
            width: "80%",
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
            height: 'fit-content',
            position: "relative",
            // below md
            "@media (max-width: 600px)": {
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

              "@media (max-width: 600px)": {
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

              "@media (max-width: 600px)": {
                fontSize: 14,
                marginBottom: "0.5rem",
              },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            corrupti quos. Ipsam aliquid rem consequatur? Id consectetur, quis
            obcaecati animi sunt suscipit possimus hic blanditiis modi esse
            eligendi commodi neque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eos, corrupti quos. Ipsam aliquid rem consequatur?
            Id consectetur, quis obcaecati animi sunt suscipit possimus hic
            blanditiis modi esse eligendi commodi neque.
          </Typography>
          <Link
            sx={{
              backgroundColor: "#526092",
              color: "#fff",
              borderRadius: "10px",
              padding: "0.6rem",
              alignSelf: "flex-start",
              display: "flex",
              flexDirection: "row",
              fontSize: 18,
              textDecoration: "none",
              cursor: "pointer",
              width: "fit-content",

              "@media (max-width: 600px)": {
                fontSize: 14,
                padding: "0.4rem",
                alignSelf: "flex-end",
              },
            }}
          >
            Become a Patron
            {/* arrow right */}
            <EastIcon
              sx={{
                fontSize: 24,
                marginLeft: "0.6rem",
                display: "flex",
                alignSelf: "center",

                "@media (max-width: 600px)": {
                  fontSize: 18,
                  marginLeft: "0.4rem",
                },
              }}
            />
          </Link>
        </Paper>
      </Grid>
      {/* Content */}
      <Grid
        item
        xs={12}
        sm={4}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "1rem",
          borderRadius: "50p  x 0 0 50px",
          height: "100vh",
          position: "relative",
          // below md


          "@media (max-width: 600px)": {
            display: "none",
            height: "fit-content",
          },
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          display="flex"
          alignSelf="flex-end"
          justifySelf="flex-end"
          sx={{
            height: "100vh !important",
            width: "100%",
            borderRadius: "50px 0 0 50px",
            zIndex: 1,
            // backgroundSize: "cover",
            display: "flex",
            // justifyContent: "end",
            boxShadow: "0px 0px 6px 1px #dbdbdb",
            backgroundImage: `url(${mission.src}) !important`,
            // backgroundAttachment: "fixed !important",
            position: "relative",
            backgroundPosition: "bottom !important",
            backgroundSize: "cover !important",

            // below md
            "@media (max-width: 960px)": {
              height: "auto",
              width: "100%",
              // marginTop: "-90vh",
              // borderRadius: 0,
              zIndex: -1,
            },

            "@media (max-width: 600px)": {
              display: 'none',
            },


          }}
        >
          {/* <Image
            src={lib1.src}
            alt="contact"
            width={500}
            height={500}
            style={{
              position: "absolute",
              height: "100%",
              width: "60%",
              zIndex: -1,
              borderRadius: "50px 0 0 50px",
              border: "1px solid #fff",
              boxShadow: "4px 4px 0px 0px #dbdbdb",
            }} */}
          {/* /> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
