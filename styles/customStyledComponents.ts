import { makeStyles } from "@material-ui/core";
import contact from "../public/assets/images/contact.jpg";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(12),
    backgroundAttachment: "fixed",
    position: "relative",
    backgroundImage: `url(${contact.src}) !important`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

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
    marginBottom: theme.spacing(2),
    "& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root" : {
      borderRadius: "0 !important",
    },
    "& .css-z1o969-MuiInputBase-root-MuiOutlinedInput-root" : {
      borderRadius: "0 !important",
    },
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
        fontSize: "0.8rem",
      },
      "& .MuiTypography-body2": {
        fontSize: "0.8rem",
      },

      "& .MuiTypography-caption": {
        fontSize: "0.7rem",
      }
    },

    "@media (max-width: 300px)": {
      "& h1": {
        fontSize: "1.5rem",
      },

      "& h2": {
        fontSize: "1.125rem",
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
        fontSize: "0.8rem",
      },
      "& .MuiTypography-body2": {
        fontSize: "0.8rem",
      },

      "& .MuiTypography-caption": {
        fontSize: "0.7rem",
      }
    },
  },
}));
