<script>
    let show =false
    let x;
    let y;

    const mouseover =(event)=>{
        show=true;
        x=event.pageX +10;
        y=event.pageY+10;
    }
    const mouseout =()=>{
        show=false;
    }

    const mousemove=(e)=>{
        x=e.pageX+10;
        y=e.pageY+10;
    }
   
</script>

<!-- <div class="flex justify-center"> -->
    <div  class="my-10   text-white text-2xl font-thin  cursor-pointer">
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <div  on:mouseover="{mouseover}" on:mouseout="{mouseout}" on:mousemove="{mousemove}">
            <slot name="content"></slot>
        </div> 
        {#if show}
            <div style="top:{y}px;left:{x}px;" 
            class="absolute font-normal z-50 text-xs rounded-full bg-gray-700 text-white py-0.5 px-2">
                <slot name="tooltip"></slot>
            </div>
        {/if}
    </div>