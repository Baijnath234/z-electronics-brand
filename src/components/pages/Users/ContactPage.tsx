import React, { useState } from "react";
import UserFooter from "../../layouts/UserFooter";

import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  IconButton,
  Divider,
  Alert
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // 👉 Replace this with your backend API endpoint
    console.log("Form submitted:", form);

    // Mock success alert
    setSuccess(true);

    // Clear form
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <>
      <Box sx={{ py: 6, background: "#f5f7fa", pt:15 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Contact Us
          </Typography>

          <Typography variant="body1" sx={{ mb: 4 }} color="text.secondary">
            Have any questions, feedback, or concerns? We’d love to hear from you.
          </Typography>

          <Grid container spacing={2}>
            {/* Left: Company Contact Details */}
            <Grid item xs={12} md={5}>
              <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }} fontWeight="bold">
                  Company Information
                </Typography>

                <Stack spacing={3}>
                  {/* Address */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <IconButton color="primary">
                      <LocationOnIcon />
                    </IconButton>
                    <Typography variant="body1">
                      123 Tech Street, Bangalore, Karnataka, India
                    </Typography>
                  </Box>

                  {/* Email */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <IconButton color="primary">
                      <EmailIcon />
                    </IconButton>
                    <Typography variant="body1">support@yourcompany.com</Typography>
                  </Box>

                  {/* Phone */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <IconButton color="primary">
                      <PhoneIcon />
                    </IconButton>
                    <Typography variant="body1">+91 98765 43210</Typography>
                  </Box>
                </Stack>

                <Divider sx={{ my: 3 }} />

                {/* Map Placeholder */}
                <Box
                  sx={{
                    height: 200,
                    background: "#dfe3e8",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#777"
                  }}
                >
                  Google Map (Embed here)
                </Box>
              </Paper>
            </Grid>

            {/* Right: Contact Form */}
            <Grid item xs={12} md={7}>
              <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }} fontWeight="bold">
                  Send Us a Message
                </Typography>

                {success && (
                  <Alert severity="success" sx={{ mb: 2 }}>
                    Your message has been sent successfully!
                  </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />

                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                      <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />

                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </Stack>

                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />

                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      multiline
                      rows={5}
                      required
                    />

                    <Button
                      variant="contained"
                      size="large"
                      type="submit"
                      sx={{ py: 1.5 }}
                    >
                      Submit Message
                    </Button>
                  </Stack>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <UserFooter />
    </>
  );
};

export default ContactPage;
