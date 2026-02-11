import {
  Box,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Switch,
  Stack,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import InfoIcon from "@mui/icons-material/Info";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import GavelIcon from "@mui/icons-material/Gavel";
import { useState } from "react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "100%", maxWidth: 900 }}>
        <Typography variant="h4" fontWeight="bold" mb={3}>
          Settings
        </Typography>

        {/* BEAUTIFUL MAIN CARD */}
        <Paper
          sx={{
            p: 0,
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 4px 25px rgba(0,0,0,0.15)",
          }}
        >
          {/* HEADER WITH GRADIENT */}
          <Box
            sx={{
              background: "linear-gradient(135deg, #4C6EF5, #15AABF)",
              p: 3,
              color: "white",
              borderBottom: "2px solid rgba(255,255,255,0.3)",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              System Settings
            </Typography>
            <Typography mt={1} sx={{ opacity: 0.9 }}>
              Manage your account, appearance, and system preferences
            </Typography>
          </Box>

          {/* CONTENT */}
          <Box sx={{ p: 3 }}>
            {/* ACCOUNT SETTINGS */}
            <Accordion sx={{ boxShadow: "none" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <AccountCircleIcon color="primary" />
                  <Typography fontWeight="bold">Account Settings</Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Name: John Doe</Typography>
                <Typography>Email: johndoe@example.com</Typography>
                <Typography mt={1} color="gray">
                  (In production, this will show real user profile data.)
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Divider sx={{ my: 1 }} />

            {/* APPEARANCE */}
            <Accordion sx={{ boxShadow: "none" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <DarkModeIcon color="secondary" />
                  <Typography fontWeight="bold">Appearance</Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Typography>Dark Mode</Typography>
                  <Switch
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                  />
                </Stack>
                <Typography mt={1} color="gray">
                  (Connect this to your global theme provider.)
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Divider sx={{ my: 1 }} />

            {/* ABOUT US */}
            <Accordion sx={{ boxShadow: "none" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <InfoIcon color="info" />
                  <Typography fontWeight="bold">About Us</Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This application is designed to manage orders, products, users
                  and analytics with a clean dashboard experience.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Divider sx={{ my: 1 }} />

            {/* PRIVACY POLICY */}
            <Accordion sx={{ boxShadow: "none" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <PrivacyTipIcon color="success" />
                  <Typography fontWeight="bold">Privacy & Policy</Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We value your privacy. User data is encrypted and never shared
                  with third parties.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Divider sx={{ my: 1 }} />

            {/* TERMS & CONDITIONS */}
            <Accordion sx={{ boxShadow: "none" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <GavelIcon color="error" />
                  <Typography fontWeight="bold">Terms & Conditions</Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  By using this backend system, you agree to follow all rules,
                  maintain ethical usage, and respect user information.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
