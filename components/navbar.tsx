// "use client";

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import LaunchIcon from "@mui/icons-material/Launch";
// import Image from "next/image";
// import { CssBaseline } from "@material-ui/core";

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

// const drawerWidth = 240;
// const navItems = ["Home", "About", "Contact"];

// export default function DrawerAppBar(props: Props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Typography
//         variant="h6"
//         sx={{ my: 2, display: "flex", justifyContent: "center" }}
//       >
//         <Image
//           src="/assets/images/logo2.svg"
//           alt="logo"
//           width={40}
//           height={40}
//         />
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: "center" }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         // backgroundColor: "white",
//         background:
//           "#fff",
//         // borderBottom: "1px solid #14b8a6",
//         backdropFilter: "blur(1px)",
//         position: "fixed",
//         width: "100%",
//         zIndex: 5,
//         padding: "0 !important",
//       }}
//     >
//       <CssBaseline />
//       <AppBar
//         component="nav"
//         sx={{ background: "transparent", padding: "0 40px" }}
//       >
//         <Toolbar
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//           }}
//         >
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" }, color: "#14b8a6"}}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Box>
//             <Typography
//               // variant="h6"
//               // component="div"
//               sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
//             >
//               <Image
//                 src="/assets/images/logo2.svg"
//                 alt="logo"
//                 width={70}
//                 height={70}
//                 style={{ display: "inline-block" }}
//               />
//             </Typography>
//           </Box>
//           <Box sx={{ display: { xs: "none", sm: "block" } }}>
//             {navItems.map((item) => (
//               <Button
//                 key={item}
//                 sx={{
//                   color: "#14b8a6",
//                   fontWeight: 600,
//                   paddingLeft: "15px",
//                   paddingRight: "15px",
//                   borderRadius: "0",
//                   borderBottom: "2px solid transparent",

//                   "&:hover": {
//                     borderBottom: "2px solid #14b8a6",
//                   },
//                 }}
//               >
//                 {item}
//               </Button>
//             ))}
//           </Box>
//           <Button
//             endIcon={<LaunchIcon />}
//             sx={{
//               color: "#14b8a6",
//               backgroundColor: "#fff !important",
//               fontWeight: 600,
//               borderRadius: "0",
//               border: "2px solid #14b8a6",
//               padding: "5px 20px",
              
              
//               "&:hover": {
//                 backgroundColor: "#14b8a6 !important",
//                 border: "2px solid #14b8a6",
//                 color: "#fff",
//                 transitionDelay: "0.025s",
//               },
//             }}
//           >
//             Donate
//           </Button>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//       <Box component="main">
//         <Toolbar />
//       </Box>
//     </Box>
//   );
// }


"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import LaunchIcon from "@mui/icons-material/Launch";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

const pages = [
  { navName: "Home", path: "/" },
  { navName: "About", path: "/#about" },
  { navName: "Contact Us", path: "/#contactUs" },
];
const screen = {
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};
function ResponsiveAppBar() {
  const theme = useTheme();

  const [deviceScreen, setDeviceScreen] = React.useState({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    const updateDeviceScreen = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      setDeviceScreen({
        width: screenWidth,
        height: screenHeight,
      })
    };

    updateDeviceScreen();

    // Update columns on window resize
    window.addEventListener("resize", updateDeviceScreen);

    return () => {
      // Cleanup event listener
      window.removeEventListener("resize", updateDeviceScreen);
    };
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (path: string) => {
    setAnchorElNav(null);
    handleNavNavigation(path);
  };

  const handleNavNavigation = (path: string) => {
    window.location.href = path;
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(5px)",
        zIndex: theme.zIndex.drawer + 1,
        padding: "0 20px",

        "@media (max-width: 600px)": {
          padding: "0",
        },
      }}
    >
      <Container maxWidth="xl" sx={{ backgroundColor: "transparent" }}>
        <Toolbar disableGutters sx={{ backgroundColor: "transparent", height: "70px",
        "@media (max-width: 600px)": {
          height: "30px",
        },
      }}>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Image
              src="/assets/images/logo2.svg"
              alt="Butterfly Effect Logo"
              width={
                deviceScreen.width < screen.sm && deviceScreen.width < screen.md
                  ? 80
                  : 80
              }
              height={
                deviceScreen.width < screen.sm && deviceScreen.width < screen.md
                  ? 80
                  : 80
              }
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" },
          "@media (max-width: 600px)": {
            display: 'flex',
          }
        }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                color: "#526092",
                display: { xs: "flex", md: "none" },

              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.navName}
                  onClick={() => handleCloseNavMenu(page.path)}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      color: "#446580",
                      fontFamily: "Roboto",
                      fontWeight: "Bold",
                    }}
                  >
                    {page.navName}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Image
              src="/assets/images/logo2.svg"
              alt="Butterfly Effect Logo"
              width={
                deviceScreen.width <= screen.sm && deviceScreen.height < 678
                  ? 60
                  : 60
              }
              height={
                deviceScreen.width <= screen.sm && deviceScreen.height   < 678
                  ? 60
                  : 60
              }
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page.navName}
                onClick={() => handleNavNavigation(page.path)}
                sx={{
                  color: "#526092",
                  fontWeight: 700,
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  borderRadius: "0",
                  borderBottom: "2px solid transparent",
                  fontSize: "0.8rem",

                  "&:hover": {
                    borderBottom: "2px solid #526092",
                  },
                }}
              >
                {page.navName}
              </Button>
            ))}
          </Box>

          <Box
          >
            <Link href="/donate" className="font-medium">
          <Button
            endIcon={<LaunchIcon />}
            sx={{
              color: "#fff",
              backgroundColor: "#526092 !important",
              fontWeight: 600,
              borderRadius: "0",
              border: "2px solid #526092",
              padding: "5px 20px",
              
              
              "&:hover": {
                backgroundColor: "#14b8a6 !important",
                border: "2px solid #14b8a6",
                color: "#fff",
                transitionDelay: "0.025s",
              },

              "@media (max-width: 600px)": {
                fontSize: "0.8rem",
                padding: "2px 8px"
              },
            }}
          >
            Donate
          </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;