import StellarSdk from 'stellar-sdk';

export const loadKeyPair = (/** @type {string} */ secretKey) => {
	const SourceKeys= StellarSdk.Keypair.fromSecret(secretKey);
	const publicKey = SourceKeys.publicKey();
	return publicKey;
};
