import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import shopimage from "../assets/shopimage.jpg";

export default function Banner() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        mt: 2,
        gap: 5,
        bgcolor: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 3,
        py: 4,
      }}
    >
      <Box sx={{ width: { xs: '100%', md: '50%' }, textAlign: 'center' }}>
        <Typography
          variant={isMdUp ? "h2" : "h5"}
          fontWeight="600"
          lineHeight={isMdUp ? "72px" : "40px"}
        >
          Up to 10% <br/> off Voucher
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{ mb: 3, borderRadius: 5, textTransform: 'none' }}
          >
            Shop Now
          </Button>

          
        </Box>
      </Box>

      <Box sx={{ width: { xs: '100%', md: '50%' }, textAlign: 'center' }}>
        <Box
          component="img"
          src={shopimage}
          alt="hero-image-2"
          sx={{
            width: "100%",
            maxWidth: 500,
            borderRadius: 2,
            boxShadow: 3,
          }}
        />
      </Box>
    </Box>
  );
}
