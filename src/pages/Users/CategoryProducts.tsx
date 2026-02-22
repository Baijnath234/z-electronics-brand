import { Box, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../../components/comman/ProductCard";
import Headphone from "../../assets/images/image1.png";
import image3 from "../../assets/images/image2.png";
import image7 from "../../assets/images/image5.png";
import image4 from "../../assets/images/image4.png";
import image8 from "../../assets/images/image9.png";

export const ourProducts = [
  {
    id: 1,
    title: "linen White Tshirt",
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
    title: "linen black kurta",
    image: image4,
    images: [image4, image8],
    price: "₹2,499",
    strikePrice: "₹4,999",
    discount: "50%",
    rating: 4.6,
    ratingCount: 98,
    category: "Kurta",
    description: "Slim-fit stretchable denim jeans",
  },
  {
    id: 3,
    title: "linen white shirt",
    image: image4,
    images: [image4, image8],
    price: "₹2,499",
    strikePrice: "₹4,999",
    discount: "50%",
    rating: 4.6,
    ratingCount: 98,
    category: "shirt",
    description: "Slim-fit stretchable denim jeans",
  },
];

export default function CategoryProducts() {
  const { category } = useParams();
  const navigate = useNavigate();

  const filteredProducts = ourProducts.filter(
    (p) => p.category.toLowerCase() === category?.toLowerCase()
  );

  return (
    <Box sx={{ px: 3, mt: 12 }}>
      <Typography variant="h4" fontWeight={700} mb={3}>
        {category?.toUpperCase()}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
        }}
      >
        {filteredProducts.map((item) => (
          <Box key={item.id} onClick={() => navigate(`/product/${item.id}`)}>
            <ProductCard {...item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
