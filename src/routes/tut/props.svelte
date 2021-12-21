<script>
import Child from './child.svelte';

    const pkg = {
		name: 'svelte',
		version: 3,
		speed: 'blazing',
		website: 'https://svelte.dev'
	};

</script>

<div>
    
    <h1 class="uppercase underline my-2">Props </h1>

    <Child value=92 {...pkg}/>
    <!-- <Child value=92 {pkg}/> -->

</div>