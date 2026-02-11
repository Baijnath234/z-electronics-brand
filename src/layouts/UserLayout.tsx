import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Avatar,
  Divider,
  MenuItem,
  ListItemIcon,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../assets/images/Content-Creator-Project.png";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from "../context/AuthContext";
import { useState } from "react";


export default function UserLayout() {


  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();          // clear context + localStorage
    handleClose();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="p-4 bg-white shadow ">
        {/* Top Discount Bar */}
        <AppBar
          position="fixed"
          sx={{
            top: 0,
            left: 0,
            width: "100%",
            bgcolor: "#dfdef1ff",
            color: "#0c076dff",
            boxShadow: 2,
            zIndex: 1300,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "#020205ff", fontSize: 12, p: 1 }}>
              Get Extra 5% Off On Prepaid Orders | Code:{" "}
              <span style={{ fontWeight: "bold" }}>ZNEWPRO</span> | Shop Now
            </Typography>
          </Box>
        </AppBar>

        {/* Main Navbar */}
        <AppBar
          position="fixed"
          sx={{
            top: 35,
            left: 0,
            width: "100%",
            bgcolor: "white",
            color: "black",
            zIndex: 1300,
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
              <Button href="/" sx={{ fontWeight: "bold", color: "black" }}>
                <img
                  src={logo}
                  alt="Grotta Logo"
                  style={{
                    width: 90,
                    height: 60,
                    // objectFit: "contain",
                  }}
                />
              </Button>
            </Box>

            {/* Menu */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <Button href="/" sx={{ fontWeight: "bold", color: "black" }}>
                Home
              </Button>
              <Button
                href="/product"
                sx={{ fontWeight: "bold", color: "black" }}
              >
                Product
              </Button>
              <Button href="/about" sx={{ fontWeight: "bold", color: "black" }}>
                About
              </Button>
              <Button
                href="/client"
                sx={{ fontWeight: "bold", color: "black" }}
              >
                Client
              </Button>
              <Button
                href="/contact"
                sx={{ fontWeight: "bold", color: "black" }}
              >
                Contact
              </Button>
            </Box>

            {/* Icons */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton sx={{ display: { md: "none" } }}>
                <MenuIcon />
              </IconButton>

              <FavoriteBorderIcon />
              <IconButton onClick={() => navigate("/cart")}>
                <ShoppingCartIcon />
              </IconButton>
              {user ? (
                <>
                  {/* PROFILE AVATAR */}
                  <IconButton onClick={handleProfileClick}>
                    <Avatar sx={{ bgcolor: "#a09dd4ff" }}>
                      {user.name?.charAt(0).toUpperCase()}
                    </Avatar>
                  </IconButton>

                  {/* PROFILE MENU */}
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                    PaperProps={{
                      sx: {
                        borderRadius: 2,
                        minWidth: 180,
                      },
                    }}
                  >
                    {/* USER NAME */}
                    <Box sx={{ px: 2, py: 1 }}>
                      <Typography fontWeight="bold">{user.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {user.email}
                      </Typography>
                    </Box>

                    <Divider />

                    {/* SETTINGS */}
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        navigate("/settings");
                      }}
                    >
                      <ListItemIcon>
                        <SettingsIcon fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </MenuItem>

                    {/* LOGOUT */}
                    <MenuItem onClick={handleLogout}>
                      <ListItemIcon>
                        <LogoutIcon fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                /* LOGIN ICON */
                <IconButton onClick={() => navigate("/login")}>
                  <LoginIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </header>

      {/* Page Content */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
