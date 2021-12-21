<script>
    let items=[1,2,3,4];


    $:sum= items.reduce((t,i)=>t + i,0);

    const addToArray=()=>{
        // items=[...items,items.length+1];
        items[items.length]= items.length+1;
    }

    // $:console.log(items.length);
    // $:console.log(items.length +1);


</script>
<div>
    
    <h1 class="uppercase underline my-2">Reactivity</h1>

    {items.join(' + ')} = {sum}

    <button on:click|stopPropagation={addToArray}
      class="border block my-2 rounded border-white p-1">
      add
    </button>



 
</div>