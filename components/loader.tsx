import { CircularProgress, Grid } from "@mui/material";

const Loader = () => {
  return (
    <Grid container
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100vh", width: "100%",
        backgroundImage: `url("/assets/images/bg.jpg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "auto 100%",
        }}>
      <CircularProgress />
    </Grid>
  );
};

export default Loader;
