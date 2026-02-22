import { Box, Typography, Paper, Button, TextField } from "@mui/material";
import UserFooter from "../../components/layouts/UserFooter";
import web1 from "../../assets/images/coming-soon.png";
import web2 from "../../assets/images/Grotta.com & in.png";
import web3 from "../../assets/images/slogan.png";
import Banner from "../../assets/images/Grotta banner.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../../components/comman/ProductCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import Headphone from "../../assets/images/image1.png";
import Earbud2 from "../../assets/images/image1.png";
import image3 from "../../assets/images/image13.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";
import image6 from "../../assets/images/image6.png";
import image7 from "../../assets/images/image1.png";
import image8 from "../../assets/images/image11.png";
import image9 from "../../assets/images/image9.png";
import image10 from "../../assets/images/image10.png";
import image11 from "../../assets/images/image11.png";
import image12 from "../../assets/images/image12.png";
import image13 from "../../assets/images/image13.png";
import { useNavigate } from "react-router-dom";

/* ---------------- DATA ---------------- */

const carouselImages = [web1, web2, web3];

const ourProducts = [
  {
    title: "White Tshirt men",
    image: Headphone,
    price: "₹999",
    strikePrice: "₹1,499",
    discount: "33%",
    rating: 4.8,
    ratingCount: 124,
    colors: ["#000", "#0FF", "#00F"],
    moreColors: 1,
  },
  {
    title: "White Tshirt men",
    image: image3,
    price: "₹1,499",
    strikePrice: "₹2,499",
    discount: "66%",
    rating: 4.8,
    ratingCount: 124,
    colors: ["#000", "#0FF", "#00F"],
    moreColors: 1,
  },
  {
    title: "White Tshirt men",
    image: image7,
    price: "₹2,499",
    strikePrice: "₹4,999",
    discount: "66%",
    rating: 4.8,
    ratingCount: 124,
    colors: ["#000", "#0FF", "#00F"],
    moreColors: 1,
  },
  {
    title: "White Tshirt men",
    image: image8,
    price: "₹2,499",
    strikePrice: "₹4,999",
    discount: "66%",
    rating: 4.8,
    ratingCount: 124,
    colors: ["#000", "#0FF", "#00F"],
    moreColors: 1,
  },
];

const categories = [
  { title: "Jeans", image: image4 },
  { title: "Shirt", image: image3 },
  { title: "Tshirt", image: Earbud2 },
  { title: "Jaket", image: image5 },
  { title: "Shoes", image: image6 },
  { title: "Socks", image: image9 },
  { title: "Perfume", image: image10 },
  { title: "Tousers", image: image11 },
  { title: "Shorts", image: image12 },
  { title: "formals", image: image7 },
  { title: "Wallet & baltes", image: image13 },
  { title: "Danim", image: image8 },
];

/* ---------------- COMPONENT ---------------- */

export default function UserDashboard() {
  const navigate = useNavigate();

  return (
    <>
      {/* CAROUSEL */}
      <Box sx={{ overflow: "hidden", width: "100%", mt: 12.5 }}>
        <Slider dots={false} infinite speed={600} autoplay slidesToShow={1}>
          {carouselImages.map((img, i) => (
            <Box key={i} sx={{ height: { xs: 300, md: 500 } }}>
              <img
                src={img}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "fill" }}
              />
            </Box>
          ))}
        </Slider>
      </Box>

      {/* FEATURES BAR */}
      <Box
        sx={{
          backgroundColor: "#f78235",
          py: 2,
          display: { xs: "none", sm: "block" },
        }}
      >
        <Box
          sx={{
            maxWidth: 1400,
            mx: "auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
            color: "white",
          }}
        >
          <Feature icon={<LocalPoliceIcon />} text="12 Month Warranty" />
          <Feature icon={<ReceiptIcon />} text="GST Billing" />
          <Feature icon={<LocalShippingIcon />} text="Free Delivery" />
          <Feature
            icon={<PublishedWithChangesIcon />}
            text="7-day Replacement"
          />
        </Box>
      </Box>

      {/* CATEGORIES */}
      <Section title="Categories">
        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(6, 1fr)",
            },
          }}
        >
          {categories.map((cat, i) => (
            <Paper
              key={i}
              onClick={() =>
                navigate(`/category/${cat.title.toLowerCase()}`)
              }
              sx={{
                cursor: "pointer",
                borderRadius: 3,
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  height: 160,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#f7f7f7",
                }}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  style={{ width: "70%", height: "70%" }}
                />
              </Box>
              <Typography sx={{ py: 1, fontWeight: 600 }}>
                {cat.title}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Section>

      {/* PRODUCTS */}
      <Section title="Explore our Products">
        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
          }}
        >
          {ourProducts.map((item, i) => (
            <ProductCard key={i} {...item} />
          ))}
        </Box>
      </Section>

      {/* BANNER */}
      <Box sx={{ px: 2, mt: 6 }}>
        <img
          src={Banner}
          alt="Explore"
          style={{ width: "100%", borderRadius: 12 }}
        />
      </Box>

      {/* CONTACT */}
      <Box sx={{ px: 3, mt: 8 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3}>
          Contact Us
        </Typography>

        <Box
          sx={{
            maxWidth: 600,
            mx: "auto",
            p: 3,
            borderRadius: 4,
            boxShadow: 4,
          }}
        >
          <TextField fullWidth label="Your Name" sx={{ mb: 2 }} />
          <TextField fullWidth label="Email" sx={{ mb: 2 }} />
          <TextField fullWidth label="Message" multiline rows={4} />
          <Button fullWidth variant="contained" sx={{ mt: 3 }}>
            Send Message
          </Button>
        </Box>
      </Box>

      <UserFooter />
    </>
  );
}

/* ---------------- HELPERS ---------------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ px: 2, mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>
        <Button variant="text" endIcon={<ArrowForwardIcon />}>
          View all
        </Button>
      </Box>
      {children}
    </Box>
  );
}

function Feature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      {icon}
      <Typography fontWeight={600}>{text}</Typography>
    </Box>
  );
}
