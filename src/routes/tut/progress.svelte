<script>
    import progress from './store/progress'
    import progress2 from './store/secondProgress'

    let one=0;
    let two=0;
    let three=0;
    let four=0;

    function addMore (){
        progress.update(i => i += 0.25)
    }
    function deductMore(){
        progress.update(i => i -=0.25 )
    }

    //second progress bar

    // let quater = (0.25 * 100);

    $: if ( $progress2 > 1 ){
        $progress2.set(1)
    }

    $: if ( Math.sign($progress2) === -1 ){
        $progress2.set(0)
    }

    $: if($progress2 <= 0.25){

        one=$progress2 * 100;

    }else if($progress2 > 0.25 && $progress2 <= 0.5){
        
        two=($progress2 - 0.25 ) * 100 

    }else if($progress2 > 0.5 && $progress2 <= 0.75){
       
        three =($progress2 - 0.5) * 100 ;

    }else if($progress2 > 0.75  && $progress2 <= 1 ){

        four= ($progress2 - 0.75) * 100;
    }

//    $: console.log(Math.sign($progress2) );
   
    function addMore2(){
        progress2.update(i => i += 0.25)
    }
    function deductMore2(){
        progress2.update(i => i -=0.25 )
    }
</script>



<h1 class="h1">tweening</h1>    
    <!-- svelte-ignore component-name-lowercase -->
    <progress value="{$progress}" >
        
    </progress>

    <button class="btn" on:click={addMore}>+</button>
    <button class="btn" on:click={deductMore}>-</button>

    
    <div class="w-full h-5 bg-gray-100 rounded-2xl flex">
        <div style="width:{one}%;" class="h-5 bg-green-200  rounded-l-2xl flex justify-end">
           {#if one === 25}
           <div class="h-7 w-7 border-2 border-yellow-500 flex items-center justify-center -mr-5 -mt-1 z-20 rounded-full bg-white ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6  text-yellow-500 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            </div>
           {/if}
        </div>
        <div style="width:{two}%;" class="h-5 bg-green-300 flex justify-end">
            {#if two === 25}
           <div class="h-8 w-8 border-2 border-yellow-500 flex items-center justify-center -mr-5 -mt-1.5 z-20 rounded-full bg-white ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7  text-yellow-500 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            </div>
           {/if}
        </div>
        <div style="width:{three}%;" class="h-5 bg-green-400 flex justify-end">
            {#if three === 25}
            <div class="h-9 w-9 border-2 border-yellow-500 flex items-center justify-center -mr-5 -mt-2 z-20 rounded-full bg-white ">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-8  text-yellow-500 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                 </svg>
             </div>
            {/if}
        </div>
        <div style="width:{four}%;" class="h-5 bg-green-500  rounded-r-2xl flex justify-end">
            {#if four === 25}
            <div class="h-10 w-10 border-2 border-yellow-500 flex items-center justify-center -mr-2 -mt-2.5 z-20 rounded-full bg-white ">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-9  text-yellow-500 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                 </svg>
             </div>
            {/if}
        </div>
    </div>

    <!-- <p>
        progress ={$progress2}
        one = {one}
        two={two}
        three={three}
        four={four}
    </p> -->
    <button class="btn" on:click={addMore2}>+</button>
    <button class="btn" on:click={deductMore2}>-</button>


<!-- <div class='h-96'></div> -->

<style>
	progress {
		display: block;
		width: 100%;
        border: 0;
        height: 15px;
	}
    progress[value]::-webkit-progress-bar {
    background-color: #ededed;
    border-radius: 40px;
    }

    progress[value]::-webkit-progress-value {
    border-radius: 40px;
    background-color:rgb(47, 202, 163);
    }

  

</style>