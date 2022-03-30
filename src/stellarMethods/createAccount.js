import StellarSdk from 'stellar-sdk';

const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");
	/**
	 * @param {string} publicKey
	 */

export  const createAccount = async (publicKey)=> {
    try {
       await fetch(
        `https://friendbot.stellar.org?addr=${encodeURIComponent(
          publicKey,
        )}`,
      );
      const account = await server.loadAccount(publicKey);
      return account;
    } catch (e) {
      console.error("ERROR!", e);
    }
  };