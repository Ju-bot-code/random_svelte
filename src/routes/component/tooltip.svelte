<script>
    let show =false
    export let top;
    export let left;

</script>

<!-- <div class="flex justify-center"> -->
    <div  class="my-10  relative text-white text-2xl font-thin ">
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <div  on:mouseover="{()=> show =true}" on:mouseout="{()=>show=false}">
            <slot name="content"></slot>
        </div> 
        {#if show}
            <div  style="top:{top}px;left:{left}px;"
            class="absolute font-normal z-50 text-xs rounded-full bg-gray-700 text-white py-0.5 px-2">
                <slot name="tooltip"></slot>
            </div>
        {/if}
    </div>
<!-- </div> -->