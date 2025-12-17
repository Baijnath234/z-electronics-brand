import {
  Box,
  Typography,
  Paper,
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [completedOrders, setCompletedOrders] = useState(() => {
    const saved = localStorage.getItem("completed_orders");
    return saved ? JSON.parse(saved) : [];
  });

  const [orders, setOrders] = useState([
    {
      id: 1,
      product: "Apple iPhone 15",
      customer: "John Doe",
      quantity: 1,
      price: 1299,
    },
    {
      id: 2,
      product: "Samsung Galaxy S24",
      customer: "Jane Smith",
      quantity: 2,
      price: 899,
    },
  ]);

  const [invoiceOrder, setInvoiceOrder] = useState(null);
  const [openInvoice, setOpenInvoice] = useState(false);

  useEffect(() => {
    localStorage.setItem("completed_orders", JSON.stringify(completedOrders));
  }, [completedOrders]);

  const completeOrder = (id:number) => {
    const order:any = orders.find((o) => o.id === id);

    setOrders((prev) => prev.filter((o) => o.id !== id));
    setCompletedOrders((prev:any) => [...prev, order]);

    setInvoiceOrder(order);
    setOpenInvoice(true);
  };

  const exportToExcel = () => {
    if (!invoiceOrder) return;

    const data = [
      ["Invoice"],
      ["Invoice ID", invoiceOrder.id],
      ["Customer", invoiceOrder.customer],
      ["Product", invoiceOrder.product],
      ["Quantity", invoiceOrder.quantity],
      ["Unit Price", invoiceOrder.price],
      ["Total", invoiceOrder.price * invoiceOrder.quantity],
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Invoice");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const file = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(file, `Invoice_Order_${invoiceOrder.id}.xlsx`);
  };

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
          Orders Management
        </Typography>
        <Typography sx={{ opacity: 0.8 }} mt={1}>
          Track active orders, complete tasks, and export invoices.
        </Typography>
      </Box>

      {/* ACTIVE ORDERS */}
      <Paper
        sx={{
          p: 3,
          mb: 4,
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Active Orders
        </Typography>

        <Box>
          {orders.length === 0 ? (
            <Typography>No active orders.</Typography>
          ) : (
            orders.map((order) => (
              <Paper
                key={order.id}
                sx={{
                  p: 2,
                  mb: 2,
                  borderRadius: 2,
                  transition: "0.2s",
                  "&:hover": {
                    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <Stack direction="row" justifyContent="space-between">
                  <Box>
                    <Typography fontWeight="bold" fontSize={18}>
                      {order.product}
                    </Typography>
                    <Typography color="gray">Customer: {order.customer}</Typography>
                    <Typography>Qty: {order.quantity}</Typography>
                    <Typography>Price: ${order.price}</Typography>
                  </Box>

                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<CheckCircleIcon />}
                    onClick={() => completeOrder(order.id)}
                    sx={{
                      height: 40,
                      px: 3,
                      fontWeight: "bold",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                    }}
                  >
                    Complete
                  </Button>
                </Stack>
              </Paper>
            ))
          )}
        </Box>
      </Paper>

      {/* COMPLETED ORDERS */}
      <Paper
        sx={{
          p: 3,
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Completed Orders
        </Typography>

        {completedOrders.length === 0 ? (
          <Typography>No completed orders yet.</Typography>
        ) : (
          completedOrders.map((order:any) => (
            <Paper
              key={order.id}
              sx={{
                p: 2,
                mb: 2,
                background: "#f8f9fa",
                borderRadius: 2,
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <Typography fontWeight="bold">{order.product}</Typography>
              <Typography>Customer: {order.customer}</Typography>
              <Typography>Qty: {order.quantity}</Typography>
              <Typography>Price: ${order.price}</Typography>
            </Paper>
          ))
        )}
      </Paper>

      {/* INVOICE MODAL */}
      <Dialog
        open={openInvoice}
        onClose={() => setOpenInvoice(false)}
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
        <DialogTitle
          sx={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <ReceiptLongIcon /> Invoice
        </DialogTitle>

        <DialogContent
          sx={{
            pb: 1,
            fontSize: 16,
          }}
        >
          {invoiceOrder && (
            <>
              <Typography fontWeight="bold">Order ID:</Typography>
              <Typography mb={1}>{invoiceOrder.id}</Typography>

              <Typography fontWeight="bold">Customer:</Typography>
              <Typography mb={1}>{invoiceOrder.customer}</Typography>

              <Typography fontWeight="bold">Product:</Typography>
              <Typography mb={1}>{invoiceOrder.product}</Typography>

              <Typography fontWeight="bold">Quantity:</Typography>
              <Typography mb={1}>{invoiceOrder.quantity}</Typography>

              <Typography fontWeight="bold">Unit Price:</Typography>
              <Typography mb={2}>${invoiceOrder.price}</Typography>

              {/* TOTAL PRICE BOX */}
              <Box
                sx={{
                  mt: 2,
                  p: 2,
                  borderRadius: 2,
                  textAlign: "center",
                  background: "linear-gradient(135deg, #4C6EF5, #15AABF)",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Total: ${invoiceOrder.quantity * invoiceOrder.price}
              </Box>
            </>
          )}
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
          <Button variant="outlined" onClick={() => setOpenInvoice(false)}>
            Close
          </Button>

          <Button
            variant="contained"
            onClick={exportToExcel}
            sx={{
              background: "#4C6EF5",
              "&:hover": { background: "#3B5BDB" },
            }}
          >
            Export to Excel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
