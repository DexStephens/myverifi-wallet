export function Login({
    onBack,
  }: {
    onBack(): void;
  }) {
    return (
      <div className="login">
        <button onClick={onBack}>Back</button>
        <h2>Login</h2>
        <div className="verticalContainer">
          <button>Log In</button>
        </div>
      </div>
    );
  }
