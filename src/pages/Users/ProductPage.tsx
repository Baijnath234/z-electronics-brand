import { Box, Typography, Grid } from "@mui/material";
import { useSearchParams, useNavigate } from "react-router-dom";
import ProductCard from "./comman/ProductCard";
import { products } from "../../data/products";

export default function ProductPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const category = searchParams.get("category");

  const filteredProducts = category
    ? products.filter(
      (p) => p.category === category.toLowerCase()
    )
    : products;

  return (
    <Box sx={{ maxWidth: 1400, mx: "auto", px: 2, mt: 15 }}>
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        mb={4}
      >
        {category ? category.toUpperCase() : "All Products"}
      </Typography>

      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {filteredProducts.map((item) => (
          <Grid xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Box onClick={() => navigate(`/product/${item.id}`)}>
              <ProductCard {...item} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
