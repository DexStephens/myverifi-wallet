import { useEffect, useState } from "react";
import { Button, Typography, Container, Stack, AppBar, Toolbar, Box, IconButton, MenuItem, Menu } from "@mui/material";
import { Wallet, WalletRequests } from "../../types";
import { testRequests } from "../utils/fakeData.util";
import MenuIcon from "@mui/icons-material/Menu";

export function Home({ wallet, onLogout }: { wallet: Wallet; onLogout: () => void }) {
  const [view, setView] = useState<"credentials" | "requests" | "profile">("credentials");
  const [requests, setRequests] = useState<WalletRequests[]>([]);

  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  useEffect(() => {
    const getRequests = async () => {
      let storedRequests: WalletRequests[] = [];
      try {
        const { requests } = await chrome.storage.local.get("requests");
        if (requests) {
          storedRequests = JSON.parse(requests);
        }
      } catch {
        // TODO: handle failure
      }
      setRequests(storedRequests.length > 0 ? storedRequests : testRequests);
    };

    getRequests();
  }, []);

  return (
    <Container maxWidth="md" sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar position="sticky">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2">{wallet.email}</Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Stack direction="row" spacing={2}>
              <Button color="inherit" onClick={() => setView("credentials")}>Credentials</Button>
              <Button color="inherit" onClick={() => setView("requests")}>Requests</Button>
              <Button color="inherit" onClick={() => setView("profile")}>Profile</Button>
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
      <Container sx={{ flex: 1, padding: 2, overflow: "auto" }}>
        {view === "requests" ? (
          <Stack spacing={2} alignItems="center">
            <Typography variant="h4">Requests</Typography>
              {/* Add credential list component or logic here */}
            <Typography>List of requests goes here</Typography>
          </Stack>
        ) : view === "credentials" ? (
          <Stack spacing={2}>
            <Typography variant="h4">Credentials</Typography>
            {requests.map((request, index) => (
              <Stack key={index} sx={{ p: 2, border: "1px solid #ccc", borderRadius: 1 }}>
                <Typography>{request.type}</Typography>
                <Typography>{request.name}</Typography>
                <Typography>{request.organization}</Typography>
              </Stack>
            ))}
          </Stack>
        ) : (
          <Stack spacing={2} alignItems="center">
            <Typography variant="h4">Profile</Typography>
            <Typography>Need list of credentials and ability to logout</Typography>
            <Button variant="contained" color="secondary" onClick={onLogout}>Logout</Button>
          </Stack>
        )}
      </Container>
    </Container>
  );
}
