import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
} from "@mui/material";

// NEW MUI ICONS
import EarbudsIcon from "@mui/icons-material/Earbuds";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import BluetoothAudioIcon from "@mui/icons-material/BluetoothAudio";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function UserLanding() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f9fafb" }}>

      {/* HERO SECTION */}
      <Box
        sx={{
          textAlign: "center",
          py: 12,
          px: 2,
          color: "white",
          background: "linear-gradient(to right, #4f46e5, #3b82f6)",
        }}
      >
        <Typography
          variant="h3"
          fontWeight="900"
          sx={{ mb: 2, letterSpacing: 1, fontSize: { xs: "2.2rem", md: "3.3rem" } }}
        >
          Premium Electronics for a Smarter Life
        </Typography>

        <Typography
          variant="h6"
          sx={{
            maxWidth: 700,
            mx: "auto",
            opacity: 0.9,
            mb: 4,
            fontSize: { xs: "1rem", md: "1.15rem" },
          }}
        >
          Experience superior sound, comfort, and advanced safety with our latest
          earbuds, headphones, neckbands, and the revolutionary{" "}
          <strong>Super Eye Glass</strong>.
        </Typography>

        <Button
          variant="contained"
          href="/login"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            backgroundColor: "white",
            color: "#2563eb",
            "&:hover": { backgroundColor: "#e5e7eb" },
            fontWeight: "bold",
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          Sign In
        </Button>
      </Box>

      {/* PRODUCT CATEGORIES */}
      <Box sx={{ py: 10, px: 2, maxWidth: "1200px", mx: "auto" }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={6}>
          Our Top Electronics
        </Typography>

        <Grid container spacing={4}>
          {/* Earbuds */}
          <Grid item xs={12} sm={6} lg={3}>
            <Paper
              elevation={5}
              sx={{
                p: 4,
                textAlign: "center",
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                },
              }}
            >
              <EarbudsIcon sx={{ fontSize: 70, mb: 2, color: "#4f46e5" }} />

              <Typography variant="h6" fontWeight="600" mb={1}>
                Earbuds
              </Typography>

              <Typography sx={{ color: "gray" }}>
                Crystal clear sound with noise cancellation.
              </Typography>
            </Paper>
          </Grid>

          {/* Earphones */}
          <Grid item xs={12} sm={6} lg={3}>
            <Paper
              elevation={5}
              sx={{
                p: 4,
                textAlign: "center",
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                },
              }}
            >
              <HeadsetMicIcon sx={{ fontSize: 70, mb: 2, color: "#7c3aed" }} />

              <Typography variant="h6" fontWeight="600" mb={1}>
                Earphones
              </Typography>

              <Typography sx={{ color: "gray" }}>
                Comfortable design with deep bass experience.
              </Typography>
            </Paper>
          </Grid>

          {/* Headphones */}
          <Grid item xs={12} sm={6} lg={3}>
            <Paper
              elevation={5}
              sx={{
                p: 4,
                textAlign: "center",
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                },
              }}
            >
              <HeadphonesIcon sx={{ fontSize: 70, mb: 2, color: "#0ea5e9" }} />

              <Typography variant="h6" fontWeight="600" mb={1}>
                Headphones
              </Typography>

              <Typography sx={{ color: "gray" }}>
                Powerful sound with long-lasting comfort.
              </Typography>
            </Paper>
          </Grid>

          {/* Neckbands */}
          <Grid item xs={12} sm={6} lg={3}>
            <Paper
              elevation={5}
              sx={{
                p: 4,
                textAlign: "center",
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                },
              }}
            >
              <BluetoothAudioIcon sx={{ fontSize: 70, mb: 2, color: "#10b981" }} />

              <Typography variant="h6" fontWeight="600" mb={1}>
                Neckbands
              </Typography>

              <Typography sx={{ color: "gray" }}>
                Flexible and lightweight for all-day music.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* SUPER EYE GLASS SECTION */}
      <Box sx={{ py: 12, px: 2, bgcolor: "#f3f4f6" }}>
        <Grid
          container
          spacing={6}
          alignItems="center"
          sx={{ maxWidth: "1100px", mx: "auto" }}
        >
          {/* Icon / Image */}
          <Grid item xs={12} md={6}>
            <VisibilityIcon
              sx={{
                fontSize: 180,
                mx: "auto",
                display: "block",
                color: "#2563eb",
                animation: "pulse 2s infinite",
              }}
            />
          </Grid>

          {/* Text */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" mb={2}>
              Introducing the{" "}
              <Box component="span" sx={{ color: "#2563eb" }}>
                Super Eye Glass
              </Box>
            </Typography>

            <Typography sx={{ color: "gray.700", mb: 3, lineHeight: 1.7 }}>
              A revolutionary eyewear designed to protect your eyes, enhance
              visibility, and keep you safe — especially when traveling or communicating
              in rural and village areas.
            </Typography>

            {[
              "Advanced UV protection",
              "Safety-focused design for road & village use",
              "Lightweight and ultra-durable",
              "Stylish modern look",
            ].map((item, i) => (
              <Typography key={i} sx={{ color: "gray.700", mb: 1 }}>
                ✔ {item}
              </Typography>
            ))}

            <Button
              href="/login"
              variant="contained"
              sx={{
                mt: 3,
                px: 5,
                py: 1.5,
                borderRadius: 2,
                backgroundColor: "#2563eb",
                "&:hover": { backgroundColor: "#1d4ed8" },
              }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* FOOTER */}
      <Box sx={{ py: 4, bgcolor: "#111827", color: "#9ca3af", textAlign: "center" }}>
        © {new Date().getFullYear()} Your Electronics Brand — All Rights Reserved
      </Box>
    </Box>
  );
}
