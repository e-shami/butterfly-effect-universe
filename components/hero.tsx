import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import lib6 from "../public/assets/images/lib7.jpg";
import Image from "next/image";

const Hero = () => {
  const heroSectionStyle = {
    backgroundImage: `url(${lib6.src}) !important`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "100vh",

    "@media (max-width: 600px)": {
      // height: "fit-content",
    },
  };
  
  const heroContentStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    borderRadius: "30px",
    padding: "2.5rem",
    border: "1px solid #fff",
    boxShadow: "0px 0px 6px 1px rgba(0,0,0,0.75)",

    "@media (max-width: 600px)": {
      padding: "0.5rem",
    },
  };

  const heroTextStyle = {
    color: "black",
    textAlign: "left",
    fontSize: 18,

    "@media (max-width: 600px)": {
      fontSize: 14,
    },
  };

  const heroH1Style = {
    color: "#526092",
    textAlign: "center",
    fontSize: 38,
    fontWeight: 600,
    textTransform: "capitalize",
    marginBottom: "2rem",
    alignSelf: "center",

    "@media (max-width: 600px)": {
      fontSize: 24,
      marginBottom: "0.5rem",
    },
  };

  return (
        <Grid container justifyContent="center" alignItems="center" sx={heroSectionStyle}>
          
          {/* <Image
                src={lib6.src}
                alt="contact"
                width={500}
                height={500}
                style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    zIndex: -1,
                }}
            /> */}
          <Grid item xs={10} sm={8} md={6}>
            <Paper style={heroContentStyle}>
              <Typography variant="h2" sx={heroH1Style}>
                Butterfly Effect Universe
              </Typography>
              <Typography variant="body1" sx={heroTextStyle}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid sed
                totam quibusdam molestiae eius ullam iste necessitatibus quidem
                perferendis autem veritatis libero nesciunt nihil non, inventore fuga,
                ipsam voluptates illum. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Aliquid sed totam quibusdam molestiae eius ullam
                iste necessitatibus quidem perferendis autem veritatis libero nesciunt
                nihil non, inventore fuga, ipsam voluptates illum.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
  );
};

export default Hero;
