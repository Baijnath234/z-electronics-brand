import { Box, Typography, Grid } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../../components/comman/ProductCard";
import type { Key } from "react";
import Headphone from "../../assets/images/image1.png"
import image3 from "../../assets/images/image2.png"
import image7 from "../../assets/images/image5.png"
import image4 from "../../assets/images/image4.png"
import image8 from "../../assets/images/image9.png"

export const ourProducts = [
  {
    id: 1,
    title: "White Tshirt men",
    image: Headphone,
    images: [Headphone, image3, image7],
    price: "₹999",
    strikePrice: "₹1,499",
    discount: "33%",
    rating: 4.8,
    ratingCount: 124,
    colors: ["#000", "#0FF", "#00F"],
    moreColors: 1,
    category: "Tshirt",
    description: "Premium cotton t-shirt for daily wear",
  },
  {
    id: 2,
    title: "Blue Denim Jeans",
    image: image4,
    images: [image4, image8],
    price: "₹2,499",
    strikePrice: "₹4,999",
    discount: "50%",
    rating: 4.6,
    ratingCount: 98,
    category: "Jeans",
    description: "Slim-fit stretchable denim jeans",
  },
];

export default function CategoryProducts() {
  const { category } = useParams();
  const navigate = useNavigate();

  const filteredProducts = ourProducts.filter(
    (p) => p.category.toLowerCase() === category
  );

  return (
    <Box sx={{ px: 3, mt: 12 }}>
      <Typography variant="h4" fontWeight={700} mb={3}>
        {category?.toUpperCase()}
      </Typography>

      <Grid container spacing={3}>
        {filteredProducts.map((item: { id: Key | null | undefined; }) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Box onClick={() => navigate(`/product/${item.id}`)}>
              <ProductCard {...item} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
