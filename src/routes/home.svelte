<script>
    import Tooltip from "./component/tooltip.svelte";
    import Tip from './component/tip.svelte'
    // let show =false

    let COLOR_NAME='red-700'




    // ============== timer


    import { tweened } from 'svelte/motion';
  let original = 5 * 60; // TYPE NUMBER OF SECONDS HERE
	let timer = tweened(original)

  // ------ dont need to modify code below
  import Typewriter from "svelte-typewriter";
  setInterval(() => {
    if ($timer > 0) $timer--;
  }, 1000);

  $: minutes = Math.floor($timer / 60);
  $: minname = minutes > 1 ? "mins" : "min";
  $: seconds = Math.floor($timer - minutes * 60)
</script>



<div class="mx-20 text-white text-xl">

    {#if timer < 1}
        <Typewriter loop>
          <h1>Starting soon....</h1>
        </Typewriter>
      {:else}
    <h1>We will be back in <span class="text-pink-900">{minutes}</span>{minname} 
        
        <span class="text-pink-900">{seconds}</span>s!</h1>
    <progress value={$timer/original}></progress>
      {/if}
</div>






<div class="flex justify-center">
    <Tooltip top=40 left=20>
        <div slot="content">
            <h1 class="text-4xl  tracking-widest uppercase text-white font-thin">Home</h1>
        </div>
        <div slot="tooltip">
            home
        </div>
    </Tooltip>
</div>



<div class="flex justify-center">
    <Tip>
        <div slot="content">
            <h1 class="text-4xl  tracking-widest uppercase text-white font-thin">Home1</h1>
        </div>
        <div slot="tooltip">
            home1
        </div>
    </Tip>
</div>



<div class="p-6 card bordered mx-40">
    <div class="form-control">
      <label class="cursor-pointer label">
        <span class="label-text ">Remember me</span> 
        <input type="checkbox" checked="checked" class="checkbox bg-pink-700 text-{COLOR_NAME} h-20 w-20">
      </label>
    </div>
  </div>
  <input type="checkbox" class="m-40 w-20 h-20 bg-gray-500 text-red-500" name="" id="">
  <label class="inline-flex items-center mt-3">
    <input type="checkbox" class="form-checkbox h-5 w-5 text-red-600" checked><span class="ml-2 text-gray-700">label</span>
</label>


<div class="max-w-sm mx-auto p-8">
    <label class="inline-flex items-center">
      <input class="text-indigo-500 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded" type="checkbox" />
      Checkbox
    </label>
</div>

  

<style>
	
	progress {
		display: block;
		width: 100%;
	}
	.mins {
		color: darkgoldenrod;
	}
	.secs {
		color: darkgoldenrod;
	}
  
 
</style>

  