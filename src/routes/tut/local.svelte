<script>
    	import { slide } from 'svelte/transition';

    let index=5;
    let list =['one','two','three','four','five','six','seven','eight','nine','ten'];

    let color=['#ff6347','Violet','MediumSeaGreen','DodgerBlue','red','blue','green','pink','#11abf7','#11abf7']
    
 
</script>

<div>
    <h1 class="h1">local transistion </h1>
    <input type="range" bind:value="{index}" max="10">
    <div class="my-10 flex space-x-5">
        {#each list.slice(0,index) as li ,i}
            <div transition:slide|local class="my-2 border p-2 rounded-md drop-shadow-2xl " style="border-color:{color[i]}; box-shadow: 5px 5px white;">
                {li}
                <!-- <hr> -->
            </div>
        {/each}
      
    </div>
</div>