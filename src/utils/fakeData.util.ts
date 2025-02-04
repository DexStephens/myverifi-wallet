import { WalletRequests, Cred } from "../../types";

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

export const testCredentials: Cred[] = [
  {
    id: "1",
    title: "Bachelor of Science",
    issuer: "University of California, Berkeley",
    hash: "0x1234567890abcdef",
  },
  {
    id: "2",
    title: "Master of Science",
    issuer: "Massachusetts Institute of Technology",
    hash: "0xabcdef1234567890",
  },
  {
    id: "3",
    title: "Ph.D.",
    issuer: "Stanford University",
    hash: "0xabcdef1234567890",
  }
];
