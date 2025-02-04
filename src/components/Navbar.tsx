import { AppBar, Toolbar, Typography, Stack, Box, IconButton, MenuItem, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

interface NavBarProps {
  email: string;
  setView: (view: "credentials" | "requests" | "profile") => void;
}

export function NavBar({ email, setView }: NavBarProps) {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2">{email}</Typography>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Stack direction="row" spacing={2}>
            <MenuItem onClick={() => setView("credentials")}>Credentials</MenuItem>
            <MenuItem onClick={() => setView("requests")}>Requests</MenuItem>
            <MenuItem onClick={() => setView("profile")}>Profile</MenuItem>
          </Stack>
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleMenuClose}>
            <MenuItem onClick={() => { setView("credentials"); handleMenuClose(); }}>Credentials</MenuItem>
            <MenuItem onClick={() => { setView("requests"); handleMenuClose(); }}>Requests</MenuItem>
            <MenuItem onClick={() => { setView("profile"); handleMenuClose(); }}>Profile</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
