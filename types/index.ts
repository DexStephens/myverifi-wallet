type UUID = string;

export type Degree = {
  level: string;
  major: string;
  institution: string;
  year: number;
  issueDate: Date;
};

export type Certification = {
  name: string;
  institution: string;
  year: number;
  issueDate: Date;
  expirationDate?: Date;
};

export interface Credential {
  id: string;
  issuer: string;
  hash: string;
  data: Degree | Certification;
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
