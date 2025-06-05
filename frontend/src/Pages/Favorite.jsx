

import {
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
} from "@mui/material";

import { useContext } from "react";
import { StoreContext } from "../Contaxt/storeContext";

export default function Favorite() {
    const { favorite, removeFavorite, addToCart } = useContext(StoreContext);

    return (
        <Box sx={{ p: 4, minHeight: "100vh", bgcolor: "#f5f5f5" }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Favorite Products
            </Typography>

            {favorite.length === 0 ? (
                <Typography variant="h6" sx={{ mt: 5, textAlign: "center" }}>
                    No favorite products yet.
                </Typography>
            ) : (
                <Grid container spacing={3}>
                    {favorite.map((item) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                                <CardMedia
                                    component="img"
                                    image={item.image}
                                    alt={item.name}
                                    height="180"
                                    sx={{ objectFit: "cover" }}
                                />
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold">
                                        {item.name}
                                    </Typography>
                                    <Typography color="text.secondary">${item.price.toFixed(2)}</Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: "space-between", mt: "auto", px: 3 }}>

                                    <Button onClick={() => removeFavorite(item.id)}
                                        variant="contained"
                                        color="error">
                                        Remove
                                    </Button>
                                    <Button
                                        onClick={() => addToCart(item)}
                                        variant="contained"
                                        color="primary"
                                    >
                                        Add to Cart
                                    </Button>


                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
}
