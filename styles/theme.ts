import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const globalTheme = createTheme({
  palette: {
    primary: {
      main: '#3e63f4',
    },
    secondary: {
      main: '#53a2f4',
      dark: '#292929',
      light: '#e7e7e7'
    },
    error: {
      main: red.A400,
    },
    custom:{
      main:'#64d889',
      light:'#a4edfc'
    }
  },
  typography: {
    fontFamily: [
      "Roboto",
    ].join(","),
    h6:{
      fontWeight:"500 !important"
    },
    body2:{
      color:'#4f4f4f',
      fontWeight: 400,
      fontSize:'15px'
    }
  },
});

// Create a theme instance.
const theme = createTheme(
  {
    components: {
      // Name of the component
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.variant === 'contained' &&
              ownerState.color === 'primary' && {
                color: '#fff',
                fontSize: '1rem',
                backgroundColor: globalTheme.palette.primary.main,
                borderColor:globalTheme.palette.primary.main,
                borderRadius:'30px',
              }),
            ...(ownerState.variant === 'outlined' &&
              ownerState.color === 'primary' && {
                fontSize: '1rem',
                color: globalTheme.palette.primary.main,
                borderColor:globalTheme.palette.primary.main,
                textTransform:"capitalize",
                borderRadius:'30px',
                "&:hover":{
                  backgroundColor:globalTheme.palette.primary.main,
                  color:"#fff"
                }
              }),
          }),
        },
      },
      MuiGrid: {
        styleOverrides: {
          root:{
            "& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus": {
              outline: "none !important"
            },
            "& .MuiDataGrid-columnHeader:last-child":{
              "& .MuiDataGrid-columnHeaderTitleContainer":{
                alignItems:"center",
                justifyContent:"center"
              }
            },
            "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":{
              outline: "none !important"
            },
            '& .no-print': {
              '@media print': { display:'none !important' },
            }
            
          }
        },
      },
      MuiFormControlLabel:{
        styleOverrides:{
          root:{
            color: "rgba(0, 0, 0, 0.6)"
          }
        }
      },
      MuiMenuItem:{
        styleOverrides:{
          root:{
            textTransform:'capitalize'
          }
        }
      } 
    },
  },
  globalTheme
);


export default theme;
