export function Landing(
  { 
    onRegister,
    onLogin,
  }: { 
    onRegister: () => void;
    onLogin: () => void;
  }) {

  return (
    <div className="landing">
      <h2>Welcome to myVerifi Wallet</h2>
      <p>Please register or log in to get started</p>
      <div className="verticalContainer">
        <button onClick={onRegister}>Register</button>
        <button onClick={onLogin}>Log In</button>
      </div>
    </div>
  );
}
