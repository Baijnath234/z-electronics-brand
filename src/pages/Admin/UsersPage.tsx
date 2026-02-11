import {
  Box,
  Typography,
  Paper,
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Chip,
  Avatar,
  Divider,
} from "@mui/material";

import VerifiedIcon from "@mui/icons-material/Verified";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonIcon from "@mui/icons-material/Person";

import { useEffect, useState } from "react";

// Default admin ID (super admin authority)
const DEFAULT_ADMIN_ID = 9999;

export default function UsersPage() {
  const CURRENT_USER_ID = DEFAULT_ADMIN_ID;

  // Load users from localStorage
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("user_list");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: DEFAULT_ADMIN_ID,
            name: "Main Admin",
            email: "mainadmin@example.com",
            role: "admin",
            verified: true,
          },
          {
            id: 2,
            name: "Regular Admin",
            email: "admin@example.com",
            role: "admin",
            verified: true,
          },
          {
            id: 3,
            name: "Normal User",
            email: "user@example.com",
            role: "user",
            verified: false,
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("user_list", JSON.stringify(users));
  }, [users]);

  // Add user modal
  const [openAdd, setOpenAdd] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "user",
  });

  const addUser = () => {
    if (!newUser.name || !newUser.email) return;

    setUsers((prev:any) => [
      ...prev,
      { id: Date.now(), verified: false, ...newUser },
    ]);

    setNewUser({ name: "", email: "", role: "user" });
    setOpenAdd(false);
  };

  const verifyUser = (id:any) => {
    setUsers((prev: any[]) =>
      prev.map((u) => (u.id === id ? { ...u, verified: true } : u))
    );
  };

  const deleteUser = (id: any) => {
    setUsers((prev: any[]) => prev.filter((u) => u.id !== id));
  };

  const canDeleteUser = (targetUser: { id: number; }) => {
    return CURRENT_USER_ID === DEFAULT_ADMIN_ID && targetUser.id !== DEFAULT_ADMIN_ID;
  };

  return (
    <Box>
      {/* COLORED HEADER */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #4C6EF5, #15AABF)",
          p: 3,
          mb: 3,
          borderRadius: 2,
          color: "white",
          boxShadow: "0 4px 25px rgba(0,0,0,0.2)",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          User Management
        </Typography>
        <Typography sx={{ opacity: 0.8 }} mt={1}>
          Manage user accounts, roles, and permissions.
        </Typography>
      </Box>

      {/* ADD USER BUTTON */}
      {CURRENT_USER_ID === DEFAULT_ADMIN_ID && (
        <Button
          variant="contained"
          startIcon={<PersonAddIcon />}
          sx={{
            mb: 2,
            background: "#4C6EF5",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            "&:hover": { background: "#3B5BDB" },
          }}
          onClick={() => setOpenAdd(true)}
        >
          Add User
        </Button>
      )}

      {/* USER LIST */}
      <Paper
        sx={{
          p: 3,
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Users List
        </Typography>

        {users.length === 0 ? (
          <Typography>No users found.</Typography>
        ) : (
          users.map((user: { id: any; role?: any; name?: any; email?: any; verified?: any; }) => (
            <Paper
              key={user.id}
              sx={{
                p: 2,
                mb: 2,
                borderRadius: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "0.2s",
                "&:hover": {
                  boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                  transform: "translateY(-3px)",
                },
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                {/* AVATAR */}
                <Avatar
                  sx={{
                    bgcolor: user.role === "admin" ? "#4C6EF5" : "#ADB5BD",
                  }}
                >
                  {user.role === "admin" ? (
                    <AdminPanelSettingsIcon />
                  ) : (
                    <PersonIcon />
                  )}
                </Avatar>

                <Box>
                  <Typography fontWeight="bold">{user.name}</Typography>
                  <Typography>Email: {user.email}</Typography>

                  {/* ROLE BADGE */}
                  <Chip
                    label={user.role}
                    size="small"
                    color={user.role === "admin" ? "primary" : "default"}
                    sx={{ mt: 1 }}
                  />

                  {/* VERIFIED BADGE */}
                  <Chip
                    icon={<VerifiedIcon />}
                    label={user.verified ? "Verified" : "Pending"}
                    color={user.verified ? "success" : "warning"}
                    size="small"
                    sx={{ ml: 1 }}
                  />
                </Box>
              </Stack>

              <Stack spacing={1}>
                {!user.verified && (
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => verifyUser(user.id)}
                  >
                    Verify
                  </Button>
                )}

                {canDeleteUser(user) && (
                  <Button
                    variant="contained"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Button>
                )}
              </Stack>
            </Paper>
          ))
        )}
      </Paper>

      {/* ADD USER MODAL */}
      <Dialog
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        fullWidth
        maxWidth="sm"
        sx={{
          "& .MuiPaper-root": {
            borderRadius: 3,
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          },
        }}
      >
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label="Name"
            value={newUser.name}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <TextField
            fullWidth
            margin="dense"
            label="Email"
            value={newUser.email}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <TextField
            fullWidth
            margin="dense"
            label="Role (admin/user)"
            value={newUser.role}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, role: e.target.value }))
            }
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenAdd(false)}>Cancel</Button>
          <Button variant="contained" onClick={addUser}>
            Add User
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
