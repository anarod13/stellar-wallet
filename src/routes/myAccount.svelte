<script src="https://unpkg.com/boxicons@2.1.2/dist/boxicons.js">
	import 'boxicons'
	import StellarSdk from 'stellar-sdk';
	import { writable } from 'svelte/store';
	import  {createAccount} from '../stellarMethods/createAccount'
	let secretKey;
	let publicKey;
	let account;



	function createKeyPair() {
		const pair = StellarSdk.Keypair.random();

		secretKey = pair.secret();
		publicKey = writable(pair.publicKey());
	}
	createKeyPair();
	/**
	 * @param {string} key
	 */
	function copyKey(key) {
		navigator.clipboard.writeText(key);
	}
	async function  handleCreateAccount(){

		account = await createAccount($publicKey)
	}

</script>

<main>
	<h2>These are your new keys to your Stellar Account:</h2>
	<div class="keyPair">
		<p>Public key:  </p>
		<p>{$publicKey}</p>
		<box-icon name='copy' type='solid' color='rgba(0,0,0,0.49)' on:click={() => {
			copyKey($publicKey);
		}}></box-icon>

	</div>
	<div class="keyPair">
		<p>Secret key:  </p>
		<p>{secretKey}</p>
		<box-icon name='copy' type='solid' color='rgba(0,0,0,0.49)' on:click={() => {
				copyKey(secretKey);
			}}></box-icon>

	</div>
	<p>Great! Now that you have a KeyPair you'll need to fund your account with at least 1 XLM to create it </p>
	<p>You can test fund it with Stellar's friendBot</p>

	{#if !account}
	<button on:click|once={handleCreateAccount}>Create Account</button>
	{:else}
		<div>{JSON.stringify(account)}</div>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 70%;
		border-radius: 10px;
		justify-self: center;
		margin: 0 auto;
		background-color: rgb(211, 211, 211);
	}
	.keyPair {
		display: flex;
		justify-content: space-evenly;
	}
</style>
