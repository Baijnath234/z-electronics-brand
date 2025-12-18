import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  CircularProgress,
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ShieldIcon from "@mui/icons-material/Shield";

const AdminLogin = ({ onSuccess }: any) => {
  const navigate = useNavigate();

  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!adminId.trim() || !password) {
      setError("Please enter your Admin ID and password.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adminId, password, remember }),
        credentials: "include",
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Invalid credentials");
      }

      const data = await res.json();

      // Show UI success message
      setSuccess("Login successful!");

      // Call parent event if needed
      onSuccess?.(data);

      // Redirect after 1 second
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1000);

    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        background: "linear-gradient(135deg, #4f46e5, #7c3aed, #0ea5e9)",
      }}
    >
      {/* Glow Effects */}
      <Box
        sx={{
          position: "absolute",
          width: "40rem",
          height: "40rem",
          bgcolor: "rgba(255,255,255,0.15)",
          top: -150,
          left: "20%",
          filter: "blur(150px)",
          borderRadius: "50%",
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "35rem",
          height: "35rem",
          bgcolor: "rgba(255,0,200,0.2)",
          bottom: -120,
          right: "10%",
          filter: "blur(200px)",
          borderRadius: "50%",
          zIndex: -1,
        }}
      />

      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 400,
          p: 4,
          borderRadius: 4,
          background: "rgba(255,255,255,0.25)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        {/* Header */}
        <Box textAlign="center" mb={3}>
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mx: "auto",
              background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
              color: "white",
            }}
          >
            <ShieldIcon sx={{ fontSize: 50 }} />
          </Box>

          <Typography variant="h4" mt={2} fontWeight="bold" color="white">
            Admin Panel
          </Typography>
          <Typography variant="body2" color="white" sx={{ opacity: 0.8 }}>
            Secure access to the admin dashboard
          </Typography>
        </Box>

        {/* Error Message */}
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {/* Success Message */}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Admin ID or Email"
            fullWidth
            variant="outlined"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            sx={{
              mb: 2,
              "& .MuiInputBase-root": {
                backgroundColor: "rgba(255,255,255,0.6)",
              },
            }}
          />

          <TextField
            label="Password"
            fullWidth
            type={showPassword ? "text" : "password"}
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              mb: 2,
              "& .MuiInputBase-root": {
                backgroundColor: "rgba(255,255,255,0.6)",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                sx={{ color: "white" }}
              />
            }
            label={<Typography color="white">Remember me</Typography>}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              py: 1.4,
              mt: 1,
              background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
            }}
            disabled={loading}
            startIcon={
              loading ? <CircularProgress size={20} color="inherit" /> : null
            }
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <Typography
          textAlign="center"
          variant="caption"
          color="white"
          sx={{ mt: 3, display: "block", opacity: 0.8 }}
        >
          By signing in you agree to our Terms & Privacy Policy.
        </Typography>
      </Paper>
    </Box>
  );
};

export default AdminLogin;
