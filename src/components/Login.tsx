export function Login({
    onBack,
  }: {
    onBack(): void;
  }) {
    return (
      <div className="login">
        <div className="back">
            <button onClick={onBack}>Back</button>
        </div>
        <h2>Login</h2>
        <div className="verticalContainer">
          <button>Log In</button>
        </div>
      </div>
    );
  }
