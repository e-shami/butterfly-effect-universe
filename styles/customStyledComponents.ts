import { makeStyles } from "@material-ui/core";
import contactImage from "../public/assets/images/contact.png";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${contactImage.src}) !important`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(12),
    backgroundAttachment: "fixed",

    "@media (max-width: 600px)": {
      height: "fit-content",
    },
  },
  formContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    width: "100%",
  },
  formField: {
    // color: "#000",
    marginBottom: theme.spacing(2),
  },

  forText: {
    "& h1": {
      color: "#526092",
      fontSize: "3.75rem",
      fontWeight: "bold",
      marginBottom: theme.spacing(2),
    },
    
    "& h2": {
      color: "#526092",
      fontSize: "2.5rem",
      fontWeight: "bold",
    },

    "& h3": {
      color: "#526092",
      fontSize: "2.5rem",
      fontWeight: "bold",
    },

    "& h4": {
      fontSize: "1.875rem",
    },

    "& h5": {
      fontSize: "1.6rem",
    },

    "& h6": {
      fontSize: "1.4rem",
    },

    "& .MuiTypography-body1": {
      fontSize: "1rem",
    },
    "& .MuiTypography-body2": {
      fontSize: "1rem",
    },
    "& .MuiTypography-caption": {
      fontSize: "1rem",
    },

    "@media (max-width: 1200px)": {
      "& h1": {
        fontSize: "3rem",
      },

      "& h2": {
        fontSize: "2.5rem",
      },

      "& h3": {
        fontSize: "2rem",
      },

      "& h4": {
        fontSize: "1.5rem",
      },

      "& h5": {
        fontSize: "1.33rem",
      },

      "& h6": {
        fontSize: "1.125rem",
      },

      "& .MuiTypography-body1": {
        fontSize: "1rem",
      },
      "& .MuiTypography-body2": {
        fontSize: "1rem",
      },

      "& .MuiTypography-caption": {
        fontSize: "1rem",
      }
    },

    "@media (max-width: 768px)": {
      "& h1": {
        fontSize: "2rem",
      },

      "& h2": {
        fontSize: "1.875rem",
      },

      "& h3": {
        fontSize: "1.5rem",
      },

      "& h4": {
        fontSize: "1.5rem",
      },

      "& h5": {
        fontSize: "1rem",
      },

      "& h6": {
        fontSize: "0.84rem",
      },

      "& .MuiTypography-body1": {
        fontSize: "12px",
      },
      "& .MuiTypography-body2": {
        fontSize: "12px",
      },

      "& .MuiTypography-caption": {
        fontSize: "11px",
      }
    },

    "@media (max-width: 300px)": {
      "& h1": {
        fontSize: "1.5rem",
      },

      "& h2": {
        fontSize: "1.25rem",
      },

      "& h3": {
        fontSize: "1.125rem",
      },

      "& h4": {
        fontSize: "1.06rem",
      },

      "& h5": {
        fontSize: "0.94rem",
      },

      "& h6": {
        fontSize: "0.79rem",
      },

      "& .MuiTypography-body1": {
        fontSize: "12px",
      },
      "& .MuiTypography-body2": {
        fontSize: "12px",
      },

      "& .MuiTypography-caption": {
        fontSize: "11px",
      }
    },
  },
}));
