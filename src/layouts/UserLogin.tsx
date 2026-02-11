import { Box, Button, TextField, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulated login success
    login({
      id: "1",
      name: "Prakash",
      email: "prakash@email.com",
      password: '123456'
    });

    navigate("/");
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 15 }}>
      <Typography variant="h5" mb={2}>
        Login
      </Typography>

      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Password" type="password" margin="normal" />

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2 }}
        onClick={handleLogin}
      >
        Login
      </Button>
    </Box>
  );
}
