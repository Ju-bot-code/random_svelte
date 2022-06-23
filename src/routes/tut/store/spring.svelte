<!-- <script>
    import {fly,fade} from 'svelte/transition'
    import { spring } from 'svelte/motion';

    let co = spring({ x: 50, y: 50 }, {
        stiffness: 0.1,
        damping: 0.25
    });


    let isHere=false;

    let over =(e)=>{
        isHere=true;

        if(isHere){
            co.set({
                x:e.clientX,
                y:e.clientY
            })
        }
        
    }
    let out=()=>{
        isHere=false;

        co.set({
                x:0,
                y:0
            })
    }
    let move=(e)=>{
        if(isHere){
            co.set({ x: e.clientX, y: e.clientY })
        }
    }


</script>


<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<h1 class="h1 ">Spring</h1>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class="m-20 bg-pink-50 bg-opacity-50 rounded-full border border-white  h-96  relative"
    on:mouseover="{over}" on:mouseout="{out}" on:mousemove="{move}"
    >
    {#if isHere}

    <div in:fly={{x:200, duration:1000}} out:fade style="top: {$co.y - 160}px; left:{$co.x - 80}px" 
    class="flex justify-center items-center absolute h-10 w-10 bg-gray-500 rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 rounded-full bg-gradient-to-r from-pink-600 via-blue-600 to-purple-600" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd" />
      </svg>
    </div> -->





    <!-- =============== -->


    <!-- <div transition:fly={{y:200, duration:2000}} style="top: {$co.y - 160}px; left:{$co.x - 80}px" 
    class="flex justify-center items-center absolute h-10 w-10 bg-gray-500 rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 rounded-full bg-gradient-to-r from-pink-600 via-blue-600 to-purple-600" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd" />
      </svg>
    </div> -->

    <!-- fade -->
        <!-- <div transition:fade style="top: {$co.y - 160}px; left:{$co.x - 80}px" 
            class="flex justify-center items-center absolute h-10 w-10 bg-gray-500 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 rounded-full bg-gradient-to-r from-pink-600 via-blue-600 to-purple-600" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd" />
              </svg>
        </div> -->
    {/if}    
</div>


<!-- <script>
	import { spring } from 'svelte/motion';

	let co = spring({ x: 50, y: 50 }, {
		stiffness: 0.1,
		damping: 0.25
	});

	let size = spring(10);
	
	let ww = 1;
	let wh = 1;
</script>

<svelte:window bind:innerWidth={ww} bind:innerHeight={wh}/>

<div style="left: 1em;">
	<p>x: <progress value={$co.x/ww}/> {Math.round($co.x)}</p>
	<p>y: <progress value={$co.y/wh}/> {Math.round($co.y)}</p>
	<p>r: <progress value={($size-10)/20}/> {Math.round($size)}</p>
</div>

<svg
	on:pointermove="{e => co.set({ x: e.pageX, y: e.pageY })}"
	on:pointerdown="{() => size.set(30)}"
	on:pointerup="{() => size.set(10)}"
>
	<circle cx={$co.x} cy={$co.y} r={$size}/>
</svg>

<div style="right: 1em; width: 160px">
	<label>
		<h3>stiffness ({co.stiffness})</h3>
		<input bind:value={co.stiffness} type="range" min="0" max="1" step="0.01">
	</label>

	<label>
		<h3>damping ({co.damping})</h3>
		<input bind:value={co.damping} type="range" min="0" max="1" step="0.01">
	</label>
</div> -->

<!-- <style>
	:global(body) {
		margin: 0;
	}
	
	svg {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
	
	circle {
		fill: #ff3e00
	}
	
	div {
		position: absolute;
		pointer-events: none;
	}
	
	input {
		pointer-events: all;
		padding: 0.4em 0;
	}
</style> -->