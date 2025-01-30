import { useEffect, useState } from "react";
import { getWallet, clearWallet } from "../utils/storage.util";
import { Wallet } from "../../types";

export function useWallet() {
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const initWallet = async () => {
      const storedWallet = await getWallet();
      if (isMounted) {
        setWallet(storedWallet);
        setLoading(false);
      }
    };

    initWallet();

    return () => {
      isMounted = false;
    };
  }, []);

  const logout = async () => {
    await clearWallet();
    setWallet(null);
  };

  return { wallet, setWallet, loading, logout };
}
