import React from "react";
import Client, { Environment, Network, HgraphProvider } from "@hgraph.io/sdk";
import "./App.css";
import Home from "./Home";

const options = {
  network: Network.HederaMainnet,
  environment: Environment.Production,
  //token: "", //jwt
  //headers: {'content-type': 'application/json'},
  //patchBigIntToJSON: true,
};

const client = new Client(options);

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HgraphProvider client={client}>
          <Home />
        </HgraphProvider>
      </header>
    </div>
  );
}
