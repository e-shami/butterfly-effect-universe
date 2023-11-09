"use client";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Typography, Box, Link } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import Divider from "@mui/material/Divider";
import contactImage from "../public/assets/images/contact.png";
import Image from "next/image";
import { useStyles } from "@styles/customStyledComponents";

const Contact = () => {
  const classes = useStyles();

  return (
    <div id="contactUs" className={classes.root}>
      <Grid container className={classes.formContainer}>
        <Grid
          item
          xs={12}
          md={4}
          lg={3}
          className={classes.forText}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            justifySelf: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "10px",
            padding: "1rem",
            width: "100%",
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
            height: 'fit-content',

          }}
        >
          {/* location icon */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              marginBottom: "1rem",
              
              "@media (max-width: 300px)": {
                justifyContent: "center",
              },
            }}
          >
            <PlaceIcon
              sx={{
                fontSize: "2rem",
                marginLeft: "2rem",

                "@media (max-width: 300px)": {
                  marginLeft: "0",
                },
              }}
            />
            <Box
              sx={{
                marginLeft: "1rem",
              }}
            >
              <Typography
                variant="body1"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                Location
              </Typography>
              <Typography variant="body1" gutterBottom>
                123 Main Street
              </Typography>
            </Box>
          </Box>

          {/* phone icon */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              marginBottom: "1rem",
              
              "@media (max-width: 300px)": {
                justifyContent: "center",
              },
            }}
          >
            <PhoneIcon
              sx={{
                fontSize: "2rem",
                marginLeft: "2rem",

                "@media (max-width: 300px)": {
                  marginLeft: "0",
                },
              }}
            />
            <Box
              sx={{
                marginLeft: "1rem",
              }}
            >
              <Typography variant="body1" gutterBottom>
                Phone
              </Typography>
              <Typography variant="body1" gutterBottom>
                123-456-7890
              </Typography>
            </Box>
          </Box>

          {/* email icon */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              marginBottom: "1rem",

              "@media (max-width: 300px)": {
                justifyContent: "center",
              },
            }}
          >
            <EmailIcon
              sx={{
                fontSize: "2rem",
                marginLeft: "2rem",
                
                "@media (max-width: 300px)": {
                  marginLeft: "0",
                },
              }}
            />
            <Box
              sx={{
                marginLeft: "1rem",
              }}
            >
              <Typography variant="body1" gutterBottom>
                Email
              </Typography>
              <Typography variant="body1" gutterBottom>
                abc@gmail.com
              </Typography>
            </Box>
          </Box>

          {/* website */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              marginBottom: "1rem",

              "@media (max-width: 300px)": {
                justifyContent: "center",
              },
            }}
          >
            <LanguageIcon
              sx={{
                fontSize: "2rem",
                marginLeft: "2rem",
                
                "@media (max-width: 300px)": {
                  marginLeft: "0",
                },
              }}
            />
            <Box
              sx={{
                marginLeft: "1rem",
              }}
            >
              <Typography variant="body1" gutterBottom>
                Website
              </Typography>
              <Typography variant="body1" gutterBottom>
                www.abc.com
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={5}
          className={classes.forText}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "10px",
            padding: "2rem !important",
            width: "100%",
            display: "flex",    
            flexDirection: "column",
            height: 'fit-content',
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',

            "@media (max-width: 600px)": {
                marginTop: '2rem',
            }
          }}
          
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: "2px",
            }}
          >
            Contact Us
          </Typography>
          <Divider
            sx={{
              color: "#14b8a6",
              backgroundColor: "#14b8a6",
              height: "2.5px",
              mb: "2rem",
            }}
          />
          <form>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              className={classes.formField}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              className={classes.formField}
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              className={classes.formField}
            />
            <Link
              sx={{
                backgroundColor: "#14b8a6",
                color: "#fff",
                fontSize: "24px",
                padding: "5px 25px 5px 25px",
                cursor: "pointer",
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Submit
            </Link>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
