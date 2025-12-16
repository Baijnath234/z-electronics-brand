import { Box, Typography } from "@mui/material";

export default function UserFooter() {
  return (
    <Box
      sx={{
        bgcolor: "#111827",
        color: "#9ca3af",
        textAlign: "center",
        py: 4,
        mt: 6,
      }}
    >
      <Typography>© {new Date().getFullYear()} Z-Electronic.com — Connect & Grow</Typography>
      <Typography sx={{ fontSize: "13px", mt: 1 }}>
        Designed with us for better experience
      </Typography>
    </Box>
  );
}
