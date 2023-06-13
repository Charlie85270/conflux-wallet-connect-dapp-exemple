import React from "react";
import { useConfluxWalletContext } from "conflux-wallet-connect";

export const AccountInformations = () => {
  const { wallet, activeProvider } = useConfluxWalletContext();
  const { account, chainId, balance } = wallet;
  return (
    <div>
      <ul>
        <li>
          Active provider :
          <span style={{ fontWeight: "bold" }}>{activeProvider || "None"}</span>
        </li>
        <li>
          Account adress :
          <span style={{ fontWeight: "bold" }}>{account || "None"}</span>
        </li>
        <li>
          ChainId :
          <span style={{ fontWeight: "bold" }}>{chainId || "None"}</span>
        </li>
        <li>
          Balance :
          <span style={{ fontWeight: "bold" }}>
            {balance?.toDecimalStandardUnit() || "None"}
          </span>
        </li>
      </ul>
    </div>
  );
};
