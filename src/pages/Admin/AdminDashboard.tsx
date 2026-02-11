import {
  Box,
  Paper,
  Typography,
  Grid,
  Stack,
} from "@mui/material";

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
} from "recharts";

const pieData = [
  { name: "Orders", value: 40 },
  { name: "Users", value: 25 },
  { name: "Revenue", value: 35 },
];

const barData = [
  { name: "Jan", sales: 300 },
  { name: "Feb", sales: 500 },
  { name: "Mar", sales: 700 },
  { name: "Apr", sales: 600 },
];

const lineData = [
  { year: "2021", value: 1200 },
  { year: "2022", value: 1800 },
  { year: "2023", value: 2400 },
  { year: "2024", value: 3000 },
];

const COLORS = ["#4f46e5", "#7c3aed", "#0ea5e9"];

export default function AdminDashboard() {
  return (
    <Box>
      {/* HEADER WITH GRADIENT */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #4C6EF5, #15AABF)",
          p: 3,
          borderRadius: 2,
          color: "white",
          boxShadow: "0 4px 25px rgba(0,0,0,0.2)",
          mb: 3,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Dashboard Overview
        </Typography>
        <Typography sx={{ opacity: 0.85 }} mt={1}>
          Track your system performance, growth, and business indicators.
        </Typography>
      </Box>

      {/* SUMMARY CARDS */}
      <Grid container spacing={3} mb={3}>
        <Grid>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              transition: "0.2s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              },
            }}
          >
            <Typography fontWeight="bold" color="#4C6EF5">
              Total Orders
            </Typography>
            <Typography fontSize={32} fontWeight="bold">
              2,430
            </Typography>
          </Paper>
        </Grid>

        <Grid>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              transition: "0.2s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              },
            }}
          >
            <Typography fontWeight="bold" color="#7c3aed">
              Total Users
            </Typography>
            <Typography fontSize={32} fontWeight="bold">
              1,120
            </Typography>
          </Paper>
        </Grid>

        <Grid>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              transition: "0.2s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              },
            }}
          >
            <Typography fontWeight="bold" color="#0ea5e9">
              Revenue (Monthly)
            </Typography>
            <Typography fontSize={32} fontWeight="bold">
              $18,200
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* CHARTS SECTION */}
      <Grid container spacing={3}>
        {/* PIE CHART */}
        <Grid>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              textAlign: "center",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              transition: "0.2s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              },
            }}
          >
            <Typography variant="h6" fontWeight="bold" mb={1}>
              Data Distribution
            </Typography>

            <PieChart width={280} height={250}>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label={({ name, percent }:any) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {pieData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
            </PieChart>
          </Paper>
        </Grid>

        {/* BAR CHART */}
        <Grid>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              transition: "0.2s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              },
            }}
          >
            <Typography variant="h6" fontWeight="bold" mb={1}>
              Monthly Sales
            </Typography>

            <BarChart width={280} height={250} data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#4f46e5" radius={[5, 5, 0, 0]} />
            </BarChart>
          </Paper>
        </Grid>

        {/* LINE CHART */}
        <Grid>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              transition: "0.2s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              },
            }}
          >
            <Typography variant="h6" fontWeight="bold" mb={1}>
              Fiscal Year Growth
            </Typography>

            <LineChart width={280} height={250} data={lineData}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#7c3aed"
                strokeWidth={3}
                dot={{ r: 5, fill: "#7c3aed" }}
              />
            </LineChart>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
