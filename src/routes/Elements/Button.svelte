<script>
    export let href = '#';
    export let direction;
</script>

<a class="button" href={href}>{direction}</a>

<style>
        .button {
        width:10%;
        background-color: orangered;
        padding: 10px;
        color:bisque;
        border-radius: 8px;
        margin:5px
    }
</style>
