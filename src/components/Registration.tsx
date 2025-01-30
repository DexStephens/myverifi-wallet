import { useEffect, useRef, useState } from "react";
import { Wallet } from "../../types";
import { v4 as uuidv4 } from "uuid";
import { storeWallet } from "../utils/storage.util";
import { registerUser } from "../utils/registration.util";

export function Registration({
  setWallet,
  onBack,
}: {
  setWallet: React.Dispatch<React.SetStateAction<Wallet | null>>;
  onBack(): void;
}) {
  const [email, setEmail] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newWallet: Wallet = {
      id: uuidv4(),
      email,
      accounts: [],
    };

    const response = await registerUser(email);

    console.log("Registration response", response);

    await storeWallet(newWallet);

    setWallet(newWallet);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="registration">
      <div className="back">
        <button onClick={onBack}>Back</button>
      </div>
      <h3>Register</h3>
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
