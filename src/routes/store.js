import { writable } from "svelte/store";

const allData = writable(['jane','jenny']);

const namefun={
    subscribe:allData.subscribe,

    add:(name)=>{
      allData.update(items=>{
          items=[...items,name];
          return items;
        })
      },
    
    edit:(id,name)=>{
       allData.update(items=>{
            items[id]=name;
            return items;
        })
    },
    delete:(name)=>{
        allData.update(items=>{
                 return items.filter(i => i !== name);
        })
    }  
}

export default namefun;

