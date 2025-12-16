import { Outlet } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logo from "../../assets/images/logo-preview-black.png";

export default function UserLayout() {
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

            {/* <Box sx={{ display: "flex", gap: 1, p: 1 }}>
              <FacebookIcon sx={{ fontSize: 20 }} />
              <InstagramIcon sx={{ fontSize: 20 }} />
              <XIcon sx={{ fontSize: 20 }} />
              <WhatsAppIcon sx={{ fontSize: 20 }} />
            </Box> */}
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
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
              <Button  href="/" sx={{ fontWeight: "bold", color: "black" }}>
                <img
                  src={logo}
                  alt="Z Electronics Logo"
                  style={{
                    width: 40,
                    height: 40,
                    objectFit: "contain",
                  }}
                />
              <Typography variant="h5" fontWeight="600" color="black" mt={1.5}>
                Electronics
              </Typography>
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
              <ShoppingCartIcon />
              <Avatar sx={{ bgcolor: "#a09dd4ff" }}>P</Avatar>
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
