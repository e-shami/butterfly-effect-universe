"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LaunchIcon from "@mui/icons-material/Launch";
import Image from "next/image";
import Container from "@mui/material/Container";
import Link from "next/link";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { navName: "Home", path: "/" },
  { navName: "About", path: "/#about" },
  { navName: "Contact Us", path: "/#contactUs" },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* <Typography
        variant="h6"
        sx={{ my: 2, display: "flex", justifyContent: "center" }}
      >
        <Image
          src="/assets/images/logo2.svg"
          alt="logo"
          width={40}
          height={40}
        />
      </Typography>
      <Divider /> */}
      <List>
        {navItems.map((item) => (
          <Link href={item?.path} key={item?.path} passHref={true}>
            <ListItem key={item?.navName} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item?.navName} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(5px)",
          zIndex: 10,
          padding: "0 20px",

          "@media (max-width: 600px)": {
            padding: "0",
          },
        }}
      >
        <Container maxWidth="xl" sx={{ backgroundColor: "transparent" }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "transparent",
              height: "70px",
              "@media (max-width: 600px)": {
                height: "30px",
              },
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" }, color: "#14b8a6" }}
            >
              <MenuIcon />
            </IconButton>
            <Box>
              <Link href="/" passHref={true}>
              <Typography
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }, cursor: "pointer" }}
              >
                <Image
                  src="/assets/images/logo2.svg"
                  alt="logo"
                  width={70}
                  height={70}
                  style={{ display: "inline-block" }}
                />
              </Typography>
              </Link>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Link href={item?.path} key={item?.path} passHref={true}>
                  <Button
                    key={item?.path}
                    sx={{
                      color: "#526092",
                      fontWeight: 600,
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      borderRadius: "0",
                      borderBottom: "2px solid transparent",

                      "&:hover": {
                        borderBottom: "2px solid #526092",
                      },
                    }}
                  >
                    {item?.navName}
                  </Button>
                </Link>
              ))}
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
              }}
            >
              <Link
                href="/"
                passHref={true}
                style={{
                  cursor: "pointer",
                }}
              >
                <Image
                  src="/assets/images/logo2.svg"
                  alt="Butterfly Effect Logo"
                  width={60}
                  height={60}
                />
              </Link>
            </Box>
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
                    padding: "2px 8px",
                  },
                }}
              >
                Donate
              </Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">
        <Toolbar />
      </Box>
    </>
  );
}
