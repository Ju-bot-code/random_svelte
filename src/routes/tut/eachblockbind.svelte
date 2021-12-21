<script>
    let todos = [
		{ done: false, text: 'finish Svelte tutorial' },
		{ done: false, text: 'build an app' },
		{ done: false, text: 'world domination' }
	];

    function clearCompleted(){
        todos=todos.filter(i=> i.done !== true);
    }

    function addTodo(){
        todos=todos.concat({done:false,text:''});
    }


</script>

<h1 class="uppercase underline my-2">Each block binding</h1>
<div class="m-6 border p-4 rounded-md">
 
    <h1 class="text-white font-thin text-center text-3xl">todos</h1>
        <div class="flex flex-col items-center">
            {#each todos as todo}
                <div class="space-y-4">
                    <input type="checkbox"
                        bind:checked={todo.done}
                        class="bg-white rounded-md text-black p-3">

                    <input type="text" 
                            bind:value="{todo.text}"
                            placeholder="add something"
                            class="bg-white rounded-md text-black p-3">
                </div>            

            {/each}
            <div class="flex">
            <button on:click="{addTodo}" class="border m-4 border-white text-white rounded-md p-2">
                add new
              </button> 
                
              <button on:click="{clearCompleted}" class="border m-4 border-white text-white rounded-md p-2">
                  clear completed
              </button> 
            </div>
        </div>

       
        <!-- <pre class="flex flex-wrap">  -->
            {JSON.stringify(todos)}
        <!-- </pre> -->
        

</div>