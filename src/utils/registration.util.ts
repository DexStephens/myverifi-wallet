export async function registerUser(email: string) {
  try {
    const response = await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  } catch (e) {
    console.error("Failed to register user", e);
  }
}
