<!-- <script context="module">
    export async function load({page}){
        const res=await fetch('https://crud-a274d-default-rtdb.firebaseio.com/.json');
        const data= await res.json();
        let fetched =data;
        return {props:{fetched}};
    }
</script> -->

<script>
    import allData from './store';
    // import {stuff} from '../storeAPI/get';
    // console.log($stuff);
    
        // export let fetched;
        // console.log(fetched);
        // import  global from './store';
    
    
        let names=[];
        let name;
        let mode='';
        let editVal;
        let Editid;
       
        // names=$allData;
        //edit
        const edit=(i,N)=>{
            mode='edit';
            name=N;
            Editid=i;
            // console.log(N);
            // allData.edit(editVal,name);
        }
    
         //add
        const add=()=>{
           if(mode !== 'edit'){
                //   names=[...names,name];
            //   stuff.add(name);
            allData.add(name);
            //   console.log(yes);
            //    names=[...yes];
           }
           if(mode === 'edit'){
            //    names[names.indexOf(editVal)]=name;
                // allData.edit();
                allData.edit(Editid,name);
           }
        }
    
        const deleteVal = (N)=>{
            // let updated=names.filter(val =>val !== N );
            // names=[...updated];
            allData.delete(N);
        }
          
        
     
        // console.log($global);
        // console.log(fun.subscribe());
    
    </script>
    
    
    <!-- wrapping div -->
    <div class="max-w-5xl mx-auto py-20 ">
    
    
        <h1 class="font-thin uppercase my-2 text-gray-800 text-center text-3xl">CRUD in svelte</h1>
    
        <div class="border p-10 rounded-md ">
    
            <form on:submit|preventDefault="{add}" class="space-y-4">
                <div class="flex flex-col space-y-2">
                    <lable class="font-thin uppercase my-2 text-gray-800">name</lable>
                    <input bind:value={name} class="border p-2 rounded-md" type="text" placeholder="name">
                </div>
                <button class="bg-red-400 text-white rounded-md p-2">submit</button>
            </form>
        </div>  
        
        <!-- display -->
        <h1 class="font-thin uppercase my-2 text-gray-800 text-center text-2xl">Name list</h1>
        <div class="my-4">
            {#each $allData  as name ,i(name)}
            <div class="my-2 border p-2 justify-between rounded flex">
                <p>{name}</p> 
                <div class="flex space-x-1">
                        <div on:click="{()=>edit(i,name)}">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </div>
    
                        <div on:click="{()=>deleteVal(name)}">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </div>
                </div>
            </div>    
            {/each}
        </div>
    
    </div>
    <!-- wrapping div END-->
    
   