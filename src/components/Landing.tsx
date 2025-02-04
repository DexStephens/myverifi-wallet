import { Button, Typography, Stack, Container } from "@mui/material";

export function Landing({ onRegister, onLogin }: { onRegister: () => void; onLogin: () => void }) {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to myVerifi Wallet
      </Typography>
      <Typography variant="body1" gutterBottom>
        Please register or log in to get started
      </Typography>
      <Stack spacing={2} direction="column" alignItems="center" sx={{ mt: 2 }}>
        <Button variant="contained" color="primary" onClick={onRegister} fullWidth>
          Register
        </Button>
        <Button variant="outlined" color="primary" onClick={onLogin} fullWidth>
          Log In
        </Button>
      </Stack>
    </Container>
  );
}
