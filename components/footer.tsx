"use client";
import { Grid, Box, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useStyles } from "@styles/customStyledComponents";

const Footer = () => {
  const [logoSize, setLogoSize] = useState(230);

  useEffect(() => {
    const updateLogoSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 320) {
        setLogoSize(125);
      } else if (screenWidth < 768) {
        setLogoSize(145);
      } else if (screenWidth < 1024) {
        setLogoSize(160);
      } else {
        setLogoSize(180);
      }
    };

    updateLogoSize();

    // Update columns on window resize
    window.addEventListener("resize", updateLogoSize);

    return () => {
      // Cleanup event listener
      window.removeEventListener("resize", updateLogoSize);
    };
  }, []);

  const classes = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      px={1}
      bgcolor="#137d71"
      color="white"
      width="100%"
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.forText}
      >
        <Grid
          item
          xs={12}
          lg={4}
          container
          display={'flex'}
          justifyContent="center"
          alignItems="center"
          px={1}
          my={2}
          sx={{
            "@media (min-width: 1200px)": {
              paddingLeft: "5%",
            },
          }}
        >
          <Image
            src="/assets/images/logo2.svg"
            alt="Butterfly Effect Logo"
            width={logoSize}
            height={logoSize}
            className="object-contain"
          />
          <Typography
            variant="body2"
            align="left"
            gutterBottom
            mt={2}
            sx={{

              textAlign: "left",
              "@media (max-width: 600px)": {
              },
            }}
          >
            Experiential education program to nurture environmental awareness via butterfly conservatory.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          lg={4}
          px={2}
          container
          justifyContent="space-evenly"
          alignItems="center"
          mt={2}
        >
          <div>
            <Link href="#about" passHref>
              <Typography variant="h5" fontWeight={600}>
                About Us
              </Typography>
            </Link>

            <div className="flex flex-col mt-2 lg:mt-6 space-y-2">
              <Link href="#about" passHref>
                <Typography variant="body1">Vision</Typography>
              </Link>
              <Link href="#about" passHref>
                <Typography variant="body1">Mission</Typography>
              </Link>
              <Link href="#team" passHref>
                <Typography variant="body1">Members</Typography>
              </Link>
            </div>
          </div>

          <div>
            <Link href="#contactUs" passHref>
              <Typography variant="h5" fontWeight={600}>
                Contact Us
              </Typography>
            </Link>

            <div className="flex flex-col mt-2 lg:mt-6 space-y-2">
              <Link href="#contactUs" passHref>
                <Typography variant="body1">Phone</Typography>
              </Link>
              <Link href="#contactUs" passHref>
                <Typography variant="body1">Email</Typography>
              </Link>
              <Link href="#contactUs" passHref>
                <Typography variant="body1">Message</Typography>
              </Link>
            </div>
          </div>
        </Grid>

        {/* 3rd column for lg screens */}

        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          lg={4}
          container
          justifyContent="center"
          alignItems="flex-start"
          mt={4}
        >
          <Typography variant="h6" justifyContent={"center"}>
            Visit Our Social Media Pages
          </Typography>

          <Box
            display="flex"
            justifyContent="space-between"
            pt={1}
            px={2}
            alignItems="center"
            width="60%"
            sx={{
              "@media (min-width: 2400px)": {
                width: "70%",
                paddingX: "40px",
              },

              "@media (min-width: 1800px)": {
                width: "68%",
                paddingX: "32px",
              },

              "@media (max-width: 1024px)": {
                width: "64%",
                paddingX: "20px",
              },

              "@media (max-width: 768px)": {
                width: "67.5%",
                paddingX: "16px",
              },

              "@media (max-width: 320px)": {
                width: "70%",
                paddingX: "0",
              },
            }}
          >
            <button
              onClick={() => window.open("https://www.linkedin.com/")}
              className="mx-2"
            >
              <img
                src="/assets/icons/linkedin.svg"
                alt="linkedin icon svg"
                className="w-10 h-10  rounded-md"
              />
            </button>

            <button
              onClick={() => window.open("https://www.instagram.com/")}
              className="mx-2"
            >
              <img
                src="/assets/icons/instagram.svg"
                alt="linkedin icon svg"
                className="w-12 h-12"
              />
            </button>

            <button
              onClick={() => window.open("https://www.facebook.com/")}
              className="mx-2"
            >
              <img
                src="/assets/icons/facebook.svg"
                alt="linkedin icon svg"
                className="w-10 h-10"
              />
            </button>

            <button
              onClick={() => window.open("https://twitter.com/")}
              className="mx-2"
            >
              <img
                src="/assets/icons/twitter-X.svg"
                alt="twitter new icon svg"
                className="w-10 h-10"
              />
            </button>
          </Box>
        </Grid>
      </Grid>

      <Box display="flex" flexDirection="column" width="90%" mt={4} mx="auto">
        <hr style={{ width: "100%", backgroundColor: "white" }} />

        <Typography variant="body1" align="center" my={2}>
          © Copyright reserved for Butterfly Effect @2023
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
