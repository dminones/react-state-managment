import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import  {  useWeb3Context } from "web3-react";

const Link = styled.a`
  color: white;
`
const Address = styled.div`
  color: white;
`

// This component must be a child of <App> to have access to the appropriate context
const ConnectWalletButton = () => {
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
      <Link
        href="#"
        onClick={() => {
          setLoading(true);
          context.setFirstValidConnector(["MetaMask"]);
        }}
      >
        Connect Metamask
      </Link>
    );
  } else if (!context.active && !context.error) {
    return <Address>Loading...</Address>;
  } else if (context.error) {
    //error
    return <Address>{context.error}</Address>;
  } else {
    // success
    return <Address>Account: {context.account}</Address>;
  }
};

export default ConnectWalletButton;
