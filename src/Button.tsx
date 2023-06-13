import React from "react";
import {
  ConfluxWalletButton,
  useConfluxWalletContext,
} from "conflux-wallet-connect";

export const Button = () => {
  const { openModal } = useConfluxWalletContext();
  return <ConfluxWalletButton onClick={openModal} />;
};
