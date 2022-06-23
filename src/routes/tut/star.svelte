<svelte:head>
    <link href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</svelte:head>

<script>

    // let color =false;

    let value;
    
    let start =(e)=>{
        value=e;
        console.log(e);
        // color=true;
    }
    let val;

    $: if(val){

        let yes=((val/100).toFixed() * 100);
        console.log(yes);
    }
    
  


   



</script>


<div class="flex gap-2">

        <svg xmlns="http://www.w3.org/2000/svg"  on:click={()=>start(1)} class="{value >=1 ? 'text-yellow-500' : '' } h-8 w-8" 
        viewBox="0 0 20 20" fill="currentColor"
        stroke="white">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg"  on:click={()=>start(2)}   class="{value >=2? 'text-yellow-500' : '' } h-8 w-8" 
        viewBox="0 0 20 20" fill="currentColor"
        stroke="white">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg"  on:click={()=>start(3)}   class="{value >=3 ? 'text-yellow-500' : '' } h-8 w-8" 
        viewBox="0 0 20 20" fill="currentColor"
        stroke="white">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg"  on:click={()=>start(4)}   class="{value >=4 ? 'text-yellow-500' : '' } h-8 w-8" 
        viewBox="0 0 20 20" fill="currentColor"
        stroke="white">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg"  on:click={()=>start(5)}  class="{value >=5 ? 'text-yellow-500' : '' } h-8 w-8" 
        viewBox="0 0 20 20" fill="currentColor"
        stroke="white">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
</div>

  
<span><i  class="fas fa-star"></i></span>
  


        <div><span class="rating">◐○○</span> = Awful</div>
        <div><span class="rating">●○○</span> = Bad</div>
        <div><span class="rating">●◐○</span> = So-so</div>
        <div><span class="rating">●●○</span> = Good</div>
        <div><span class="rating">●●◐</span> = Great</div>
        <div><span class="rating">●●●</span> = Brilliant</div>

 
  <input type="number" bind:value={val} class="input">
  {val}

  {#if val}
        <span style="color:gold;font-size:48px;" class="fa">
            {#if val  <= 10  }
            &#xf089;
            {/if}
            {#if ( val > 10 && val <= 20) || val  > 20 }
            &#xf005;
            {/if}
        </span>
        <span style="color:gold;font-size:48px;" class="fa">
            {#if   val > 20 && val  <= 30 }
            &#xf089;
            {:else if (val  > 30 && val <= 40 ) || val  > 40}
            &#xf005;
            {/if}
        </span>
        <span style="color:gold;font-size:48px;" class="fa">
            {#if val  > 40 && val <= 50  }
            &#xf089;
            {:else if (val  > 50 && val <= 60 )|| val  > 60 }
            &#xf005;
            {/if}
        </span>
        <span style="color:gold;font-size:48px;" class="fa">
            {#if val > 60 && val  <= 70  }
            &#xf089;
            {:else if (val  > 70 && val <= 80 ) || val > 80 }
            &#xf005;
            {/if}
        </span>
        <span style="color:gold;font-size:48px;" class="fa">
            {#if val  > 90 && val <= 100  }
            &#xf089;
            {:else if  val === 100}
            &#xf005;
            {/if}
        </span>
  {/if}


<!-- &#xf005 -->

 
  <style>
      i {
  clip-path: inset(0 50% 0 0);
  color: gold;
  /* width: 52px; */
}
  </style>