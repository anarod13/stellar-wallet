<script>
	export let onclick = () => {};
	export let textButton;
</script>

<button on:click={onclick}>{textButton}</button>

<style>
	button {
		background-color: #04aa6d;
		padding: 10px;
		color: bisque;
		border-radius: 8px;
		margin: 5px;
        cursor: pointer;
	}
</style>
