import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import loginImage from "../assets/login_image.png";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      mt={2}
      px={2}
      gap={6}
    >
      <Box flex={1}  maxWidth={700} sx={{ display: { xs: "none", md: "block" } }}>
        <Box
          component="img"
          src={loginImage}
          alt="Register"
 sx={{
            width: "100vh",
            // maxHeight: { xs: 400, md: 550 },
            height: "100%",
            objectFit: "cover",
            borderRadius: 2,
          }}        />
      </Box>

      <Paper
        elevation={4}
        sx={{
          p: 5,
          flex: 1,
          maxWidth: 500,
          borderRadius: 3,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Create an Account
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          Enter your details below
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              required
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                py: 1.5,
                bgcolor: "#000",
                color: "#fff",
               
              }}
              fullWidth
            >
              Create Account
            </Button>
            <Typography textAlign="center" variant="body2" mt={1}>
              Already have an account?{" "}
              <Link to="/login" style={{ color: "#1976d2" }}>
                Login Here
              </Link>
            </Typography>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
