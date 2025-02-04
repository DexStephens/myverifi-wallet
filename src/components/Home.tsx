import { useEffect, useState } from "react";
import { Wallet, WalletRequests } from "../../types";
import { testRequests } from "../utils/fakeData.util";

export function Home({
  wallet,
  onLogout,
}: {
  wallet: Wallet;
  onLogout: () => void;
}) {
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
    <div
      style={{
        height: "100vh",
        flexDirection: "column",
      }}
    >
      {/* Nav bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
      >
        <p style={{ fontSize: "smaller" }}>{wallet.email}</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button onClick={() => setView("requests")}>Requests</button>
          <button onClick={() => setView("profile")}>Profile</button>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          padding: "12px",
          overflow: "auto",
          minHeight: 0,
        }}
      >
        {view === "requests" ? (
          <div className="request-list">
            {requests.map((request) => (
              <div className="request-card">
                <p>{request.type}</p>
                <p>{request.name}</p>
                <p>{request.organization}</p>
                {/* {request instanceof IssueRequest && (
                  <p>{request.credentials.join(", ")}</p>
                )} */}
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h1>Profile</h1>
            <p>Need list of credentials and ability to logout</p>
            <button onClick={onLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}
