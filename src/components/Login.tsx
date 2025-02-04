import { Container, Button, Typography, Stack, TextField, Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { loginUser } from "../utils/login.util";

export function Login({ onBack }: { onBack(): void }) {
  const [email, setEmail] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await loginUser(email);
      console.log("Login response", response);
      // Store wallet in local storage & call setWallet
    } catch (e) {
      console.error("Failed to login", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ textAlign: "center", mt: 4 }}>
      <Button onClick={onBack} variant="outlined" color="primary">
        Back
      </Button>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Stack spacing={2} direction="column" alignItems="center" sx={{ mt: 2 }}>
        <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
          <TextField
            fullWidth
            inputRef={inputRef}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            variant="outlined"
            required
          />
          <TextField 
            fullWidth
            type="password"
            label="Password"
            variant="outlined"
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }} disabled={loading}>
            {loading ? "Logging In..." : "Log In"}
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
