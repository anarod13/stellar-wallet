<script>
	import { keyPair, payment, showAccount, signIn } from './Elements/stores';
	import { fade } from 'svelte/transition';
	import Button from './Elements/Button.svelte';
	import 'boxicons';
	import Balances from './Elements/Balances.svelte';
	import { loadAccount } from '../stellarMethods/loadAccount';
	import { createAccount } from '../stellarMethods/createAccount';
	import Payment from './Payment.svelte';

	let account;
	let accountInCreation;

	/**
	 * @param {string} key
	 */
	function copyKey(key) {
		navigator.clipboard.writeText(key);
	}
	checkAccount();
	// @ts-ignore
	function checkAccount() {
		accountInCreation = false;
		account = loadAccount($keyPair.publicKey);
	}
	function handleCreateAccount() {
		accountInCreation = true;
		account = createAccount($keyPair.publicKey);
	}
	function handlePayment() {
		$payment = true;
	}
	function signOut() {
		$keyPair.publicKey = 'publicKey';
		$keyPair.secretKey = 'secretKey';
		$showAccount = false;
		$signIn = false;
		$payment = false;
	}
</script>

<main out:fade>
	<head><title>My Account</title></head>
	<header>
		<img class="logo" src="../static/stellar-xlm-logo.png" alt="Stellar" />
		<Button onclick={signOut} textButton="Sign Out" />
	</header>
	<body>
		<div class="account-info">
			<h2>These are your keys to your Stellar Account:</h2>
			<div>
				<p>Public key:</p>
				<p class="keyPair">
					{$keyPair.publicKey}
					<box-icon
						name="copy"
						type="solid"
						color="rgba(0,0,0,0.49)"
						style="cursor: pointer"
						on:click={() => {
							copyKey($keyPair.publicKey);
						}}
					/>
				</p>
			</div>
			<div>
				<p>Secret key:</p>
				<p class="keyPair">
					{$keyPair.secretKey}
					<box-icon
						name="copy"
						type="solid"
						color="rgba(0,0,0,0.49)"
						style="cursor: pointer"
						on:click={() => {
							copyKey($keyPair.secretKey);
						}}
					/>
				</p>
			</div>
		</div>
		<div class="account-balance">
			{#await account}
				<p>
					{accountInCreation
						? 'Funding account with friendbot ...'
						: 'Checking your account info...'}
				</p>
			{:then dataAccount}
				{#if dataAccount === 'no account found'}
					<p>This account it's not created yet. You'll need funding to create it</p>
					<p>You can test fund it with Stellar's friendbot</p>
					<Button onclick={handleCreateAccount} textButton="Create Account" />
				{:else}
					<Balances
						refreshAccount={checkAccount}
						handleSend={handlePayment}
						balances={dataAccount.balances}
					/>
				{/if}
			{:catch e}
				<p>Something went wrong. Please try again</p>
				<Button onclick={handleCreateAccount} textButton="Create Account" />
			{/await}
		</div>
	</body>
	{#if $payment}
		<Payment />
	{/if}
</main>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.logo {
		height: 30px;
	}
	main {
		height: 100%;
		font-family: Helvetica;
		text-align: center;
		padding: 1em;
		max-width: 90%;
		border-radius: 10px;
		/* justify-self: center; */
		margin: 0 auto;

		justify-content: center;
	}
	body {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #c0f3e052;
		padding: 20px;
		border-radius: 10px;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
			rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
	}

	.account-info {
		text-align: left;
		width: 65%;
		height: 250px;
		margin: 15px;
		padding-bottom: 10px;
	}
	.account-balance {
		text-align: left;
		border-radius: 10px;

		display: flex;
		height: 250px;
		width: 30%;
		padding: 10px;
		flex-direction: column;
		align-items: center;
	}

	.keyPair {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		padding: 10px;
		background-color: white;
		box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
		border-radius: 10px;
		margin-bottom: 10px;
	}
	box-icon {
		margin-left: 15px;
	}
</style>
