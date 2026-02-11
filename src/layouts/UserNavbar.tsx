import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Avatar,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function UserNavbar() {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#dfdef1ff",
          color: "#0c076dff",
          boxShadow: 2,
        }}
      >
        <Box sx={{ display: "flex", justifyContent:'space-between'}}>
          <Typography sx={{ color: "#4f46e5", fontSize: 12, fontWeight:'bold', p:1}}>
            30% discount on all products special for November!
          </Typography>
           <Box sx={{ display: "flex", justifyContent:'space-between', p:1, gap:1}}>
          {/* FacebookIcon */}
          <FacebookIcon sx={{fontSize:20}}/>

          {/* InstagramIcon */}
          <InstagramIcon sx={{fontSize:20}}/>

          {/* XIcon */}
          <XIcon sx={{fontSize:20}}/>
          
          {/* WhatsAppIcon */}
          <WhatsAppIcon sx={{fontSize:20}}/>
        </Box>
        </Box>

       
      </AppBar>
      
      <AppBar
        position="static"
        sx={{
          bgcolor: "white",
          color: "black",
          boxShadow: 2,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <HeadphonesIcon sx={{ color: "#4f46e5", fontSize: 30 }} />
            <Typography variant="h5" fontWeight="700">
              Z Electronics
            </Typography>
          </Box>

          {/* Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            <Button href="/" sx={{ fontWeight: "bold" }}>Home</Button>
            <Button href="/product" sx={{ fontWeight: "bold" }}>Product</Button>
            <Button href="/client" sx={{ fontWeight: "bold" }}>About</Button>
            <Button href="/contact" sx={{ fontWeight: "bold" }}>Contact</Button>
          </Box>

          <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-around', gap: 2 }}>
            {/* Mobile Menu Icon */}
            <IconButton sx={{ display: { md: "none" } }}>
              <MenuIcon />
            </IconButton>

            {/* Wishlist */}
            <FavoriteBorderIcon />

            {/* Cart */}
            <ShoppingCartIcon />

            {/* Profile */}
            <Avatar sx={{ bgcolor: "#4f46e5" }}>U</Avatar>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ width: "100%", py: 10, background: "#ffffff" }}>
        <Box sx={{ maxWidth: 1400, mx: "auto", px: 2 }}>
          <Grid
            spacing={6}
            alignItems="center"
            direction="row"
            wrap="nowrap"
            justifyContent="center"
          >
            {/* LEFT CONTENT */}
            <Grid
              width={"100%"}
              sx={{ flex: 1, textAlign: "center" }}
            >
              <Typography variant="h4" fontWeight={800} mb={2} color="#0f172a">
                Expert Support
              </Typography>

              <Typography color="text.secondary" mb={3}>
                Faulty phone battery? Slow laptop? We have in-house tech experts
                who can assist you with reliable solutions and professional
                guidance.
              </Typography>

              <Typography
                variant="subtitle1"
                fontWeight={800}
                mb={1}
                color="#0f172a"
              >
                OUR LOCATIONS
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Z3 Anywhere St, <br />
                Any City, Any Country <br />
                (+91) 456 789
              </Typography>

              <Typography variant="body2" color="text.secondary" mt={1}>
                Z5 Anywhere St, <br />
                Any City, Any Country <br />
                (+91) 456 789
              </Typography>

              <Button
                variant="contained"
                sx={{
                  mt: 4,
                  borderRadius: 8,
                  px: 4,
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Visit Our Stores
              </Button>
            </Grid>

            {/* RIGHT IMAGE */}
            <Grid >
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 260, sm: 320, md: 420 },
                  borderRadius: "40px",
                  overflow: "hidden",
                  boxShadow: 3,
                }}
              >
                <img
                  src={''}
                  alt="Expert Support"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
