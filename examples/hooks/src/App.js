import React, { useEffect, useState } from "react";
import Web3Provider, { Connectors, useWeb3Context } from "web3-react";
import "./App.css";

const { InjectedConnector } = Connectors;
const MetaMask = new InjectedConnector({ supportedNetworks: [1, 4] });

// This component must be a child of <App> to have access to the appropriate context
function MyComponent() {
  const context = useWeb3Context();
  const [loading, setLoading] = useState();

  useEffect(() => {
    if (context.active) {
      setLoading(false);
    }
  }, [context]);

  if (!context.active && !context.error && !loading) {
    // loading
    return (
      <a
        className="App-link"
        href="#"
        onClick={() => {
          setLoading(true);
          context.setFirstValidConnector(["MetaMask"]);
        }}
      >
        Connect Metamask
      </a>
    );
  } else if (!context.active && !context.error) {
    return <div>Loading...</div>;
  } else if (context.error) {
    //error
    return <div>{context.error}</div>;
  } else {
    // success
    return <div>Account: {context.account}</div>;
  }
}

function App() {
  return (
    <Web3Provider connectors={{ MetaMask }} libraryName="ethers.js">
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <MyComponent />
        </header>
      </div>
    </Web3Provider>
  );
}

export default App;
