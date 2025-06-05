import { Box, Grid, Typography, Container } from "@mui/material";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import { StoreContext } from "../Contaxt/storeContext";

export default function Products() {
  const { ProductData } = useContext(StoreContext);
  return (
    <Box sx={{ py: 8, bgcolor: "#f9f9f9" }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 8 } }} >
        <Box  mb={5}>
          <Typography variant="h5" color="error" fontWeight="bold">
            Today's
          </Typography>
          <Typography variant="h3" fontWeight="bold">
            Summer Sale
          </Typography>
          <Typography variant="body1" color="text.secondary" mt={1}>
            Discover deals on top-selling products of the season
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {ProductData.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
