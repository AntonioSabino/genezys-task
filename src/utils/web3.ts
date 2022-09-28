import Web3 from 'web3';

const url = 'https://goerli.infura.io/v3/9cd5a738c19d4ee0af904e1b033a5048';

// const urlMainNet =
//   'https://mainnet.infura.io/v3/9cd5a738c19d4ee0af904e1b033a5048';

const web3 = new Web3(url);

const createAccount = () => {
  const account = web3.eth.accounts.create();

  return account.address;
};

const getBalance = async (contractAddress: string) => {
  const balance = await web3.eth.getBalance(contractAddress);
  const balanceFormat = web3.utils.fromWei(balance, 'ether');

  return balanceFormat;
};

export { createAccount, getBalance };
