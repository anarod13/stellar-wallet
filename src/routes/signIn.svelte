<script>
	// @ts-ignore
	import { keyPair, showAccount, signIn } from './Elements/stores';
	import { fade, fly } from 'svelte/transition';
	import { loadKeyPair } from '../stellarMethods/loadKeyPair';
	import Button from './Elements/Button.svelte';

	/**
	 * @param {string} secretKey
	 */
	function handleSignIn(secretKey) {
		if (secretKey) {
			try {
				$keyPair.publicKey = loadKeyPair(secretKey);
				$keyPair.secretKey = secretKey;
				$signIn = !signIn;
				$showAccount = true;
			} catch (e) {
				alert(e);
			}
		}
	}
	let secretKey;
</script>

<main in:fly={{ y: 200, duration: 800 }} out:fade>
	<header>
		<div
			on:click={() => {
				$signIn = false;
			}}
		>
			x
		</div>
	</header>
	<h2>Connect with a secret key</h2>
	<body>
		<form on:submit|preventDefault>
			<label for="secretKey">Your Secret Key: </label><input
				name="secretKey"
				placeholder="Secret key"
				bind:value={secretKey}
			/>
			<div class="button">
				<Button
					onclick={() => {
						handleSignIn(secretKey);
					}}
					textButton="Sign In"
				/>
			</div>
		</form>
	</body>
</main>

<style>
	main {
		background-color: rgb(233, 229, 223);
		border-radius: 10px;
		position: absolute;
		z-index: 100;
		margin-top: -10%;
		margin-left: 30%;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
			rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
		padding: 0px 20px 10px 20px;
	}
	header {
		display: flex;
		flex-direction: row-reverse;
		padding-top: 5px;
		padding-right: 10px;
		font-size: 1.5em;
		font-weight: bolder;
		cursor: pointer;
	}

	.button {
		margin-bottom: 10px;
		padding-right: 0;
		display: flex;
		justify-content: flex-end;
	}
</style>
