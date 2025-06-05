import { Box, Typography, Container, Grid } from '@mui/material';
import about from '../assets/about.png';

export default function About() {
  return (
    <Box py={10}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Text on Left */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h3" fontWeight="bold" gutterBottom color="text.primary">
                Our Story
              </Typography>
              <Typography variant="body1"  >
                FitNova was born out of a passion for fitness and a desire to make it accessible to everyone. Our journey began with a simple idea: to create a platform that not only provides top-notch fitness resources but also fosters a community of like-minded individuals. We believe that fitness is not just a destination, but a lifelong journey, and we are here to support you every step of the way.
              </Typography>
              <Typography variant="body1">
                Our team is made up of fitness enthusiasts, trainers, and tech experts who are dedicated to bringing you the best in fitness technology. We understand the challenges of maintaining a healthy lifestyle in today's fast-paced world, and we are committed to providing you with the tools and resources you need to succeed.
              </Typography>
            </Box>
          </Grid>

          
            <Box
              component="img"
              src={about}
              alt="About Us"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          
        </Grid>
      </Container>
    </Box>
  );
}
