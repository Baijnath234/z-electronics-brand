import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const expandedWidth = 240;
const collapsedWidth = 70;

export default function AdminLayout() {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: open ? expandedWidth : collapsedWidth,
          transition: "width 0.3s",
          "& .MuiDrawer-paper": {
            width: open ? expandedWidth : collapsedWidth,
            boxSizing: "border-box",
            background: "#1e1e2f",
            color: "white",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "width 0.3s",
          },
        }}
      >
        {/* TOP SECTION */}
        <div>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: open ? "flex-end" : "center",
              px: 1,
            }}
          >
            <IconButton onClick={toggleSidebar} sx={{ color: "white" }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>

          <List>
            <ListItemButton component={Link} to="/admin/dashboard">
              <ListItemIcon sx={{ color: "white" }}>
                <DashboardIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Dashboard" />}
            </ListItemButton>

            <ListItemButton component={Link} to="/admin/product">
              <ListItemIcon sx={{ color: "white" }}>
                <InventoryIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Product" />}
            </ListItemButton>

            <ListItemButton component={Link} to="/admin/orders">
              <ListItemIcon sx={{ color: "white" }}>
                <ShoppingCartIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Orders" />}
            </ListItemButton>

            <ListItemButton component={Link} to="/admin/users">
              <ListItemIcon sx={{ color: "white" }}>
                <PeopleIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Users" />}
            </ListItemButton>

            <ListItemButton component={Link} to="/admin/reports">
              <ListItemIcon sx={{ color: "white" }}>
                <AssessmentIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Reports" />}
            </ListItemButton>
          </List>
        </div>

        {/* BOTTOM SECTION */}
        <div>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />

          <List>
            <ListItemButton component={Link} to="/admin/settings">
              <ListItemIcon sx={{ color: "white" }}>
                <SettingsIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Settings" />}
            </ListItemButton>

            <ListItemButton component={Link} to="/admin/profile">
              <ListItemIcon sx={{ color: "white" }}>
                <AccountCircleIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Profile" />}
            </ListItemButton>
          </List>
        </div>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#f5f6fa",
          minHeight: "100vh",
        }}
      >
        {/* Top Navbar */}
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${open ? expandedWidth : collapsedWidth}px)`,
            ml: `${open ? expandedWidth : collapsedWidth}px`,
            background: "#17173fff",
            transition: "margin-left 0.3s, width 0.3s",
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap>
              Admin Panel
            </Typography>
          </Toolbar>
        </AppBar>

        <Toolbar />

        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
