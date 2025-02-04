import { Container, Button, Typography, Stack } from "@mui/material";

export function Login({ onBack }: { onBack(): void }) {
  return (
    <Container maxWidth="xs" sx={{ textAlign: "center", mt: 4 }}>
      <Button onClick={onBack} variant="outlined" color="primary">
        Back
      </Button>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Stack spacing={2} direction="column" alignItems="center" sx={{ mt: 2 }}>
        <Button variant="contained" color="primary" fullWidth>
          Log In
        </Button>
      </Stack>
    </Container>
  );
}
