import {
  Box,
  Button,
  Typography,
  Stack,
  Rating,
  IconButton
} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { useContext } from "react";
import { StoreContext } from "../Contaxt/storeContext";

export default function ProductCard({
  id,
  name,
  image,
  price,
  rating,
  category,
  stock
}) {
  const { addToCart, favorite, favoriteProduct, removeFavorite } = useContext(StoreContext);
  const isFavorite = favorite.some(item => item.id === id);
  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      favoriteProduct({ id, name, image, price });
    }
  }

  return (
    <Box
      sx={{
        width: 280,
        height: 400,
        p: 2,
        borderRadius: 3,
        boxShadow: 3,
        position: "relative",
        justifyContent: "center",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          boxShadow: 6,
          transform: "translateY(-5px)"
        },
        bgcolor: "background.paper"
      }}
    >
      <IconButton
      onClick={handleFavorite}
        size="small"
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          bgcolor: "white",
          boxShadow: 1,
          "&:hover": { bgcolor: "#ffe6e6" }
        }}
      >
        <FavoriteBorderIcon sx={{ color: "red" }} />
      </IconButton>

      <Box
        component="img"
        src={image}
        alt={name}
        sx={{
          width: "100%",
          height: 200,
          objectFit: "cover",
          boxShadow: 1,
          borderRadius: 2,
          mb: 4
        }}
      />

      <Stack spacing={1}>
        <Typography variant="h6" fontWeight={600}>
          {name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {category}
        </Typography>

        <Typography variant="subtitle1" fontWeight={500}>
          ${price.toFixed(2)}
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Rating value={rating} precision={0.5} readOnly size="small" />
          <Typography variant="caption" sx={{ color: "red" }}>
            ({rating}) | Stock: {stock}
          </Typography>
        </Stack>

        <Button
          onClick={() => addToCart({ id, name, image, price })}
          variant="contained"
          
          sx={{
            mt: 2,

            bgcolor: "black",
            color: "white"
          }}
        >
          Add To Cart
        </Button>
      </Stack>
    </Box>
  );
}
