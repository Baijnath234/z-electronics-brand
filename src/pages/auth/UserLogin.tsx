import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Divider,
  Stack,
  IconButton,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./authFlip.css";

export default function UserLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [isSignup, setIsSignup] = useState(false);
  const [role, setRole] = useState<"admin" | "manager" | "user">("user");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });

  /* ================= LOGIN ================= */
  const handleLogin = () => {
    login({
      id: Date.now().toString(),
      name: loginData.email.split("@")[0],
      email: loginData.email,
      role,
    });

    if (role === "admin") navigate("/admin/dashboard");
    else if (role === "manager") navigate("/manager/dashboard");
    else navigate("/");
  };

  /* ================= SIGNUP ================= */
  const handleSignup = () => {
    login({
      id: Date.now().toString(),
      name: signupData.username,
      email: signupData.email,
      role: "user",
    });

    navigate("/");
  };

  return (
    <Box
      sx={{
        minHeight: "10vh",
        background: "linear-gradient(135deg, #4f46e5, #3b82f6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, sm: 0 },
      }}
    >
      <Box className="flip-container" sx={{
        width: "100%",
        maxWidth: 380,
        mx: "auto",
      }}>
        <Box className={`flip-card ${isSignup ? "flipped" : ""}`}>

          {/* ================= LOGIN SIDE ================= */}
          <Paper className="flip-face" sx={{ p: 4, borderRadius: 4 }}>
            <Typography variant="h4" fontWeight={900}>
              Grotta
            </Typography>
            <Typography sx={{ mb: 3, opacity: 0.7 }}>
              crafted to stand out
            </Typography>

            <TextField
              fullWidth
              label="Email"
              margin="normal"
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />

            <TextField
              select
              fullWidth
              label="Login As"
              margin="normal"
              value={role}
              onChange={(e) =>
                setRole(e.target.value as "admin" | "manager" | "user")
              }
            >
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="manager">Manager</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </TextField>

            <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleLogin}>
              Login
            </Button>

            <Divider sx={{ my: 3 }}>OR</Divider>

            <Button fullWidth variant="outlined" startIcon={<GoogleIcon />}>
              Login with Google
            </Button>

            <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
              <IconButton><FacebookIcon /></IconButton>
              <IconButton><InstagramIcon /></IconButton>
              <IconButton><TwitterIcon /></IconButton>
            </Stack>

            <Typography mt={3}>
              New here?{" "}
              <Box
                component="span"
                sx={{ color: "#4f46e5", fontWeight: "bold", cursor: "pointer" }}
                onClick={() => setIsSignup(true)}
              >
                Create an account
              </Box>
            </Typography>
          </Paper>

          {/* ================= SIGNUP SIDE ================= */}
          <Paper className="flip-face flip-back" sx={{ p: 4, borderRadius: 4 }}>
            <Typography variant="h4" fontWeight={900}>
              Create Account
            </Typography>

            <TextField
              fullWidth
              label="Full Name"
              margin="normal"
              onChange={(e) =>
                setSignupData({ ...signupData, username: e.target.value })
              }
            />

            <TextField
              fullWidth
              label="Email"
              margin="normal"
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
            />

            <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleSignup}>
              Register
            </Button>

            <Typography mt={3}>
              Already have an account?{" "}
              <Box
                component="span"
                sx={{ color: "#4f46e5", fontWeight: "bold", cursor: "pointer" }}
                onClick={() => setIsSignup(false)}
              >
                Login
              </Box>
            </Typography>
          </Paper>

        </Box>
      </Box>
    </Box>
  );
}
