import { Box, Typography, Grid } from "@mui/material";
import web1 from "../../../assets/images/Electronic.png";
import UserFooter from "../../layouts/UserFooter";

const Aboutpage = () => {
  return (
    <>
      <Box sx={{ width: "100%", py: 10, background: "#ffffff", mt: 10 }}>
        <Box sx={{ maxWidth: 1400, mx: "auto", px: 2 }}>
          <Grid
            container
            direction="row"
            alignItems="center"
            spacing={6}
            wrap="nowrap"
          >
            {/* LEFT IMAGE */}
            <Grid>
              <Box
                sx={{
                  width: "100%",
                  height: 420,
                //   borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: 3,
                }}
              >
                <img
                  src={web1}
                  alt="Z Electronic"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                  }}
                />
              </Box>
            </Grid>

            {/* RIGHT CONTENT */}
            <Grid >
              <Typography variant="h4" fontWeight={800} mb={2} color="#0f172a">
                About Z Electronic
              </Typography>

              <Typography color="text.secondary" mb={2}>
                Welcome to <strong>Z Electronic</strong>, the emerging leader in
                high-quality, dependable mobile accessories. Established on
                <strong> August 20, 2025</strong> by Founder and Owner
                <strong> Rupak Prince</strong>.
              </Typography>

              <Typography color="text.secondary" mb={2}>
                We specialize in chargers, adapters, data cables, neckbands,
                Airbuds, and earphones—each curated for durability and
                performance.
              </Typography>

              <Typography color="text.secondary">
                By managing printing, packing, and branding in-house, we ensure
                superior quality control while generating local employment.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* footer */}
      <UserFooter />
    </>
  );
};

export default Aboutpage;
