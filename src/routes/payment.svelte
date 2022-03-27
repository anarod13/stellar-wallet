<script>
    import StellarSdk from 'stellar-sdk'
    let amount;
    let recipient;
</script>

<prompt>
    You're about to send XLM
    <input bind:value={amount} placeholder="Amount">
    <input bind:value={recipient} placeholder="Recipient">
</prompt>