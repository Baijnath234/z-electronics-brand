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
import { useNavigate } from "react-router-dom";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useAuth } from "../../context/AuthContext";

export default function UserLogin() {
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ AUTH CONTEXT

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

  /* =======================
     🔥 NEW: LOGIN HANDLER
     ======================= */
  const handleLogin = () => {
    // 🔹 Demo login (replace with backend later)
    const userData = {
      id: Date.now().toString(),
      name: "Wave User",
      email: "user@wave.com",
    };

    login(userData);           // ✅ SAVE USER
    navigate("/");             // ✅ REDIRECT HOME
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const requestOtp = () => {
    if (!signupData.mobile) {
      alert("Please enter mobile number first");
      return;
    }
    setOtpRequested(true);
    alert("OTP sent to your mobile (demo)");
  };

  /* =======================
     🔥 FIXED: SIGNUP HANDLER
     ======================= */
  const handleSignup = async () => {
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
        alert(data.message || "Signup failed");
        return;
      }

      // ✅ AUTO LOGIN AFTER SIGNUP
      login({
        id: data.user?.id || Date.now().toString(),
        name: data.user?.username || signupData.username,
        email: data.user?.email || signupData.email,
      });

      // ✅ OPTIONAL TOKEN STORAGE
      if (data.token) {
        localStorage.setItem("authToken", data.token);
      }

      alert("Signup successful!");
      setOpenSignup(false);
      navigate("/");

    } catch (err) {
      console.error("Signup error:", err);
      alert("Backend not running on http://localhost:5000");
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
      {/* ================= LOGIN CARD ================= */}
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
        <Typography variant="h4" fontWeight={900} mt={1}>
          Grotta
        </Typography>
        <Typography sx={{ mb: 4, opacity: 0.7 }}>
          crafted to stand out
        </Typography>

        <TextField fullWidth label="Email" margin="normal" />
        <TextField fullWidth label="Password" type="password" margin="normal" />

        {/* ✅ FIXED LOGIN BUTTON */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
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
        >
          Login with Google
        </Button>

        <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
          <IconButton><FacebookIcon /></IconButton>
          <IconButton><InstagramIcon /></IconButton>
          <IconButton><TwitterIcon /></IconButton>
        </Stack>

        <Typography mt={3}>
          New here?{" "}
          <Box
            component="span"
            sx={{ color: "#4f46e5", fontWeight: "bold", cursor: "pointer" }}
            onClick={() => setOpenSignup(true)}
          >
            Create an account
          </Box>
        </Typography>
      </Paper>

      {/* ================= SIGNUP MODAL ================= */}
      <Dialog open={openSignup} onClose={() => setOpenSignup(false)} fullWidth maxWidth="sm">
        <DialogTitle textAlign="center">Join Wave</DialogTitle>

        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField name="username" label="Full Name" fullWidth onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField name="email" label="Email" fullWidth onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField name="birthday" type="date" label="Birthday" InputLabelProps={{ shrink: true }} fullWidth onChange={handleChange} />
            </Grid>
            <Grid item xs={8}>
              <TextField name="mobile" label="Mobile" fullWidth onChange={handleChange} />
            </Grid>
            <Grid item xs={4}>
              <Button fullWidth onClick={requestOtp}>Send OTP</Button>
            </Grid>
            {otpRequested && (
              <Grid item xs={12}>
                <TextField name="otp" label="OTP" fullWidth onChange={handleChange} />
              </Grid>
            )}
            <Grid item xs={12}>
              <TextField name="password" type="password" label="Password" fullWidth onChange={handleChange} />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenSignup(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSignup}>Register</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
