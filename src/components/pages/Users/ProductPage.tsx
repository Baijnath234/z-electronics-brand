import  { useMemo, useState } from "react";
import UserFooter from "../../layouts/UserFooter";

import {
  Box,
  Container,
  Grid,
  Card,
  // CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  IconButton,
  Rating
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Headphone from "../../../assets/images/Headphone1.png";
import Earbud1 from "../../../assets/images/Earbud1.png";
import Earbud2 from "../../../assets/images/Earbud2.png";
import Earbud3 from "../../../assets/images/Earbud3.png";

/**
 * Example product data. Replace with real data from your API/props.
 * Each product: { id, title, category, image, price, shortDesc, description, rating (optional) }
 */
const sampleProducts = [
  {
    id: "p1",
    title: "Classic Leather Wallet",
    category: "Headphone",
    image: Headphone,
    price: 39.99,
    shortDesc: "Slim, durable leather wallet with 6 card slots.",
    description:
      "Hand-stitched full-grain leather wallet with six card slots, a bill compartment, and RFID protection. Dimensions: 10 x 8 x 1.2 cm. Care: wipe with dry cloth. Lifetime stitching guarantee.",
    rating: 4.5
  },
  {
    id: "p2",
    title: "Running Shoes Pro 3000",
    category: "Earbud",
    image: Earbud1,
    price: 129.0,
    shortDesc: "Lightweight running shoes for daily training.",
    description:
      "Responsive foam midsole and breathable engineered mesh upper. Ideal for road running and gym sessions. Comes with removable insole and reflective heel tab. Available in multiple colors.",
    rating: 4.2
  },
  {
    id: "p3",
    title: "Everyday Cotton Tee",
    category: "Earbud",
    image: Earbud2,
    price: 19.99,
    shortDesc: "Soft 100% cotton t-shirt — great fit and feel.",
    description:
      "Premium combed cotton tee with reinforced neckline and tag-free comfort. Machine washable. Fit: true to size. Perfect as a base layer or casual wear.",
    rating: 4.0
  },
  {
    id: "p4",
    title: "Trail Backpack 25L",
    category: "Earbud",
    image: Earbud3,
    price: 79.0,
    shortDesc: "Durable 25L backpack for hikes and day trips.",
    description:
      "25-liter capacity, water-resistant PU coating, ventilated back panel, padded laptop sleeve (15\"), and multiple organizer pockets. Weight: 0.85kg.",
    rating: 4.7
  },
  {
    id: "p5",
    title: "Casual Slip-Ons",
    category: "Earbud",
    image: Earbud3,
    price: 49.5,
    shortDesc: "Comfortable slip-on shoes with cushioned sole.",
    description:
      "Easy on/off slip-ons with breathable linings and EVA sole for all-day comfort. Perfect for errands or travel.",
    rating: 3.9
  }
];

const ProductPage = () => {
  // products might come from props or API — using sampleProducts for demo
  const [products] = useState(sampleProducts);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null); // product object or null

  // derive categories (memoized)
  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, [products]);

  // filtered products
  const filtered = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [products, activeCategory]);

  console.log({filtered});
  

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 6, pt: 13}}>

        {/* Category chips */}
        <Box sx={{ mb: 3 }}>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {categories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                clickable
                color={cat === activeCategory ? "primary" : "default"}
                variant={cat === activeCategory ? "filled" : "outlined"}
                onClick={() => setActiveCategory(cat)}
                sx={{ textTransform: "capitalize" }}
              />
            ))}
          </Stack>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Grid of products */}
        <Grid container spacing={3}>
          {filtered.map((product:any) => (
            <Grid key={product.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column"
                }}
                elevation={2}
              >
                <img
                  // component="img"
                  height="180"
                  src={product.image}
                  alt={product.title}
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="div" gutterBottom>
                    {product.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {product.shortDesc}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      ₹{(product.price).toFixed(2)}
                    </Typography>

                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <Rating
                        name={`rating-${product.id}`}
                        value={product.rating ?? 0}
                        precision={0.1}
                        size="small"
                        readOnly
                      />
                    </Stack>
                  </Stack>
                </CardContent>

                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Button
                    size="small"
                    onClick={() => setSelectedProduct(product)}
                  >
                    View details
                  </Button>

                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => {
                      // Placeholder for "Add to cart" action
                      // Replace with context / redux / callback as needed
                      alert(`Added "${product.title}" to cart (demo).`);
                    }}
                  >
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}

          {filtered.length === 0 && (
            <Grid>
              <Typography variant="body1">No products found.</Typography>
            </Grid>
          )}
        </Grid>
      </Container>

      {/* Product details dialog */}
      <Dialog
        open={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        maxWidth="md"
        fullWidth
        aria-labelledby="product-dialog-title"
      >
        {selectedProduct && (
          <>
            <DialogTitle sx={{ m: 0, p: 2 }} id="product-dialog-title">
              <Typography variant="h6">{selectedProduct}</Typography>

              <IconButton
                aria-label="close"
                onClick={() => setSelectedProduct(null)}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent dividers>
              <Grid container spacing={2}>
                <Grid >
                  <Box
                    component="img"
                    src={selectedProduct}
                    alt={selectedProduct}
                    sx={{
                      width: "100%",
                      maxHeight: 400,
                      objectFit: "cover",
                      borderRadius: 1
                    }}
                  />
                </Grid>

                <Grid>
                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Category:{" "}
                    <strong style={{ textTransform: "capitalize" }}>
                      {selectedProduct}
                    </strong>
                  </Typography>

                  <Typography variant="h5" sx={{ mb: 1 }}>
                    ₹{selectedProduct}
                  </Typography>

                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                    <Rating
                      name={`dialog-rating-${selectedProduct}`}
                      value={selectedProduct ?? 0}
                      precision={0.1}
                      readOnly
                    />
                    <Typography variant="body2" color="text.secondary">
                      {selectedProduct ? `${selectedProduct} / 5` : ""}
                    </Typography>
                  </Stack>

                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {selectedProduct}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {selectedProduct}
                  </Typography>
                </Grid>
              </Grid>
            </DialogContent>

            <DialogActions>
              <Button
                onClick={() => {
                  alert(`Added "${selectedProduct}" to cart (demo).`);
                }}
                variant="contained"
              >
                Add to cart
              </Button>

              <Button onClick={() => setSelectedProduct(null)}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      <UserFooter />
    </>
  );
};

export default ProductPage;
