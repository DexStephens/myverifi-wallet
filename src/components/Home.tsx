import { Wallet } from "../../types";

export function Home({
  wallet,
  onLogout,
}: {
  wallet: Wallet;
  onLogout: () => void;
}) {
  return (
    <div>
      <h1>Welcome, {wallet.email}</h1>
      {/* Rest of your wallet UI */}
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
