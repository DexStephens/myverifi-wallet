type UUID = string;

export interface Cred {
  id: string;
  title: string;
  issuer: string;
  hash: string;
}

export interface Account {
  did: string;
  title: string;
  publicKey: string;
  privateKey: string;
  credentials: Credential[];
}

export interface Wallet {
  id: UUID;
  email: string;
  accounts: Account[];
}

interface WalletRequest {
  type: "issue" | "request";
}

export interface IssueRequest extends WalletRequest {
  type: "issue";
  name: string;
  organization: string;
}

interface RequestRequest extends WalletRequest {
  type: "request";
  name: string;
  organization: string;
  credentials: string[];
}

export type WalletRequests = IssueRequest | RequestRequest;
