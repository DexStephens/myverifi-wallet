import { Button, Stack, Typography } from "@mui/material";
import { VerifyRequest } from "../../types";

export function RequestsList({ requests }: { requests: VerifyRequest[] }) {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">Requests</Typography>
      {requests.map((request, index) => (
        <Stack 
          key={index} 
          sx={{ p: 2, border: "1px solid #ccc", borderRadius: 1, boxShadow: 1 }}
        >
          <Typography variant="h6">{request.organization}</Typography>
          <Typography>{request.comment}</Typography>
          <Stack direction="row" spacing={2} mt={2}>
            <Button variant="outlined" color="error">
              Deny
            </Button>
            <Button variant="contained" color="success">
              Approve
            </Button>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}
