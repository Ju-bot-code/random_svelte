<script>
    import {greeting,name} from './store/count.js'

</script>

<h1 class="uppercase underline">Derived store</h1>
{$greeting}


<input type="text" bind:value={$name} class="input">
<button class="btn" on:click="{()=>$name += '!'}">add</button>