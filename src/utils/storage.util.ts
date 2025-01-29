import { Wallet } from "../../types";

export async function getWallet() {
  try {
    const result = await chrome.storage.local.get("wallet");
    console.log("Wallet result", result);
    return result.wallet || null;
  } catch {
    return null;
  }
}

export async function storeWallet(wallet: Wallet) {
  try {
    await chrome.storage.local.set({ wallet });
  } catch (e) {
    console.error(e);
  }
}
