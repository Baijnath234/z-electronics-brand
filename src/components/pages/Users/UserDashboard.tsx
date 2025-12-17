import React from "react";
import { Box, Typography, Grid, Paper, Button, TextField } from "@mui/material";
import UserFooter from "../../layouts/UserFooter";
import web1 from "../../../assets/images/Electronic.png";
import web2 from "../../../assets/images/2.png";
import web3 from "../../../assets/images/3.png";
import Banner from "../../../assets/images/Z-banner.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../Users/comman/ProductCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import Headphone from "../../../assets/images/Headphone1.png";
import Earbud1 from "../../../assets/images/Earbud1.png";
import Earbud2 from "../../../assets/images/Earbud2.png";
import Earbud3 from "../../../assets/images/Earbud3.png";

// Temporary carousel images
const carouselImages = [web1, web2, web3];

// Products
const topProducts = [
  {
    name: "Wave Earbuds Pro",
    img: "https://cdn-icons-png.flaticon.com/512/4470/4470333.png",
  },
  {
    name: "Wave Neckband X",
    img: "https://cdn-icons-png.flaticon.com/512/4470/4470221.png",
  },
  {
    name: "Wave Headphones Max",
    img: "https://cdn-icons-png.flaticon.com/512/10094/10094667.png",
  },
];

const ourProducts = [
  {
    title: "Earbuds Jazz Pro",
    image: Headphone, // Replace with your generated product image later
    price: "Rs 1,699",
    strikePrice: "Rs 4,999",
    discount: "66%",
    rating: 4.8,
    ratingCount: 124, // optional
    colors: ["#000", "#0FF", "#00F"],
    moreColors: 1,
  },
  {
    title: "Earbuds Jazz Pro",
    image: Earbud1, // Replace with your generated product image later
    price: "Rs 1,699",
    strikePrice: "Rs 4,999",
    discount: "66%",
    rating: 4.8,
    ratingCount: 124, // optional
    colors: ["#000", "#0FF", "#00F"],
    moreColors: 1,
  },
  {
    title: "Earbuds Jazz Pro",
    image: Earbud2, // Replace with your generated product image later
    price: "Rs 1,699",
    strikePrice: "Rs 4,999",
    discount: "66%",
    rating: 4.8,
    ratingCount: 124,
    colors: ["#000", "#0FF", "#00F"],
    moreColors: 1,
  },
  {
    title: "Earbuds Jazz Pro",
    image: Earbud3,
    price: "Rs 1,699",
    strikePrice: "Rs 4,999",
    discount: "66%",
    rating: 4.8,
    ratingCount: 124,
    colors: ["#000", "#0FF", "#00F"],
    moreColors: 1,
  },
];
const clientLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
];

export default function UserDashboard() {
  return (
    <>
      {/* CAROUSEL */}
      <Box sx={{ overflow: "hidden", width: "100%", mt: 12.5 }}>
        <Slider
          dots={false}
          infinite
          speed={600}
          autoplay={false}
          slidesToShow={1}
          slidesToScroll={1}
          arrows
        >
          {carouselImages.map((img, i) => (
            <Box
              key={i}
              sx={{
                width: "100%",
                height: { xs: 220, sm: 300, md: 450 },
              }}
            >
              <img
                src={img}
                alt={`slide-${i}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                  display: "block",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Ads banner */}
      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
          position: "static",
          py: { xs: 2, sm: 2, md: 1 },
          px: { xs: 2, sm: 3, md: 4 },
          backgroundColor: "#f78235",
          mt: -1,
          display: { xs: "none", sm: "flex", md: "flex" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 1.5, md: 4 },
            fontWeight: "bold",
          }}
        >
          <Typography
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <LocalPoliceIcon sx={{ fontSize: 30 }} />
            <h6>12 Month</h6>
            <h6>Warranty</h6>
          </Typography>

          <Typography
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <ReceiptIcon sx={{ fontSize: 30 }} />
            <h6>GST</h6>
            <h6>Billing</h6>
          </Typography>

          <Typography
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <h6>0% EMI on UPI</h6>
            <h6>Powerded by Z-electronics</h6>
            <h6>HDFC Bank</h6>
            <h6>Super coins</h6>
            <h6>Yes Bank</h6>
          </Typography>

          <Typography
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <LocalShippingIcon sx={{ fontSize: 30 }} />
            <h6>Free Express</h6>
            <h6>Delivery</h6>
          </Typography>

          <Typography
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <PublishedWithChangesIcon sx={{ fontSize: 30 }} />
            <h6>7-day</h6>
            <h6>Replacement</h6>
          </Typography>
        </Box>
      </Box>

      {/* New Arrivals */}
      <Box sx={{ px: 2, mt: 3 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            New Arrivals
          </Typography>

          <Button
            variant="text"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              p: 0,
              minWidth: "auto",
            }}
            // onClick={() => navigate("/products")}  // optional
          >
            View all
            <ArrowForwardIcon sx={{ fontSize: 18, ml: 0.5 }} />
          </Button>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {ourProducts.map((item, i) => (
            <Grid key={i}>
              <ProductCard
                title={item.title}
                image={item.image}
                price={item.price}
                strikePrice={item.strikePrice}
                discount={item.discount}
                rating={item.rating}
                ratingCount={item.ratingCount}
                colors={item.colors}
                moreColors={item.moreColors}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Our products */}
      <Box sx={{ px: 2, mt: 6 }}>
        {/* Title row: left title, right "View all" */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 3,
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Expoler our Products
          </Typography>

          <Button
            variant="text"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              p: 0,
              minWidth: "auto",
            }}
            // onClick={() => navigate("/products")}  // optional
          >
            View all
            <ArrowForwardIcon sx={{ fontSize: 18, ml: 0.5 }} />
          </Button>
        </Box>

        {/* 6 cards per row on desktop */}
        <Grid container spacing={3} justifyContent="center">
          {ourProducts.map((item, i) => (
            <Grid key={i}>
              <ProductCard
                title={item.title}
                image={item.image}
                price={item.price}
                strikePrice={item.strikePrice}
                discount={item.discount}
                rating={item.rating}
                ratingCount={item.ratingCount}
                colors={item.colors}
                moreColors={item.moreColors}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Explore Z-electronics Banner */}
      <Box sx={{ px: 2, mt: 6 }}>
        {/* Header row */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography variant="h5" fontWeight="700">
            Explore Z-electronics
          </Typography>

          <Button
            variant="text"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              p: 0,
              minWidth: "auto",
            }}
          >
            View all
            <ArrowForwardIcon sx={{ fontSize: 18, ml: 0.5 }} />
          </Button>
        </Box>

        {/* Banner box */}
        <Box
          sx={{
            width: "100%",
            height: { xs: 180, sm: 220, md: 260 },
            borderRadius: 3,
            overflow: "hidden",
            background: "#000",
            position: "relative",
            boxShadow: 2,
            border: "1px solid #00000018",
          }}
        >
          <img
            src={Banner}
            alt="Explore electronics banner"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
              objectPosition: "center",
              display: "block",
            }}
          />

          {/* Optional overlay example (remove if not needed) */}
          {/* <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(0,0,0,0.45), transparent)",
            }}
          /> */}
        </Box>
      </Box>

      {/* CLIENTS / COMPANIES */}
      <Box sx={{ px: 2, mt: 8 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3}>
          Our Major Clients
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {clientLogos.map((logo, i) => (
            <Grid key={i}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  width: 150,
                  height: 80,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={logo}
                  alt="client"
                  style={{ maxWidth: "100%", maxHeight: "60%" }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CONTACT US */}
      <Box sx={{ px: 3, mt: 10 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3}>
          Contact Us
        </Typography>

        <Box
          sx={{
            maxWidth: 600,
            mx: "auto",
            p: 3,
            borderRadius: 4,
            backgroundColor: "white",
            boxShadow: 4,
          }}
        >
          <TextField fullWidth label="Your Name" sx={{ mb: 2 }} />
          <TextField fullWidth label="Email" sx={{ mb: 2 }} />
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            sx={{ mb: 3 }}
          />
          <Button variant="contained" fullWidth sx={{ py: 1.2 }}>
            Send Message
          </Button>
        </Box>
      </Box>

      {/* footer */}
      <UserFooter />
    </>
  );
}
