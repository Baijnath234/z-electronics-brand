import { Box, Button, Typography, Paper } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

export default function AdminLanding() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(135deg, #4f46e5, #7c3aed, #0ea5e9)",
        px: 3,
      }}
    >
      {/* Glass Card */}
      <Paper
        elevation={6}
        sx={{
          p: 4,
          maxWidth: 450,
          borderRadius: 4,
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.4)",
        }}
      >
        {/* Icon */}
        <Box
          sx={{
            width: 90,
            height: 90,
            borderRadius: 3,
            mx: "auto",
            mb: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
            color: "white",
          }}
        >
          <AdminPanelSettingsIcon sx={{ fontSize: 50 }} />
        </Box>

        {/* Title */}
        <Typography variant="h3" fontWeight="bold" color="white" mb={1}>
          Admin Portal
        </Typography>

        {/* Subtitle */}
        <Typography variant="body1" color="white" sx={{ opacity: 0.85 }} mb={3}>
          Manage the full system from one place.
        </Typography>

        {/* Button */}
        <Button
          variant="contained"
          fullWidth
          href="/admin/login"
          sx={{
            py: 1.5,
            fontSize: "1rem",
            background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
            borderRadius: 3,
            "&:hover": {
              background: "linear-gradient(135deg, #4338ca, #6d28d9)",
            },
          }}
        >
          Go to Admin Login
        </Button>
      </Paper>
    </Box>
  );
}
