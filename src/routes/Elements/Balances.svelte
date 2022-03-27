<script>
import { each } from "svelte/internal";


	// export let accountID;
	export let balances;
</script>
<div>
<table>
	<thead>
		<tr>
			<th>Asset</th>
			<th>Balance</th>
		</tr>
	</thead>
    <tbody>
        {#each balances as balance}
        <tr>
<td>{balance.asset_type==='native'?'XLM':balance.asset_type}</td>
<td>{balance.balance}</td>
        </tr>
        {/each}
    </tbody>
</table>
<button>Send</button>
<button>Recieve</button>
</div>