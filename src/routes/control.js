import { writable } from "svelte/store";

const all =writable({
        modal:false
})

const control={
    subscribe:all.subscribe,
    toggle:(value)=>{
       all.update(items=>{
           return {...items,modal:value};
       })
    }
} 

export default control;

