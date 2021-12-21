
  <script>
    import DragDropList from "svelte-dragdroplist";
    import allData from './firestore';
    import {onMount} from 'svelte';


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


    let data =[...$allData];
    console.log($allData);
    // = [{"id": 0, "text": "Boston"}, 
    //         {"id": 1, "text": "Boston"}, 
    //         {"id": 2, "text": "Chicago"}, 
    //         {"id": 3, "text": "Denver"}];
</script>
<div class="mx-auto max-w-5xl my-10">
    <DragDropList bind:data={data} />
</div>
 

