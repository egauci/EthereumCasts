import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // in browser with metamask
  web3 = new Web3(window.web3.currentProvider);
} else {
  // we are on node or no metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/XRy0ffOPHxGeCInBSzry'
  );
  web3 = new Web3(provider);
}

export default web3;
