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
      }}
    >
      <Container maxWidth="xl" sx={{ backgroundColor: "transparent" }}>
        <Toolbar disableGutters sx={{ backgroundColor: "transparent", height: "85px" }}>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Image
              src="/assets/images/logo.svg"
              alt="Butterfly Effect Logo"
              width={
                window.innerWidth < screen.sm && window.innerWidth < screen.md
                  ? 120
                  : 140
              }
              height={
                window.innerWidth < screen.sm && window.innerWidth < screen.md
                  ? 120
                  : 140
              }
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              src="/assets/images/logo.svg"
              alt="Butterfly Effect Logo"
              width={
                window.innerWidth <= screen.sm && window.innerHeight < 678
                  ? 100
                  : 150
              }
              height={
                window.innerWidth <= screen.sm && window.innerHeight < 678
                  ? 100
                  : 150
              }
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.navName}
                onClick={() => handleNavNavigation(page.path)}
                sx={{
                  my: 2,
                  color: "#446580",
                  display: "block",
                  fontFamily: "Roboto",
                  mx: 2,
                  fontSize: 22,
                  fontWeight: "Bold",
                }}
              >
                {page.navName}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              padding: 1,
              marginLeft: 1,
              alignContent: "center",
              border: "2px solid #446580",
              backgroundColor: "rgb(220,220,220)",
              borderRadius: "8px",
              maxWidth: 250,
              [theme.breakpoints.down("sm")]: {
                padding: theme.spacing(1),
                maxWidth: "100%",
              },
              "&:hover": {
                backgroundColor: "white",
                color: "rgb(0, 94, 168)",
                "& h6": {
                  color: "rgb(0, 94, 168)",
                },
              },
            }}
          >
            <Link href="/donate" className="font-medium">
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: 600,
                  color: "#446580",
                  letterSpacing: ".3rem",
                  textAlign: "center",
                  textDecoration: "none",
                  [theme.breakpoints.down("sm")]: {
                    maxWidth: "100%",
                    fontSize: "12px",
                    letterSpacing: ".2rem",
                  },
                }}
              >
                Invest Today
                <LaunchIcon
                  sx={{
                    ml: 2,
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "16px",
                    },
                  }}
                />
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
