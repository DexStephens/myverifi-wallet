import { WalletRequests } from "../../types";

export const testRequests: WalletRequests[] = [
  // Issue Requests
  {
    type: "issue",
    name: "John Doe",
    organization: "University of California, Berkeley",
  },
  {
    type: "issue",
    name: "Jane Smith",
    organization: "Stanford University",
  },
  {
    type: "issue",
    name: "Mike Johnson",
    organization: "Massachusetts Institute of Technology",
  },
  // Wallet Requests
  {
    type: "request",
    name: "John Doe",
    organization: "Meta",
    credentials: ["degree", "certificate"],
  },
  {
    type: "request",
    name: "Sarah Wilson",
    organization: "Google",
    credentials: ["diploma", "certification"],
  },
  {
    type: "request",
    name: "Robert Brown",
    organization: "Apple",
    credentials: ["degree", "license"],
  },
];
