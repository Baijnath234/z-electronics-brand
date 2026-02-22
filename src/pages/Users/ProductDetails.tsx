import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import { useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function ProductDetails() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const [selectedImage, setSelectedImage] = useState(
    product?.images[0]
  );
  const [qty, setQty] = useState(1);

  if (!product) return null;

  return (
    <Box sx={{ maxWidth: 1300, mx: "auto", px: 2, mt: 12 }}>
      {/* MAIN LAYOUT */}
      <Box
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
        }}
      >
        {/* IMAGE GALLERY */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {/* Thumbnails */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {product.images.map((img, i) => (
              <Box
                key={i}
                onClick={() => setSelectedImage(img)}
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: 2,
                  border:
                    selectedImage === img
                      ? "2px solid #1976d2"
                      : "1px solid #ddd",
                  cursor: "pointer",
                }}
              >
                <img
                  src={img}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Main Image */}
          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: "1px solid #eee",
              p: 2,
            }}
          >
            <img
              src={selectedImage}
              alt={product.title}
              style={{
                width: "100%",
                height: 400,
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>

        {/* PRODUCT INFO */}
        <Box>
          <Typography variant="h4" fontWeight={700}>
            {product.title}
          </Typography>

          <Typography variant="body2" color="text.secondary" mt={1}>
            Posted on: {product.postDate}
          </Typography>

          <Typography variant="h5" color="green" mt={2}>
            {product.price}
          </Typography>

          <Typography sx={{ mt: 1 }} color="text.secondary">
            <del>{product.strikePrice}</del> • {product.discount} OFF
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography fontWeight={600}>Product Quality</Typography>
          <Typography variant="body2" color="text.secondary">
            {product.quality}
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Quantity */}
          <Typography fontWeight={600} mb={1}>
            Quantity
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton onClick={() => qty > 1 && setQty(qty - 1)}>
              <RemoveIcon />
            </IconButton>
            <Typography>{qty}</Typography>
            <IconButton onClick={() => setQty(qty + 1)}>
              <AddIcon />
            </IconButton>
          </Box>

          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={() =>
              addToCart({
                id: product.id,
                name: product.title,
                price: Number(product.price),
                image: product.image,
                quantity: qty,
              })
            }
          >
            Add to Cart
          </Button>
        </Box>
      </Box>

      {/* DESCRIPTION */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" fontWeight={700} mb={2}>
          Product Description
        </Typography>
        <Typography color="text.secondary">
          {product.description}
        </Typography>
      </Box>

      {/* POLICY */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" fontWeight={700} mb={2}>
          Product Policy
        </Typography>

        <Typography>🚚 {product.policy?.delivery}</Typography>
        <Typography>🔁 {product.policy?.return}</Typography>
        <Typography>🛡 {product.policy?.warranty}</Typography>
      </Box>
    </Box>
  );
}
