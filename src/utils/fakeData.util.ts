import { VerifyRequest, Cred } from "../../types";

export const testRequests: VerifyRequest[] = [
  {
    organization: "Meta",
    comment: "Please verify that you have a degree and certificate.",
  },
  {
    organization: "Google",
    comment: "Please verify that you have just a certification.",
  },
  {
    organization: "Apple",
    comment: "Please verify that you have a degree and two certifications.",
  }
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
