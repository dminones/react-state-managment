import React from "react";
import Web3Provider, { Connectors } from "web3-react";
import styled from "styled-components";

import TokenList from "./components/TokenList";
import ConnectWalletButton from "./components/ConnectWalletButton";

const { InjectedConnector } = Connectors;
const MetaMask = new InjectedConnector({ supportedNetworks: [1, 4] });

const tokens = [
  {
    address: "0x"
  },
  {
    address: "0x"
  }
];

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  background-color: black;
`

const H1 = styled.h1`
  color: white;
`

function App() {
  return (
    <Web3Provider connectors={{ MetaMask }} libraryName="ethers.js">
      <Header>
        <Container>
          <H1>Tokens</H1>
          <ConnectWalletButton />
        </Container>
      </Header>
      <Container>
        <TokenList tokens={tokens} />
      </Container>
    </Web3Provider>
  );
}

export default App;
