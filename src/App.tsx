import { useEffect, useState } from "react";
import { Registration } from "./components/Registration";
import { getWallet } from "./utils/storage.util";
import { Wallet } from "../types";
import { Landing } from "./components/Landing";
import { Login } from "./components/Login";
import "./App.css";

//TODO: Initial setup with subscription id, email
//TODO: Ability to add accounts
//TODO: Ability to accept issue credential requests using a specific account
//TODO: Ability to accept credential verification requests using a specific account
//TODO: Ability to view credentials by account

function App() {
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [loading, setLoading] = useState(true);
  const [showRegistration, setShowRegistration] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const initWallet = async () => {
      const storedWallet = await getWallet();
      setWallet(storedWallet);
      setLoading(false);
    };

    initWallet();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!wallet) {
    return showRegistration ? (
      <Registration setWallet={setWallet} onBack={() => setShowRegistration(false)}/>
    ) : showLogin ? (
      <Login onBack={() => setShowLogin(false)}/>
    ) : (
      <Landing 
      onRegister={() => setShowRegistration(true)} 
      onLogin={() => setShowLogin(true)} 
      />
    );
  }

  return (
    <div>
      <h1>Welcome, {wallet.email}</h1>
      {/* Rest of your wallet UI */}
    </div>
  );
}

export default App;
