import {
  ConfluxWalletProviderConfiguration,
  ConfluxWalletProvider,
} from "conflux-wallet-connect";

import "conflux-wallet-connect/lib/conflux-wallet-connect.css";
import { Button } from "./Button";
import { AccountInformations } from "./AccountInformations";

function App() {
  const configuration: ConfluxWalletProviderConfiguration = {
    chainId: 1030,
    theme: "light",
    providers: ["fluent", "metamask", "okx"],
  };
  return (
    <ConfluxWalletProvider configuration={configuration}>
      <p
        style={{
          fontWeight: "bold",
          padding: "20px",
          fontSize: "20px",
          width: "full",
          textAlign: "center",
        }}
      >
        Simple exemple how to connect Metamask, fluent or OKX wallet with
        conflux-wallet-connect on Conflux eSpace
      </p>
      <div
        className="App"
        style={{
          display: "flex",
          alignItems: "center",
          width: "full",
          padding: "10rem",
          justifyContent: "center",
        }}
      >
        <div>
          <div
            style={{
              marginBottom: "30px",
            }}
          >
            <Button />
          </div>
          <AccountInformations />
        </div>
      </div>
    </ConfluxWalletProvider>
  );
}

export default App;
