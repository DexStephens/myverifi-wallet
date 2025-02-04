import { Stack, Typography } from "@mui/material";
import { WalletRequests } from "../../types";

export function RequestsList({ requests }: { requests: WalletRequests[] }) {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">Requests</Typography>
      {requests.map((request, index) => (
        <Stack key={index} sx={{ p: 2, border: "1px solid #ccc", borderRadius: 1 }}>
          <Typography>{request.type}</Typography>
          <Typography>{request.name}</Typography>
          <Typography>{request.organization}</Typography>
        </Stack>
      ))}
    </Stack>
  );
}
