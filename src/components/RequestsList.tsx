import { Stack, Typography } from "@mui/material";
import { VerifyRequest } from "../../types";

export function RequestsList({ requests }: { requests: VerifyRequest[] }) {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">Requests</Typography>
      {requests.map((request, index) => (
        <Stack key={index} sx={{ p: 2, border: "1px solid #ccc", borderRadius: 1 }}>
          <Typography>{request.organization}</Typography>
          <Typography>{request.comment}</Typography>
        </Stack>
      ))}
    </Stack>
  );
}
