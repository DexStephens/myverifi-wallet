import { Stack, Typography } from "@mui/material";
import { Cred } from "../../types";

export function CredentialList({ credentials }: { credentials: Cred[] }) {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">Credentials</Typography>
      {credentials.map((credential, index) => (
        <Stack key={index} sx={{ p: 2, border: "1px solid #ccc", borderRadius: 1 }}>
          <Typography>{credential.id}</Typography>
          <Typography>{credential.title}</Typography>
          <Typography>{credential.issuer}</Typography>
          <Typography>{credential.hash}</Typography>
        </Stack>
      ))}
    </Stack>
  );
}
