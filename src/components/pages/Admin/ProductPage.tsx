import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  IconButton,
  Stack,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import NewReleasesIcon from "@mui/icons-material/NewReleases";

export default function ProductPage() {
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
  });

  const [rows, setRows] = useState([
    { id: 1, name: "Apple Juice", price: 120, stock: 50, category: "Juice" },
    { id: 2, name: "Mango Shake", price: 150, stock: 32, category: "Shake" },
  ]);

  const handleOpenAdd = () => {
    setEditId(null);
    setProduct({ name: "", price: "", stock: "", category: "" });
    setOpen(true);
  };

  const handleOpenEdit = (row: any) => {
    setEditId(row.id);
    setProduct({
      name: row.name,
      price: row.price,
      stock: row.stock,
      category: row.category,
    });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleChange = (e: any) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSaveProduct = () => {
    if (editId) {
      setRows((prev) =>
        prev.map((row) =>
          row.id === editId
            ? {
                ...row,
                ...product,
                price: Number(product.price),
                stock: Number(product.stock),
              }
            : row
        )
      );
    } else {
      const newProduct = {
        id: rows.length + 1,
        ...product,
        price: Number(product.price),
        stock: Number(product.stock),
      };
      setRows([...rows, newProduct]);
    }

    setEditId(null);
    setProduct({ name: "", price: "", stock: "", category: "" });
    setOpen(false);
  };

  const handleDelete = (id: number) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  // DataGrid columns
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Product Name", width: 180 },
    { field: "price", headerName: "Price", width: 120 },
    { field: "stock", headerName: "Stock", width: 120 },
    { field: "category", headerName: "Category", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params: any) => (
        <Stack direction="row" spacing={1}>
          <IconButton
            onClick={() => handleOpenEdit(params.row)}
            sx={{
              color: "#4C6EF5",
              "&:hover": { background: "rgba(76,110,245,0.1)" },
            }}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            onClick={() => handleDelete(params.row.id)}
            sx={{
              color: "#E03131",
              "&:hover": { background: "rgba(224,49,49,0.1)" },
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <Box>
      {/* HEADER WITH GRADIENT */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #4C6EF5, #15AABF)",
          p: 3,
          mb: 3,
          borderRadius: 2,
          color: "white",
          boxShadow: "0 4px 25px rgba(0,0,0,0.2)",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Product Management
        </Typography>
        <Typography sx={{ opacity: 0.8 }} mt={1}>
          Track, add, and manage your product inventory.
        </Typography>
      </Box>

      {/* STAT CARDS */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              gap: 2,
              boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
            }}
          >
            <InventoryIcon sx={{ fontSize: 40, color: "#4C6EF5" }} />
            <Box>
              <Typography fontWeight="bold">Total Products</Typography>
              <Typography fontSize={26}>{rows.length}</Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              gap: 2,
              boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
            }}
          >
            <ReportProblemIcon sx={{ fontSize: 40, color: "#E8590C" }} />
            <Box>
              <Typography fontWeight="bold">Low Stock</Typography>
              <Typography fontSize={26}>2</Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              gap: 2,
              boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
            }}
          >
            <NewReleasesIcon sx={{ fontSize: 40, color: "#20C997" }} />
            <Box>
              <Typography fontWeight="bold">New Products</Typography>
              <Typography fontSize={26}>5</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* PRODUCT TABLE */}
      <Paper
        sx={{
          mt: 4,
          p: 3,
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold">
            Product List
          </Typography>

          <Button
            variant="contained"
            startIcon={<AddShoppingCartIcon />}
            onClick={handleOpenAdd}
            sx={{
              background: "#4C6EF5",
              "&:hover": { background: "#3B5BDB" },
              borderRadius: 2,
              px: 3,
              py: 1,
              fontWeight: "bold",
            }}
          >
            Add Product
          </Button>
        </Box>

        <Box sx={{ height: 420, mt: 2 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[5]}
            sx={{
              borderRadius: 2,
              background: "white",
              "& .MuiDataGrid-row:hover": {
                background: "#f1f3f5",
              },
            }}
          />
        </Box>
      </Paper>

      {/* ADD / EDIT PRODUCT MODAL */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        sx={{
          "& .MuiPaper-root": {
            borderRadius: 3,
            p: 1,
            boxShadow: "0 6px 30px rgba(0,0,0,0.25)",
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: "bold" }}>
          {editId ? "Edit Product" : "Add New Product"}
        </DialogTitle>

        <DialogContent dividers sx={{ p: 3 }}>
          <TextField
            label="Product Name"
            name="name"
            fullWidth
            margin="normal"
            value={product.name}
            onChange={handleChange}
          />

          <TextField
            label="Price"
            name="price"
            type="number"
            fullWidth
            margin="normal"
            value={product.price}
            onChange={handleChange}
          />

          <TextField
            label="Stock"
            name="stock"
            type="number"
            fullWidth
            margin="normal"
            value={product.stock}
            onChange={handleChange}
          />

          <TextField
            label="Category"
            select
            name="category"
            fullWidth
            margin="normal"
            value={product.category}
            onChange={handleChange}
          >
            <MenuItem value="Juice">Juice</MenuItem>
            <MenuItem value="Shake">Shake</MenuItem>
            <MenuItem value="Snacks">Snacks</MenuItem>
          </TextField>
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleSaveProduct}
            sx={{ background: "#4C6EF5", "&:hover": { background: "#3B5BDB" } }}
          >
            {editId ? "Update Product" : "Save Product"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
