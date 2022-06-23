<script>
    import {count} from './store/customStore'
</script>
<div>
    <h1 class="h1">custom store</h1>
        {$count}

        <button class="btn" on:click={count.increment}>+</button>
        <button class="btn" on:click={count.decrement}>-</button>
        <button class="btn" on:click="{count.reset}">reset</button>
</div>