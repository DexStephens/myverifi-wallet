import { useEffect, useRef, useState } from "react";
import { Wallet } from "../../types";
import { v4 as uuidv4 } from "uuid";
import { storeWallet } from "../utils/storage.util";
import { registerUser } from "../utils/registration.util";
import { Container, Button, Typography, Stack, Box, TextField } from "@mui/material";

export function Registration({
  setWallet,
  onBack,
}: {
  setWallet: React.Dispatch<React.SetStateAction<Wallet | null>>;
  onBack(): void;
}) {
  const [email, setEmail] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newWallet: Wallet = {
      id: uuidv4(),
      email,
      accounts: [],
    };

    try {
      const response = await registerUser(email);
      console.log("Registration response", response);
      await storeWallet(newWallet);
      setWallet(newWallet);
    } catch (e) {
      console.error("Failed to register", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Container maxWidth="xs" sx={{ textAlign: "center", mt: 4 }}>
      <Button onClick={onBack} variant="outlined" color="primary">
        Back
      </Button>
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <Stack spacing={2} direction="column" alignItems="center" sx={{ mt: 2, width: "100%" }}>
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
            {loading ? "Registering..." : "Register"}
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
