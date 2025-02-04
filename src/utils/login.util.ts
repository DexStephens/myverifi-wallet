export async function loginUser(email: string, password: string) {
  try {
    const response = await fetch("http://localhost:3000/auth/wallet_login", {
      method: "POST",
      body: JSON.stringify({ email, password }), // TODO: Hash password
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  } catch (e) {
    console.error("Failed to login user", e);
  }
  }
