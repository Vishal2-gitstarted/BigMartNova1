import {
  Box,
  Grid,
  Typography,
  TextField,
  Paper,
  Divider,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useContext } from "react";
import { StoreContext } from "../Contaxt/storeContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart } = useContext(StoreContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    navigate("/");
  };

  return (
    <Box sx={{ p: 4, bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Checkout
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Billing Details
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="First Name" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Last Name" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Email" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Phone Number" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Address" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="City" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="State" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Postal Code" fullWidth />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <List disablePadding>
              {cart.map((item) => (
                <ListItem key={item.id} sx={{ py: 1, px: 0 }}>
                  <ListItemText
                    primary={item.name}
                    secondary={`Qty: ${item.quantity || 1}`}
                  />
                  <Typography variant="body2">
                    ${(item.price * (item.quantity || 1)).toFixed(2)}
                  </Typography>
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="subtitle1" fontWeight="bold">
                Total
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                ${totalPrice.toFixed(2)}
              </Typography>
            </Box>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3 }}
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
