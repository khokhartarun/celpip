import React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { pages } from "../data";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "next/link"; // Import Link for routing

const theme = createTheme({
  palette: {
    primary: {
      main: "#301a52", // Change this to your desired primary color
    },
    secondary: {
      main: "#ff4081", // Change this to your desired secondary color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
  },
});

// Sidebar links
const sidebarLinks = [
  { title: "CELPIP details", href: "/testdetails" },
  { title: "Practice Speaking", href: "/speaking" },
  { title: "Practice Writing", href: "/writing" },
  { title: "Test Format", href: "/testformat" },
  { title: "CLB Comparison", href: "/clbcomparison" },
  { title: "Scoring Criteria", href: "/scoringcriteria" },
  { title: "Band Descriptors", href: "/banddescriptors" },
  { title: "Listening Test", href: "/listening" },
  { title: "Reading Test", href: "/reading" },
  // { title: "Vocabulary", href: "/vocabulary" },
  { title: "Tips", href: "/tips" },
  { title: "FAQs", href: "/FAQs" },
  // { title: "Speaking Samples", href: "/samples" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElSubMenu, setAnchorElSubMenu] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenSubMenu = (event) => {
    setAnchorElSubMenu(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseSubMenu = () => {
    setAnchorElSubMenu(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: "2rem",
              }}
            >
              CELPIP
            </Typography>

            {/* Mobile Menu Icon */}
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
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {/* Sidebar Links for mobile dropdown */}
                {sidebarLinks.map((link) => (
                  <MenuItem key={link.title} onClick={handleCloseNavMenu}>
                    <Link href={link.href} passHref>
                      <Typography
                        sx={{
                          textAlign: "center",
                          textDecoration: "none",
                          color: "inherit",
                        }}
                      >
                        {link.title}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Mobile Logo */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              CELPIP
            </Typography>

            {/* Desktop Navbar Links */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Box key={page.title}>
                  {/* Wrap Button with Link for the main navigation */}
                  <Link href={page.href} passHref>
                    <Button
                      sx={{ my: 2, color: "white", display: "block" }}
                      onMouseEnter={
                        page.subOptions && page.subOptions.length > 0
                          ? handleOpenSubMenu
                          : null
                      }
                    >
                      {page.title}
                    </Button>
                  </Link>

                  {/* Render Sub-Menu if there are subOptions */}
                  {page.subOptions && page.subOptions.length > 0 && (
                    <Menu
                      anchorEl={anchorElSubMenu}
                      open={Boolean(anchorElSubMenu)}
                      onClose={handleCloseSubMenu}
                      MenuListProps={{
                        onMouseLeave: handleCloseSubMenu,
                      }}
                    >
                      {page.subOptions.map((subOption) => (
                        <MenuItem key={subOption.title} onClick={handleCloseSubMenu}>
                          <Link href={subOption.href} passref>
                            <Typography
                              sx={{
                                textAlign: "center",
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              {subOption.title}
                            </Typography>
                          </Link>
                        </MenuItem>
                      ))}
                    </Menu>
                  )}
                </Box>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default ResponsiveAppBar;
