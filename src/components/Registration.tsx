import { useEffect, useRef, useState } from "react";
import { Wallet } from "../../types";
import { storeWallet } from "../utils/storage.util";
import { v4 as uuidv4 } from "uuid";

export function Registration({
  setWallet,
}: {
  setWallet: React.Dispatch<React.SetStateAction<Wallet | null>>;
}) {
  const [email, setEmail] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newWallet: Wallet = {
      id: uuidv4(),
      email,
      subscriptionId: "", // This will be set later
      accounts: [],
    };

    await storeWallet(newWallet);

    setWallet(newWallet);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="registration">
      <h2>Welcome to myVerifi Wallet</h2>
      <p>Please register to get started</p>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
