<script>
	import { keyPair, payment } from './Elements/stores';
	import { makePayment } from '../stellarMethods/makePayment';
	import Button from './Elements/Button.svelte';
	import { fade, fly } from 'svelte/transition';
	let amount;
	let recipient;
	let paymentComplete;
    let paymentLoading;
	function handlePayment() {
		if (recipient && amount) {
            paymentLoading=true;
			paymentComplete = makePayment($keyPair.secretKey, recipient, amount);

		}
	}
</script>

<main in:fly={{ y: 200, duration: 800 }} out:fade>
	<header>
		<div
			on:click={() => {
				$payment = false;
			}}
		>
			x
		</div>
	</header>
	{#if !paymentLoading}
		<form on:submit|preventDefault={handlePayment}>
			You're about to send XLM
			<input bind:value={amount} placeholder="Amount" />
			<input bind:value={recipient} placeholder="Recipient" />
			<Button onclick={handlePayment} textButton="Send" />
		</form>

    {:else}
		<p>Sending payment...</p>

	{/if}
</main>

<style>
	header {
		display: flex;
		flex-direction: row-reverse;
		padding-top: 5px;
		padding-right: 10px;
		font-size: 1.5em;
		font-weight: bolder;
		cursor: pointer;
	}
	main {
		background-color: rgb(233, 229, 223);
		border-radius: 10px;
		position: absolute;
		z-index: 100;
		margin-top: -15%;
		margin-left: 20%;
		box-shadow: inset;
		padding: 20px;
		width: 30%;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
	input {
		margin-top: 10px;
	}
</style>
