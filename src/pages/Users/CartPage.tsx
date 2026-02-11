import {
  Box,
  Typography,
  IconButton,
  Button,
  Paper,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQty } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Box sx={{ mt: 15, px: 3 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Shopping Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography>Your cart is empty 🛒</Typography>
      ) : (
        <>
          {cart.map((item) => (
            <Paper
              key={item.id}
              sx={{
                p: 2,
                mb: 2,
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: 80, height: 80, objectFit: "contain" }}
                />
              )}

              <Box sx={{ flexGrow: 1 }}>
                <Typography fontWeight="bold">{item.name}</Typography>
                <Typography>₹{item.price}</Typography>
              </Box>

              {/* Quantity Controls */}
              <Box display="flex" alignItems="center">
                <IconButton onClick={() => updateQty(item.id, item.quantity - 1)}>
                  <RemoveIcon />
                </IconButton>
                <Typography>{item.quantity}</Typography>
                <IconButton onClick={() => updateQty(item.id, item.quantity + 1)}>
                  <AddIcon />
                </IconButton>
              </Box>

              <Typography fontWeight="bold">
                ₹{item.price * item.quantity}
              </Typography>

              <IconButton onClick={() => removeFromCart(item.id)}>
                <DeleteIcon color="error" />
              </IconButton>
            </Paper>
          ))}

          <Divider sx={{ my: 3 }} />

          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6">Total</Typography>
            <Typography variant="h6" fontWeight="bold">
              ₹{total}
            </Typography>
          </Box>

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 3, py: 1.5 }}
          >
            Proceed to Checkout
          </Button>
        </>
      )}
    </Box>
  );
}
