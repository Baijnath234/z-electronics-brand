import {
  Box,
  Typography,
  Paper,
  Grid,
  Divider,
  Stack,
  Chip,
} from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";

import { useState } from "react";

export default function ReportsPage() {
  const [products] = useState([
    { id: 1, name: "iPhone 15", stock: 10, sold: 5, price: 1200 },
    { id: 2, name: "Galaxy S24", stock: 8, sold: 3, price: 950 },
    { id: 3, name: "Pixel 9", stock: 6, sold: 4, price: 999 },
  ]);

  const dailyReport = {
    earnings: 4200,
    expenses: 1800,
    growth: 6.5,
  };

  const annualReport = {
    totalEarnings: 82000,
    totalExpenses: 32000,
    netProfit: 50000,
    growthComparison: "+12% compared to last year",
  };

  const totalProducts = products.length;
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const totalSold = products.reduce((sum, p) => sum + p.sold, 0);

  return (
    <Box>
      {/* PAGE HEADER WITH GRADIENT */}
      <Box
        sx={{
          p: 3,
          borderRadius: 2,
          mb: 3,
          color: "white",
          background: "linear-gradient(135deg, #4C6EF5, #15AABF)",
          boxShadow: "0 4px 25px rgba(0,0,0,0.2)",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Reports & Analytics
        </Typography>
        <Typography mt={1} sx={{ opacity: 0.8 }}>
          Overview of product performance, daily stats, and annual insights.
        </Typography>
      </Box>

      {/* SUMMARY CARDS */}
      <Grid container spacing={2} mb={3}>
        {/* Total Products */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              gap: 2,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <InventoryIcon sx={{ fontSize: 40, color: "#4C6EF5" }} />
            <Box>
              <Typography variant="h6">Total Products</Typography>
              <Typography fontSize={28} fontWeight="bold">
                {totalProducts}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Stock Count */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              gap: 2,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <ShoppingCartIcon sx={{ fontSize: 40, color: "#15AABF" }} />
            <Box>
              <Typography variant="h6">Items in Stock</Typography>
              <Typography fontSize={28} fontWeight="bold">
                {totalStock}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Items Sold */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              gap: 2,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <DoneAllIcon sx={{ fontSize: 40, color: "#12B886" }} />
            <Box>
              <Typography variant="h6">Items Sold</Typography>
              <Typography fontSize={28} fontWeight="bold">
                {totalSold}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* PRODUCT DETAILS */}
      <Paper
        sx={{
          p: 3,
          mb: 3,
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Product Details
        </Typography>
        <Divider sx={{ my: 2 }} />

        {products.map((product) => (
          <Paper
            key={product.id}
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 2,
              background: "#f8f9fa",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            }}
          >
            <Typography fontWeight="bold">{product.name}</Typography>
            <Typography>Stock: {product.stock}</Typography>
            <Typography>Sold: {product.sold}</Typography>
            <Typography>Price: ${product.price}</Typography>
          </Paper>
        ))}
      </Paper>

      {/* DAILY REPORT */}
      <Paper
        sx={{
          p: 3,
          mb: 3,
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Daily Report
        </Typography>
        <Divider sx={{ my: 2 }} />

        <Stack direction="row" spacing={5} alignItems="center">
          <Box>
            <Stack direction="row" alignItems="center" spacing={1}>
              <MonetizationOnIcon color="success" />
              <Typography fontWeight="bold">Earnings:</Typography>
            </Stack>
            <Typography mt={0.5}>${dailyReport.earnings}</Typography>
          </Box>

          <Box>
            <Stack direction="row" alignItems="center" spacing={1}>
              <MoneyOffIcon color="error" />
              <Typography fontWeight="bold">Expenses:</Typography>
            </Stack>
            <Typography mt={0.5}>${dailyReport.expenses}</Typography>
          </Box>

          <Box>
            <Stack direction="row" alignItems="center" spacing={1}>
              <TrendingUpIcon color="primary" />
              <Typography fontWeight="bold">Growth:</Typography>
            </Stack>

            <Chip
              label={`${dailyReport.growth}%`}
              color={dailyReport.growth >= 0 ? "success" : "error"}
              sx={{
                fontWeight: "bold",
                mt: 1,
                px: 1.5,
                py: 0.5,
                fontSize: 16,
              }}
            />
          </Box>
        </Stack>
      </Paper>

      {/* ANNUAL REPORT */}
      <Paper
        sx={{
          p: 3,
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Annual Report
        </Typography>
        <Divider sx={{ my: 2 }} />

        <Typography fontWeight="bold">
          Total Earnings: ${annualReport.totalEarnings}
        </Typography>
        <Typography fontWeight="bold">
          Total Expenses: ${annualReport.totalExpenses}
        </Typography>
        <Typography fontWeight="bold">
          Net Profit: ${annualReport.netProfit}
        </Typography>

        <Typography mt={2} color="primary" fontWeight="bold">
          {annualReport.growthComparison}
        </Typography>
      </Paper>
    </Box>
  );
}
