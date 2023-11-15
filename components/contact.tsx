"use client";

import { Grid, TextField, Typography, Box, Link } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import Divider from "@mui/material/Divider";
import { useStyles } from "@styles/customStyledComponents";

const Contact = () => {
  const classes = useStyles();

  return (
    <div id="contactUs" className={classes.root}>
      <Grid container className={classes.formContainer}>
        <Grid
          item
          xs={12}
          sm={6}
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
              <Typography variant="body1" 
              sx={{ fontWeight: "bold" }}
              gutterBottom>
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
              <Typography variant="body1"
                 sx={{ fontWeight: "bold" }}
                 gutterBottom>
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
              <Typography variant="body1"
                sx={{ fontWeight: "bold" }}
               gutterBottom>
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
          sm={8}
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
                textAlign: 'center',
            }
          }}
          
        >
          <Typography
            variant="h4"
            sx={{
              color: "#526092",
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
              size="small"
              fullWidth
              className={classes.formField}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              size="small"
              className={classes.formField}
              />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              size="small"
              multiline
              rows={4}
              className={classes.formField}
              />
            <Link
              sx={{
                color: "#fff",
                backgroundColor: "#526092 !important",
                padding: "5px 25px 5px 25px",
                cursor: "pointer",
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transitionDelay: "0.025s",

                "&:hover": {
                  backgroundColor: "#14b8a6 !important",
                  color: "#fff",
                },
              }}
              >
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Submit
                </Typography>
            </Link>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
