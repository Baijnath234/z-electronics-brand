import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/comman/ProductCard";
import { products } from "../../data/products";

export default function ProductPage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ px: 3, mt: 12 }}>
      <Typography variant="h4" fontWeight={700} mb={3}>
        All Products
      </Typography>

      {/* PRODUCTS GRID */}
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
        {products.map((item) => (
          <Box
            key={item.id}
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <ProductCard {...item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
