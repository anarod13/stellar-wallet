<script>
	import { keyPair, showAccount, signIn } from './Elements/stores';
    import {fade, fly} from 'svelte/transition'
	import { createKeyPair } from '../stellarMethods/createKeyPair';
	import Button from './Elements/Button.svelte';

	function handleNewKeyPair() {
		const newKeyPair = createKeyPair();
		$keyPair = { ...newKeyPair };
		$showAccount = true;
	}
</script>

<main>
	<header>
		<img class="logo" src="../static/stellar-xlm-logo.png" alt="Stellar" />
	</header>
	<div out:fade class="welcome">
		<h1>Welcome to your Stellar Wallet</h1>
		<p>Is this your first time here? You'll need a KeyPair so we can get started</p>
		<Button onclick={handleNewKeyPair} textButton="Generate a new Keypair" />
		<Button
			onclick={() => {
				$signIn = true;
			}}
			textButton="Provide a Secret Key"
		/>
	</div>
</main>

<style>
	.welcome {
		padding: 2em;
	}

	header {
		display: flex;
	}
	.logo {
		height: 30px;
	}
	h1 {
		color: #000000;
		font-size: 2em;
		font-weight: 100;
	}
</style>
