import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Cred, Wallet, VerifyRequest } from "../../types";
import { testRequests, testCredentials } from "../utils/fakeData.util";
import { RequestsList } from "./RequestsList";
import { CredentialList } from "./CredentialList";
import { Profile } from "./Profile";
import { NavBar } from "./Navbar";

export function Home({ wallet, onLogout }: { wallet: Wallet; onLogout: () => void }) {
  const [view, setView] = useState<"credentials" | "requests" | "profile">("credentials");
  const [requests, setRequests] = useState<VerifyRequest[]>([]);
  const [credentials, setCredentials] = useState<Cred[]>([]);

  useEffect(() => {
    const getRequests = async () => {
      let storedRequests: VerifyRequest[] = [];
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

    const getCredentials = async () => {
      let credentials: Cred[] = testCredentials;
      setCredentials(credentials);
    };

    getRequests();
    getCredentials();
  }, []);

  return (
    <Container maxWidth="md" sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <NavBar email={wallet.email} setView={setView} />
      <Container sx={{ flex: 1, padding: 2, overflow: "auto" }}>
        {view === "requests" ? (
          <RequestsList requests={requests} />
        ) : view === "profile" ? (
          <Profile onLogout={onLogout} />
        ) : (
          <CredentialList credentials={credentials} />
        )}
      </Container>
    </Container>
  );
}
