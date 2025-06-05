import { useContext } from "react";
import { StoreContext } from "../Contaxt/storeContext";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Button,
  IconButton,
  Avatar,
  Paper,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Cart() {
  const { cart, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <Box sx={{ p: 4, bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Shopping Cart
      </Typography>

      {cart.length === 0 ? (
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Typography variant="h6">Your cart is empty</Typography>
          <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate("/")}>
            Go to Products
          </Button>
        </Box>
      ) : (
        <Paper elevation={3} sx={{ overflowX: "auto" }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#e0e0e0"}}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Product</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Quantity</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Subtotal</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {cart.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Avatar
                      variant="rounded"
                      src={item.image}
                      alt={item.name}
                      sx={{ width: 64, height: 64 }}
                    />
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell>{item.quantity || 1}</TableCell>
                  <TableCell>${(item.price * (item.quantity || 1)).toFixed(2)}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => removeFromCart(item.id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ display: "flex",  p: 2 }}>
            <Button variant="contained" onClick={() => navigate("/")} sx={{ bgcolor: "black", color: "white" }}>
              Continue Shopping
            </Button>
            <Button variant="contained" onClick={() => navigate("/checkout")} sx={{ bgcolor: "red", color: "white" , ml: 2 }}>
              Checkout
            </Button>
            <Typography variant="h6" fontWeight="bold" sx={{ ml: "auto", color: "black" }}>
              Total: ${totalPrice.toFixed(2)}
            </Typography>
          </Box>
        </Paper>
      )}
    </Box>
  );
}
