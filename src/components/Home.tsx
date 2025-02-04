import { useEffect, useState } from "react";
import { Button, Typography, Container, Stack, AppBar, Toolbar } from "@mui/material";
import { Wallet, WalletRequests } from "../../types";
import { testRequests } from "../utils/fakeData.util";

export function Home({ wallet, onLogout }: { wallet: Wallet; onLogout: () => void }) {
  const [view, setView] = useState<"requests" | "profile">("requests");
  const [requests, setRequests] = useState<WalletRequests[]>([]);

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
          <Stack direction="row" spacing={2}>
            <Button color="inherit" onClick={() => setView("requests")}>Requests</Button>
            <Button color="inherit" onClick={() => setView("profile")}>Profile</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Container sx={{ flex: 1, padding: 2, overflow: "auto" }}>
        {view === "requests" ? (
          <Stack spacing={2}>
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
