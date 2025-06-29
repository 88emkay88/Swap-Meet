import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const EscrowContext = createContext();

export const EscrowProvider = ({ children }) => {
  const { user } = useAuth();
  const [escrowTransactions, setEscrowTransactions] = useState([]);

  useEffect(() => {
    const fetchEscrow = async () => {
      if (!user?.UserId) return;

      try {
        const res = await fetch(
          `${"swapmeet-backend.byethost12.com"}/get-escrow-transactions.php?userId=${
            user.UserId
          }`
        );
        const data = await res.json();

        if (data.success) {
          setEscrowTransactions(data.transactions);
        } else {
          console.error("Failed to fetch escrow transactions:", data.message);
        }
      } catch (err) {
        console.error("Error fetching escrow data:", err);
      }
    };

    fetchEscrow();
  }, [user]);

  return (
    <EscrowContext.Provider
      value={{ escrowTransactions, setEscrowTransactions }}
    >
      {children}
    </EscrowContext.Provider>
  );
};

export const useEscrow = () => useContext(EscrowContext);
