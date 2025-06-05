import { Box, Grid, Typography, Card } from '@mui/material';
import Face3 from '@mui/icons-material/Face3';
import ShirtIcon from '@mui/icons-material/Checkroom';
import BabyIcon from '@mui/icons-material/ChildCare';
import WatchIcon from '@mui/icons-material/Watch';
import UmbrellaIcon from '@mui/icons-material/Umbrella';

const categoriesIcon = [
  { id: "men", label: "Men", icon: ShirtIcon },
  { id: "women", label: "Women", icon: Face3 },
  { id: "kids", label: "Kids", icon: BabyIcon },
  { id: "accessories", label: "Accessories", icon: WatchIcon },
  { id: "footwear", label: "Footwear", icon: UmbrellaIcon },
];

export default function Category() {
  return (
    <Box sx={{ my: 8, width: '100%', px: 4 }}>
      <Typography variant="h5" sx={{ color: 'red', fontWeight: 'bold' }}>Category</Typography>
      <Box sx={{ py: 8, bgcolor: "grey.50", borderRadius: 3 }}>
        <Box px={3}>
          <Typography variant="h4" align="center" fontWeight="bold" mb={4}>
            Shop by category
          </Typography>
          <Grid container spacing={2} justifyContent="center" >
            {categoriesIcon.map(({ id, label, icon: IconComponent }) => (
              <Grid item xs={6} sm={4} md={2.4} key={id}>
                <Card
                  elevation={3}
                  sx={{
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    borderRadius: 2,
                    transition: '0.3s',
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'white',
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: 'grey.200',
                      borderRadius: '50%',
                      width: 96,
                      height: 96,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      overflow: 'hidden',
                    }}
                  >
                    <IconComponent sx={{ fontSize: 48 }} />
                  </Box>
                  <Typography variant="subtitle1" fontWeight="medium">
                    {label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
