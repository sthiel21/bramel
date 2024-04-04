import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const pages = ["Über TSV Bramel", "Hallenplan", "Geschichte"];
const vereinsbereicheOptions = [
  "Arbeitsdienst",
  "Boden- und Geräteturnen",
  "Boule",
  "Eltern-Kind Turnen",
  "Fußball",
  "Kinderleichtathletik",
  "Kinderschwimmen",
  "Kindersport",
  "Tai Chi",
  "Volleyball",
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElVereinsbereiche, setAnchorElVereinsbereiche] =
    useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenVereinsbereicheMenu = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorElVereinsbereiche(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseVereinsbereicheMenu = () => {
    setAnchorElVereinsbereiche(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#2b4d99", marginBottom: "0" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <img
            src="/logo.png" // Assuming your logo is in the public folder
            alt="TSV Bramel Logo"
            style={{ width: "4em", height: "auto", marginRight: "1em" }}
          />

          {/* Name neben dem Logo */}
          <Typography
            variant="h6"
            noWrap
            sx={{
              color: "white",
              fontWeight: 700,
              textDecoration: "none",
              marginRight: "5em",
            }}
          >
            TSV Bramel
          </Typography>

          {/* ... (existing code) */}

          {/* Custom Buttons */}
          {pages.map((page, index) => (
            <Button
              key={page}
              sx={{
                my: 2,
                mx: 1,
                color: "white",
                display: "block",
              }}
            >
              {page}
            </Button>
          ))}

          {/* Dropdown "Vereinsbereiche" */}
          <Button
            onClick={handleOpenVereinsbereicheMenu}
            sx={{ my: 2, color: "white", display: "block", marginBottom: "1.57em", marginLeft: "0.9em"}}
          >
            Vereinsbereiche <ArrowDropDownIcon />
          </Button>
          <Menu
            id="menu-vereinsbereiche"
            anchorEl={anchorElVereinsbereiche}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElVereinsbereiche)}
            onClose={handleCloseVereinsbereicheMenu}
          >
            {vereinsbereicheOptions.map((option) => (
              <MenuItem key={option} onClick={handleCloseVereinsbereicheMenu}>
                <Typography textAlign="center">{option}</Typography>
              </MenuItem>
            ))}
          </Menu>

          {/* ... (existing code) */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
