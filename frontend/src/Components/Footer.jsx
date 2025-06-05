import { Box, Typography, TextField, Stack,  } from '@mui/material';

export default function Footer() {

  return (
    <Box
      sx={{
        bgcolor: 'black',
        color: 'white',
        py: 5,
        px: 3,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 4,
        mt: 6,
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h4" fontWeight={600} color="grey.800">
          FitNova
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          Subscribe
        </Typography>
        <TextField
          type="email"
          placeholder="Enter your email"
          variant="outlined"
          size="small"
          sx={{
            bgcolor: 'white',
            input: { color: 'black' },
          }}
        />
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h4" fontWeight={600} color="grey.800">
          Support
        </Typography>
        <Typography variant="body1" align="center">
          Noida Sector 62, Khoda 201301 UP
        </Typography>
        <Typography variant="body2">fitnova@gmail.com</Typography>
        <Typography variant="body2">528502250125</Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h4" fontWeight={600} color="grey.800">
          Account
        </Typography>
        <Typography variant="body1" align="center">
          My Account
        </Typography>
        <Typography variant="body2">Login / Register</Typography>
        <Typography variant="body2">Cart</Typography>
      </Stack>
    </Box>
  );
}
