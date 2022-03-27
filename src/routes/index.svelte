<script >

	import Button from './Elements/Button.svelte'


</script>

<main>
	<header></header>
	<h1>Welcome to Stellar</h1>
	<p>Is this your fir st time here? You'll need a KeyPair so we can get started</p>
	<Button href='./myAccount' direction='Generate a new Keypair'/>
	<Button href='.signIn' direction='Provide a Secret Key'/>



</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		
	}

	header{
		display: flex;
		flex-direction: row-reverse;
	}
	h1 {
		color: #000000;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>
