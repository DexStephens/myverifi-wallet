import { useState } from "react";
import { Registration } from "./components/Registration";
import { useWallet } from "./hooks/useWallet";
import { Landing } from "./components/Landing";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import "./App.css";

//TODO: Initial setup with subscription id, email
//TODO: Ability to add accounts
//TODO: Ability to accept issue credential requests using a specific account
//TODO: Ability to accept credential verification requests using a specific account
//TODO: Ability to view credentials by account

function App() {
  // TODO: will need to update state management logic to take us back to the landing page when logging out
  const { wallet, setWallet, loading, logout } = useWallet();
  const [showRegistration, setShowRegistration] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogout = () => {
    logout();
    setShowRegistration(false);
    setShowLogin(false);
  };

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
    <Home wallet={wallet} onLogout={handleLogout}/>
  );
}

export default App;
