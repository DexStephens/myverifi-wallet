import { Wallet } from "../../types";

export function Home({
  wallet,
  onLogout,
}: {
  wallet: Wallet;
  onLogout: () => void;
}) {
  if (!wallet) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {wallet.email}</h1>
      {/* Rest of your wallet UI */}
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
