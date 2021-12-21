
<script>
    // import DragDropList from "svelte-dragdroplist";

    // let data = [{"id": 0, "text": "Boston"}, 
    //         {"id": 1, "text": "Judith"}, 
    //         {"id": 2, "text": "Chicago"}, 
    //         {"id": 3, "text": "Denver"}];


    // 



    import allData from './firestore';
    import control from './control';
    import Modal from './modal.svelte';
    import { onMount } from "svelte";

   
    let myComponent;
    // let SortableList;
    // let Component;
        onMount(async()=>{
                const module=await import ('@tinymce/tinymce-svelte');
                myComponent=module.default;

                // const module1=await import ('@tinymce/tinymce-svelte');
                // SortableList=module1.default;

                // const module2=await import ('@tinymce/tinymce-svelte');
                // Component=module2.default;

        })
     
  
        onMount(()=>{
            fetch('https://crud-a274d-default-rtdb.firebaseio.com/records.json')
            .then(res=>{
                if(res.ok){
            
                return res.json();
                    }
                })
             .then(data=>{
                let all=[];
                // console.log(data.id);
                for (const key in data) {
                    // all=[...all,data[key]];
                    all.push({...data[key],iid:key})
                    }
                    // console.log(all)
                    allData.setData(all);
                })
            .catch(err =>{
                    return console.log(err);
                })
        })
        
  let open=control.toggle;
  let text='';
  let occupation='';
  let summary ='';
  let Edit=false;
  let Edited;
  let Editid;


  const clear =()=>{
    text='';
    occupation='';
    summary='';
  }


  const edit=(iid)=>{
    Edit=true;
    Editid=iid;

    let data =$allData;
    let found =data.find(i=> i.iid === iid);
    open(true) 
    
    text= found.text;
    occupation=found.occupation;
    summary=found.summary;
        }

        // $: console.log()
        
        const add=()=>{
            // let iid;
            
          
            let last_element = $allData.find(items=> items.id == $allData.length -1 )
            // console.log('last',last_element.id);
        
    let newRecord={
            text,
            occupation,
            summary,
            id:last_element.id +1,
        };  
      if(!Edit){

          allData.add(newRecord);

          clear();
      }else{
            Edited={text,occupation,summary}
            allData.edit( Editid,Edited); 
   
    }
      open(false);
  
  }

  const removeData =(iid)=>{
    allData.delete(iid);
  }

//   let data=[...$allData]
  

</script>
<section class="max-w-5xl mx-auto py-10">
  

    <div on:click="{()=>{ open(true) }}">
        <button class="border-4 w-full text-white bg-origin-border border-opacity-25 border-white p-2  rounded-md shadow-xl bg-opacity-75 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Add</button>
    </div>
    {#if $control.modal}
        <Modal>
            <div title="title" >
                <h1 class="text-2xl text-center font-light text-gray-700 ">
                    Add member
                </h1>
            </div>
            <form on:submit|preventDefault={add}>
                <div class="text-gray-700 space-y-2">
                    <div class=" flex flex-col space-y-2 ">
                        <label  class="" for="Name">Name</label>
                        <input  class="bg-gradient-to-r  rounded-md bg-gray-100 border-white bg-origin-border p-1"type="text" bind:value={text}>
                    </div>
                    <div class=" flex flex-col space-y-2 ">
                        <label class=""  for="occupation">occupation</label>
                        <input  class="bg-gradient-to-r rounded-md bg-gray-100 border-white bg-origin-border p-1"type="text" name="occupation" bind:value={occupation}>
                    </div>
                    <div class=" flex flex-col space-y-2 ">
                        <label class=""  for="summary">summary</label>
                        <svelte:component this={myComponent} bind:value={summary}/>
                    </div>
                </div> 
                <button type="submit" class="btn btn-secondary mt-4">submit</button> 
            </form>   
        </Modal>
    {/if}

    <div class="grid grid-cols-1 gap-4 my-10">
      
    {#each $allData as data ,i}
    <div class="border-4 text-white bg-origin-border border-opacity-25 border-white p-6 rounded-md shadow-xl bg-opacity-75 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
       <div class="flex justify-between">
           <div>
                <ul>
                    <li>
                        name: {data.text}
                    </li>
                    <li>
                        occupation: {data.occupation}
                    </li>  
                    <li class="flex space-x-2">
                        summary: {@html data.summary}
                    </li>  
                </ul>   
           </div>
           <div class="flex flex-col justify-between max-h-full space-y-6 ">
                <svg xmlns="http://www.w3.org/2000/svg" on:click="{()=>edit(data.iid)}" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" on:click="{()=>removeData(data.iid)}" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
           </div>
       </div>
        
    </div>  
    {/each}


  
    <!-- {#each $allData as data ,i} -->
    <!-- <DragDropList bind:data={$allData.text} /> -->
    <!-- {/each} -->


</div>   
</section>



