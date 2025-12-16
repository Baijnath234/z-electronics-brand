import { useState } from "react";
import UserFooter from "../../layouts/UserFooter";

import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Box,
  Divider,
  Stack
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const sampleClients = [
  {
    id: 1,
    name: "TechNova Solutions",
    logo: "https://via.placeholder.com/500x300?text=TechNova",
    location: "Bangalore, India",
    contact: "contact@technova.com",
    shortDesc: "Innovative IT consulting and cloud transformation services.",
    description:
      "TechNova Solutions is a leading IT consulting firm offering cloud migration, enterprise architecture, and automation services. With over 15 years of experience, they help companies modernize their infrastructure and adopt scalable digital solutions.",
  },
  {
    id: 2,
    name: "FreshMart Organics",
    logo: "https://via.placeholder.com/500x300?text=FreshMart",
    location: "Delhi, India",
    contact: "hello@freshmart.com",
    shortDesc: "Organic food supplier specializing in farm-to-table produce.",
    description:
      "FreshMart Organics is one of India's fastest-growing organic produce suppliers. Their network of 300+ certified farms delivers fresh vegetables, fruits, and grains directly to retail outlets and doorstep customers while maintaining strict quality standards.",
  },
  {
    id: 3,
    name: "Skyline Construction",
    logo: "https://via.placeholder.com/500x300?text=Skyline",
    location: "Mumbai, India",
    contact: "info@skylinebuilds.com",
    shortDesc: "Premium real estate construction & architectural planning.",
    description:
      "Skyline Construction specializes in commercial and residential building projects. Known for modern architecture and sustainable construction practices, they have completed over 50 high-rise projects across major Indian metropolitan cities.",
  }
];

const ClientPage = () => {
  const [selectedClient, setSelectedClient]:any = useState(null);

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 6, pt:15 }}>
        <Typography variant="h4" gutterBottom sx={{textAlign:'center'}}>
          Our Clients
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={2}>
          {sampleClients.map((client:any) => (
            <Grid item xs={12} sm={6} md={4} key={client.id}>
              <Card elevation={3}>
                <CardMedia
                  component="img"
                  height="180"
                  image={client.logo}
                  alt={client.name}
                />

                <CardContent>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {client.name}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {client.shortDesc}
                  </Typography>

                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2">
                      <strong>Location:</strong> {client.location}
                    </Typography>

                    <Typography variant="body2">
                      <strong>Contact:</strong> {client.contact}
                    </Typography>
                  </Box>
                </CardContent>

                <Box sx={{ px: 2, pb: 2 }}>
                  <Button 
                    variant="contained" 
                    fullWidth 
                    onClick={() => setSelectedClient(client)}
                  >
                    View Details
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Details Dialog */}
      <Dialog
        open={Boolean(selectedClient)}
        onClose={() => setSelectedClient(null)}
        maxWidth="md"
        fullWidth
      >
        {selectedClient && (
          <>
            <DialogTitle sx={{ m: 0, p: 2 }}>
              {selectedClient.name}
              <IconButton
                aria-label="close"
                onClick={() => setSelectedClient(null)}
                sx={{ position: "absolute", right: 8, top: 8 }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent dividers>
              <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                  <Box
                    component="img"
                    src={selectedClient.logo}
                    alt={selectedClient.name}
                    sx={{
                      width: "100%",
                      borderRadius: 1,
                      objectFit: "cover"
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={7}>
                  <Stack spacing={2}>
                    <Typography variant="body1">
                      <strong>Location:</strong> {selectedClient.location}
                    </Typography>

                    <Typography variant="body1">
                      <strong>Contact:</strong> {selectedClient.contact}
                    </Typography>

                    <Divider />

                    <Typography variant="body2" color="text.secondary">
                      {selectedClient.description}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </DialogContent>

            <DialogActions>
              <Button onClick={() => setSelectedClient(null)}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      <UserFooter />
    </>
  );
};

export default ClientPage;
