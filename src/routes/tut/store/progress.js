import {tweened} from 'svelte/motion';
import {cubicOut} from 'svelte/easing'

const progress=tweened(0.4,{
    duration: 2000,
    easing:cubicOut
});

export default progress;

