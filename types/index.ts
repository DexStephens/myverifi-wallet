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

export interface VerifyRequest {
  organization: string;
  comment: string;
}
