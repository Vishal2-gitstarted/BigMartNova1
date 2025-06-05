import { Box, Typography, Grid, TextField, Button } from '@mui/material';

export default function Contact() {
  return (
    <Box
      sx={{
        bgcolor: '#f5f5f5',
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 8 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container spacing={4} alignItems="center" maxWidth="lg">


        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" fontWeight="bold" mb={2}>
              Contact Us
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              We are available <strong>24/7</strong>. Reach out anytime.
              <br />
              Phone: <strong>248-721-2475</strong>
            </Typography>

            <Box component="form">
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                type="email"
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
              />
              <Button
                variant="contained"
                color="primary"
                size="medium"
                sx={{ mt: 3, px: 4 }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
