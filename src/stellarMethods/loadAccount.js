import StellarSdk from 'stellar-sdk';

const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");
	/**
	 * @param {string} publicKey
	 */

export  const loadAccount = async (publicKey)=> {
    try {
      const account = await server.loadAccount(publicKey);
      return account;
    } catch (e) {
      return 'no account found';
    }
  };