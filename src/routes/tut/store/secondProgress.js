import { tweened } from "svelte/motion";
import {cubicOut} from 'svelte/easing';



const progress2 =tweened(0,{
    duration:1000,
    easing:cubicOut
})

export default progress2 ;