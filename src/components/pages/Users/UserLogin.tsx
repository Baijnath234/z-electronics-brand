import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Divider,
  Stack,
  IconButton,
} from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- import navigate
import HeadphonesIcon from "@mui/icons-material/Headphones";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function UserLogin() {
  const navigate = useNavigate(); // <-- router navigation

  const [openSignup, setOpenSignup] = useState(false);
  const [otpRequested, setOtpRequested] = useState(false);

  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    birthday: "",
    mobile: "",
    otp: "",
    password: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const requestOtp = () => {
    if (!signupData.mobile) {
      alert("Please enter mobile number first");
      return;
    }
    setOtpRequested(true);
    // In real app, call backend to send OTP
    alert("OTP sent to your mobile (demo)!");
  };

  // NEW: submit signup to localhost backend
  const handleSignup = async () => {
    // basic client-side validation (expand as needed)
    if (!signupData.username || !signupData.email || !signupData.password) {
      alert("Please fill name, email and password.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupData),
      });

      const data = await res.json();

      if (!res.ok) {
        // show backend message
        alert(data.message || "Signup failed");
        return;
      }

      // Example: store a demo token and redirect to /dashboard
      // In real app store JWT securely (httpOnly cookie or secure storage)
      if (data.token) {
        localStorage.setItem("authToken", data.token);
      }
      alert("Signup successful!");
      setOpenSignup(false);

      // navigate to dashboard
      navigate("/dashboard");
    } catch (err) {
      console.error("Signup error:", err);
      alert("Unable to signup. Is the backend running on http://localhost:5000 ?");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4f46e5, #3b82f6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      {/* LOGIN CARD */}
      <Paper
        elevation={8}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 380,
          textAlign: "center",
          borderRadius: 4,
        }}
      >
        {/* LOGO */}
        <HeadphonesIcon sx={{ fontSize: 60, color: "#4f46e5" }} />
        <Typography variant="h4" fontWeight={900} mt={1}>
          Wave
        </Typography>
        <Typography sx={{ mb: 4, opacity: 0.7 }}>feel the music</Typography>

        {/* LOGIN FORM (you can wire real login similarly) */}
        <TextField fullWidth label="Email" type="email" margin="normal" />
        <TextField fullWidth label="Password" type="password" margin="normal" />

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            py: 1.2,
            borderRadius: 2,
            backgroundColor: "#4f46e5",
            "&:hover": { backgroundColor: "#4338ca" },
          }}
        >
          Login
        </Button>

        <Divider sx={{ my: 3 }}>OR</Divider>

        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{
            py: 1.1,
            borderRadius: 2,
            borderColor: "#db4437",
            color: "#db4437",
            "&:hover": {
              backgroundColor: "#fdecea",
              borderColor: "#c5382c",
            },
          }}
        >
          Login with Google
        </Button>

        <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
          <IconButton sx={{ color: "#1877f2" }}>
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton sx={{ color: "#e1306c" }}>
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton sx={{ color: "#1da1f2" }}>
            <TwitterIcon fontSize="large" />
          </IconButton>
        </Stack>

        <Typography mt={3}>
          New here?{" "}
          <Box
            component="span"
            sx={{
              color: "#4f46e5",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => setOpenSignup(true)}
          >
            Create an account
          </Box>
        </Typography>
      </Paper>

      {/* SIGNUP MODAL */}
      <Dialog
        open={openSignup}
        onClose={() => setOpenSignup(false)}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: 4,
          },
        }}
      >
        <DialogTitle sx={{ pb: 1 }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center">
            Join Wave
          </Typography>
          <Typography textAlign="center" sx={{ color: "gray" }}>
            feel the music
          </Typography>
        </DialogTitle>

        <DialogContent dividers sx={{ p: 4 }}>
          <Grid container spacing={3}>
            {/* FULL NAME */}
            <Grid>
              <TextField
                name="username"
                onChange={handleChange}
                label="Full Name"
                fullWidth
              />
            </Grid>

            {/* EMAIL */}
            <Grid>
              <TextField
                name="email"
                onChange={handleChange}
                label="Email"
                type="email"
                fullWidth
              />
            </Grid>

            {/* BIRTHDAY */}
            <Grid>
              <TextField
                name="birthday"
                onChange={handleChange}
                label="Birthday Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>

            {/* MOBILE + OTP BUTTON */}
            <Grid>
              <Grid container spacing={1}>
                <Grid>
                  <TextField
                    name="mobile"
                    onChange={handleChange}
                    label="Mobile Number"
                    type="tel"
                    fullWidth
                  />
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={requestOtp}
                    sx={{
                      height: "100%",
                      backgroundColor: "#4f46e5",
                      "&:hover": { backgroundColor: "#4338ca" },
                    }}
                  >
                    Send OTP
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            {/* OTP FIELD (Only if requested) */}
            {otpRequested && (
              <Grid>
                <TextField
                  name="otp"
                  onChange={handleChange}
                  label="Enter OTP"
                  fullWidth
                />
              </Grid>
            )}

            {/* PASSWORD */}
            <Grid>
              <TextField
                name="password"
                onChange={handleChange}
                label="Create Password"
                type="password"
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setOpenSignup(false)}>Cancel</Button>

          <Button
            variant="contained"
            onClick={handleSignup}
            sx={{
              px: 4,
              backgroundColor: "#4f46e5",
              "&:hover": { backgroundColor: "#4338ca" },
            }}
          >
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
