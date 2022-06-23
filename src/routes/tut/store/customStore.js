import { writable } from "svelte/store";



function createCount(){
    const {subscribe,update,set}=writable(0);

    return {
        subscribe,
        increment:()=>{
            // console.log('hey');
            update(co=> co +=1 )
        },
        decrement:()=>{
            update(co=> co -= 1)
        },
        reset:()=>{
            set(0);
        }
    }

}

export const count=createCount();

