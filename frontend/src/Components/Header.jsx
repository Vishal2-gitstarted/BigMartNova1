import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Link,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import { Link as RouterLink } from "react-router-dom";
import { useContext, useState } from "react";
import { StoreContext } from "../Contaxt/storeContext";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const {cart, favorite} = useContext(StoreContext);

  const navItems = [
    { label: "Home", path: "/", id: "home" },
    { label: "About", path: "/about", id: "about" },
    { label: "Contact", path: "/contact", id: "contact" },
    { label: "Login", path: "/login", id: "login" },
  ];

  return (
    <>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar
          sx={{
            backgroundColor: "pink",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 3,
            py: 2,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Link
            component={RouterLink}
            to="/"
            underline="none"
            color="inherit"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography
              variant="h5"
              noWrap
              sx={{
                fontWeight: "bold",
                fontFamily: "monospace",
                letterSpacing: 2,
                color: "black",
                textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
              }}
            >
              FitNova
            </Typography>
          </Link>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
              flexGrow: 1,
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                component={RouterLink}
                to={item.path}
                underline="none"
                color="inherit"
                onClick={() => setActiveMenu(item.id)}
                sx={{
                  ...(activeMenu === item.id && {
                    fontWeight: "bold",
                    borderBottom: "2px solid red",
                  }),
                }}
              >
                <Typography variant="body1" noWrap>
                  {item.label}
                </Typography>
              </Link>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              sx={{
                backgroundColor: "#fff",
                borderRadius: 5,
                width: { xs: "140px", sm: "200px", md: "260px" },
                boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
                "& .MuiOutlinedInput-root": {
                  px: 1,
                  "& fieldset": { border: "none" },
                  "&:hover fieldset": { borderColor: "#888" },
                  "&.Mui-focused fieldset": { borderColor: "#2E7D32" },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />

            <IconButton component={RouterLink} to="/favorite" color="primary">
              <Badge badgeContent={favorite?.length || 0} color="error">
                <FavoriteBorder />
              </Badge>
            </IconButton>

            <IconButton component={RouterLink} to="/cart" color="primary">
              <Badge badgeContent={cart?.length || 0} color="error">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>

            <IconButton component={RouterLink} to="/register" color="primary">
              <Avatar sx={{ width: 32, height: 32, bgcolor: "#2E7D32" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for small devices Navigation */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.id}
                component={RouterLink}
                to={item.path}
                onClick={() => setActiveMenu(item.id)}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: activeMenu === item.id ? "bold" : "normal",
                    color: activeMenu === item.id ? "#2E7D32" : "inherit",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
