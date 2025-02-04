import { Stack, Typography, Button } from "@mui/material";

export function Profile({ onLogout }: { onLogout: () => void }) {
  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant="h4">Profile</Typography>
      <Typography>Need list of credentials and ability to logout</Typography>
      <Button variant="contained" color="secondary" onClick={onLogout}>Logout</Button>
    </Stack>
  );
}
