import {
  Box,
  Paper,
  Typography,
  Avatar,
  Divider,
  Grid,
  Stack,
} from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import CakeIcon from "@mui/icons-material/Cake";
import EventIcon from "@mui/icons-material/Event";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ProfilePage() {
  const profile = {
    name: "Admin Name",
    email: "admin@example.com",
    post: "Senior Administrator",
    birthday: "1998-08-20",
    joiningDate: "2022-01-15",
    workingGrade: "A+",
    employeeId: "EMP-1001",
    address: "123 Market Street, New York, USA",
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "100%", maxWidth: 900 }}>
        <Typography variant="h4" fontWeight="bold" mb={3}>
          Profile
        </Typography>

        {/* MAIN PROFILE CARD */}
        <Paper
          sx={{
            p: 0,
            overflow: "hidden",
            borderRadius: 3,
            boxShadow: "0 4px 25px rgba(0,0,0,0.15)",
          }}
        >
          {/* HEADER with gradient */}
          <Box
            sx={{
              background: "linear-gradient(135deg, #4C6EF5, #15AABF)",
              color: "white",
              p: 4,
              display: "flex",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Avatar
              sx={{ width: 100, height: 100, border: "4px solid white" }}
              src="/avatar.png"
            />

            <Box>
              <Typography variant="h4" fontWeight="bold">
                {profile.name}
              </Typography>
              <Typography>{profile.email}</Typography>
              <Typography mt={1} sx={{ opacity: 0.9 }}>
                {profile.post}
              </Typography>
            </Box>
          </Box>

          {/* DETAILS SECTION */}
          <Box sx={{ p: 4 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Personal Information
            </Typography>

            <Grid container spacing={3}>
              {/* Birthday */}
              <Grid item xs={12} sm={6}>
                <Paper
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                  }}
                >
                  <CakeIcon color="primary" />
                  <Box>
                    <Typography fontWeight="bold">Birthday</Typography>
                    <Typography>{profile.birthday}</Typography>
                  </Box>
                </Paper>
              </Grid>

              {/* Joining Date */}
              <Grid item xs={12} sm={6}>
                <Paper
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                  }}
                >
                  <EventIcon color="success" />
                  <Box>
                    <Typography fontWeight="bold">Joining Date</Typography>
                    <Typography>{profile.joiningDate}</Typography>
                  </Box>
                </Paper>
              </Grid>

              {/* Working Grade */}
              <Grid item xs={12} sm={6}>
                <Paper
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                  }}
                >
                  <StarIcon color="warning" />
                  <Box>
                    <Typography fontWeight="bold">Working Grade</Typography>
                    <Typography>{profile.workingGrade}</Typography>
                  </Box>
                </Paper>
              </Grid>

              {/* Employee ID */}
              <Grid item xs={12} sm={6}>
                <Paper
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                  }}
                >
                  <BadgeIcon color="secondary" />
                  <Box>
                    <Typography fontWeight="bold">Employee ID</Typography>
                    <Typography>{profile.employeeId}</Typography>
                  </Box>
                </Paper>
              </Grid>

              {/* Address */}
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                  }}
                >
                  <LocationOnIcon color="error" />
                  <Box>
                    <Typography fontWeight="bold">Address</Typography>
                    <Typography>{profile.address}</Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Typography color="gray" fontSize={14}>
              (Soon: Editable profile, theme sync, documents, attendance logs.)
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
