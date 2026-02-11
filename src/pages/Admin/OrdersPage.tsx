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

type Order = {
  id: number;
  product: string;
  customer: string;
  quantity: number;
  price: number;
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([
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

  const [completedOrders, setCompletedOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem("completed_orders");
    return saved ? (JSON.parse(saved) as Order[]) : [];
  });

  const [invoiceOrder, setInvoiceOrder] = useState<Order | null>(null);
  const [openInvoice, setOpenInvoice] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem(
      "completed_orders",
      JSON.stringify(completedOrders)
    );
  }, [completedOrders]);

  const completeOrder = (id: number) => {
    const order = orders.find((o) => o.id === id);
    if (!order) return;

    setOrders((prev) => prev.filter((o) => o.id !== id));
    setCompletedOrders((prev) => [...prev, order]);
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

    const file = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });

    saveAs(file, `Invoice_Order_${invoiceOrder.id}.xlsx`);
  };

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
          boxShadow: "0 4px 25px rgba(0,0,0,0.2)",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Orders Management
        </Typography>
        <Typography sx={{ opacity: 0.85 }}>
          Track active orders, complete tasks, and export invoices.
        </Typography>
      </Box>

      {/* ACTIVE ORDERS */}
      <Paper sx={{ p: 3, mb: 4, borderRadius: 3 }}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Active Orders
        </Typography>

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
                "&:hover": {
                  boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Stack direction="row" justifyContent="space-between">
                <Box>
                  <Typography fontWeight="bold">
                    {order.product}
                  </Typography>
                  <Typography color="text.secondary">
                    Customer: {order.customer}
                  </Typography>
                  <Typography>Qty: {order.quantity}</Typography>
                  <Typography>Price: ${order.price}</Typography>
                </Box>

                <Button
                  variant="contained"
                  color="success"
                  startIcon={<CheckCircleIcon />}
                  onClick={() => completeOrder(order.id)}
                >
                  Complete
                </Button>
              </Stack>
            </Paper>
          ))
        )}
      </Paper>

      {/* COMPLETED ORDERS */}
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Completed Orders
        </Typography>

        {completedOrders.length === 0 ? (
          <Typography>No completed orders yet.</Typography>
        ) : (
          completedOrders.map((order) => (
            <Paper
              key={order.id}
              sx={{
                p: 2,
                mb: 2,
                background: "#f8f9fa",
                borderRadius: 2,
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

      {/* INVOICE DIALOG */}
      <Dialog
        open={openInvoice}
        onClose={() => setOpenInvoice(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <ReceiptLongIcon /> Invoice
        </DialogTitle>

        <DialogContent>
          {invoiceOrder && (
            <>
              <Typography><b>Order ID:</b> {invoiceOrder.id}</Typography>
              <Typography><b>Customer:</b> {invoiceOrder.customer}</Typography>
              <Typography><b>Product:</b> {invoiceOrder.product}</Typography>
              <Typography><b>Quantity:</b> {invoiceOrder.quantity}</Typography>
              <Typography><b>Unit Price:</b> ${invoiceOrder.price}</Typography>

              <Box
                sx={{
                  mt: 2,
                  p: 2,
                  textAlign: "center",
                  borderRadius: 2,
                  background:
                    "linear-gradient(135deg, #4C6EF5, #15AABF)",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Total: $
                {invoiceOrder.price * invoiceOrder.quantity}
              </Box>
            </>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenInvoice(false)}>Close</Button>
          <Button variant="contained" onClick={exportToExcel}>
            Export to Excel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
