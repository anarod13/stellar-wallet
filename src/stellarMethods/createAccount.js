import StellarSdk from 'stellar-sdk';

const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");
	/**
	 * @param {string} publicKey
	 */

export  const createAccount = async (publicKey)=> {
    try {
      const response = await fetch(
        `https://friendbot.stellar.org?addr=${encodeURIComponent(
          publicKey,
        )}`,
      );
    //   const responseJSON = await response.json();
      const account = await server.loadAccount(publicKey);
      return account;
    } catch (e) {
      console.error("ERROR!", e);
    }
  };