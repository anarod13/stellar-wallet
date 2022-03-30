<script>
	import {
		keyPair,
		showAccount,
		signIn,
		
	} from './Elements/stores';
	import Welcome from './welcome.svelte';
	import SignIn from './signIn.svelte';
	import MyAccount from './myAccount.svelte';
</script>
<main>
{#if !$showAccount}
	<Welcome />
	{#if $signIn}
		<SignIn />
	{/if}
{:else}
	<MyAccount />
{/if}
</main>
<style>	

main {
	font-family: Arial, Helvetica, sans-serif;
	align-self: center;
	justify-content: center;
	text-align: center;
	padding: 1em;
	height:fit-content;
	max-width: 600px;
	margin: 10px 50px;
	padding-bottom: 50px;
	border-radius: 10px;
	z-index: 1;
}

@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}</style>