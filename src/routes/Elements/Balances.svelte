<script>
	import { each } from 'svelte/internal';
	import Button from './Button.svelte';
	export let handleSend;
	export let refreshAccount;
	export let balances;
</script>

<div class="balances">
	<h2>Your balance:</h2>
	<table>
		<tbody>
			{#each balances as balance}
				<tr>
					<td>{balance.balance}</td>
					<td>{balance.asset_type === 'native' ? 'XLM' : balance.asset_type}</td>
				</tr>
			{/each}
		</tbody>
	</table>
	<div>
	<Button onclick={refreshAccount} textButton="Refresh account" />
	<Button onclick={handleSend} textButton="Send" />
</div>
</div>

<style>
.balances{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 90%;
}

table{
	font-size: 1.2em;
}
</style>
