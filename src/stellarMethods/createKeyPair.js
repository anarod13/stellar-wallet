import StellarSdk from 'stellar-sdk';

export const createKeyPair = () => {
	const pair = StellarSdk.Keypair.random();
const newKeyPair={
	publicKey : pair.publicKey(),
	secretKey : pair.secret(),
}
return newKeyPair;
};
