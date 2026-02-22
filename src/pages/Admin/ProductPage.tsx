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
import { useProducts } from "../../context/ProductContext";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import NewReleasesIcon from "@mui/icons-material/NewReleases";

export default function AdminProductPage() {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();

  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  console.log({ imagePreviews });



  const [product, setProduct] = useState({
    name: "",
    price: "",
    strikePrice: "",
    discount: "",
    stock: "",
    category: "",
    description: "",
    quality: "",
    colors: "",
  });

  /* ---------------- HANDLERS ---------------- */


  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const readers: Promise<string>[] = [];

    for (let i = 0; i < files.length; i++) {
      readers.push(
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(files[i]);
        })
      );
    }

    Promise.all(readers).then((images) => {
      setImagePreviews(images);
    });
  };


  const handleOpenAdd = () => {
    setEditId(null);
    setProduct({
      name: "",
      price: "",
      strikePrice: "",
      discount: "",
      stock: "",
      category: "",
      description: "",
      quality: "",
      colors: "",
    });
    setImagePreviews([]);
    setOpen(true);
  };

  const handleOpenEdit = (row: any) => {
    setEditId(row.id);
    setProduct({
      name: row.name,
      price: String(row.price),
      strikePrice: String(row.strikePrice || ""),
      discount: row.discount || "",
      stock: String(row.stock),
      category: row.category,
      description: row.description || "",
      quality: row.quality || "",
      colors: row.colors?.join(", ") || "",
    });

    setImagePreviews(row.images || []);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleChange = (e: any) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSaveProduct = () => {
    const payload = {
      id: editId ?? Date.now(),
      name: product.name,
      price: Number(product.price),
      strikePrice: product.strikePrice
        ? Number(product.strikePrice)
        : undefined,
      discount: product.discount,
      stock: Number(product.stock),
      category: product.category,
      description: product.description,
      quality: product.quality,
      colors: product.colors
        ? product.colors.split(",").map((c) => c.trim())
        : [],
      images: imagePreviews,
      createdAt: new Date().toISOString(),
    };

    editId ? updateProduct(payload) : addProduct(payload);

    setOpen(false);
  };



  /* ---------------- DATAGRID COLUMNS ---------------- */

  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "name", headerName: "Product Name", width: 200 },
    { field: "price", headerName: "Price (₹)", width: 120 },
    { field: "strikePrice", headerName: "StrikePrice (₹)", width: 120 },
    { field: "discount", headerName: "Discount (₹)", width: 120 },
    { field: "stock", headerName: "Stock", width: 120 },
    { field: "category", headerName: "Category", width: 150 },
    { field: "colors", headerName: "Colors", width: 150 },
    { field: "quality", headerName: "Quality", width: 150 },
    { field: "description", headerName: "Description", width: 150 },
    {
      field: "images",
      headerName: "Images",
      width: 120,
      renderCell: (params: any) =>
        params.value?.length ? "📷" : "-",
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 160,
      renderCell: (params: any) => (
        <Stack direction="row" spacing={1}>
          <IconButton
            onClick={() => handleOpenEdit(params.row)}
            sx={{ color: "#4C6EF5" }}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            onClick={() => deleteProduct(params.row.id)}
            sx={{ color: "#E03131" }}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  /* ---------------- UI ---------------- */

  return (
    <Box>
      {/* HEADER */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #4C6EF5, #15AABF)",
          p: 3,
          mb: 3,
          borderRadius: 2,
          color: "white",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Product Management
        </Typography>
        <Typography sx={{ opacity: 0.85 }}>
          Add products & categories – visible instantly on user site
        </Typography>
      </Box>

      {/* STATS */}
      <Grid container spacing={3}>
        <Grid>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <InventoryIcon sx={{ fontSize: 40, color: "#4C6EF5" }} />
            <Typography fontWeight="bold">Total Products</Typography>
            <Typography fontSize={26}>{products.length}</Typography>
          </Paper>
        </Grid>

        <Grid>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <ReportProblemIcon sx={{ fontSize: 40, color: "#E8590C" }} />
            <Typography fontWeight="bold">Low Stock</Typography>
            <Typography fontSize={26}>
              {products.filter((p) => p.stock < 5).length}
            </Typography>
          </Paper>
        </Grid>

        <Grid>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <NewReleasesIcon sx={{ fontSize: 40, color: "#20C997" }} />
            <Typography fontWeight="bold">New Products</Typography>
            <Typography fontSize={26}>
              {products.slice(-5).length}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* PRODUCT TABLE */}
      <Paper sx={{ mt: 4, p: 3, borderRadius: 3 }}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6" fontWeight="bold">
            Product List
          </Typography>

          <Button
            variant="contained"
            startIcon={<AddShoppingCartIcon />}
            onClick={handleOpenAdd}
          >
            Add Product
          </Button>
        </Box>

        <Box sx={{ height: 420, mt: 2 }}>
          <DataGrid
            rows={products}
            columns={columns}
            pageSizeOptions={[5]}
          />
        </Box>
      </Paper>

      {/* ADD / EDIT MODAL */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          {editId ? "Edit Product" : "Add New Product"}
        </DialogTitle>

        <DialogContent>
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
            <MenuItem value="shirt">Shirt</MenuItem>
            <MenuItem value="kurta">Kurta</MenuItem>
            <MenuItem value="t-shirt">T-Shirt</MenuItem>
            <MenuItem value="trouser">Trouser</MenuItem>
          </TextField>

          <TextField
            label="Strike Price"
            name="strikePrice"
            type="number"
            fullWidth
            margin="normal"
            value={product.strikePrice}
            onChange={handleChange}
          />

          <TextField
            label="Discount (e.g. 30%)"
            name="discount"
            fullWidth
            margin="normal"
            value={product.discount}
            onChange={handleChange}
          />

          <TextField
            label="Quality"
            name="quality"
            fullWidth
            margin="normal"
            value={product.quality}
            onChange={handleChange}
          />

          <TextField
            label="Colors (comma separated)"
            name="colors"
            fullWidth
            margin="normal"
            value={product.colors}
            onChange={handleChange}
          />

          <Box mt={2}>
            <Typography fontWeight={600} mb={1}>
              Product Images
            </Typography>

            <Button variant="outlined" component="label">
              Browse Images
              <input
                type="file"
                hidden
                accept="image/*"
                multiple
                onChange={handleImageUpload}
              />
            </Button>

            {/* IMAGE PREVIEW */}
            <Stack direction="row" spacing={2} mt={2} flexWrap="wrap">
              {imagePreviews.map((img, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: 2,
                    border: "1px solid #ddd",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={img}
                    alt="preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              ))}
            </Stack>
          </Box>


          <TextField
            label="Description"
            name="description"
            fullWidth
            multiline
            rows={3}
            margin="normal"
            value={product.description}
            onChange={handleChange}
          />

        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSaveProduct}>
            Save Product
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
