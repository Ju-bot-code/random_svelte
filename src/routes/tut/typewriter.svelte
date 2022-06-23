<script>
    let visible =false;


	// function typewriter(node, { speed = 1 }) {
	// 	const valid = (
	// 		node.childNodes.length === 1 &&
	// 		node.childNodes[0].nodeType === Node.TEXT_NODE
	// 	);
	// 	if (!valid) {
	// 		throw new Error(`This transition only works on elements with a single text node child`);
	// 	}
	// 	const text = node.textContent;
	// 	const duration = text.length / (speed * 0.01);
	// 	return {
	// 		duration,
	// 		tick: t => {
	// 			const i = Math.trunc(text.length * t);
	// 			node.textContent = text.slice(0, i);
	// 		}
	// 	};
	// }
    function typewriter(node,{speed = 1}){

        // console.log(node.textContent);
        const vaild =(
            node.childNodes.length === 1 &&
            node.childNodes[0].nodeType === Node.TEXT_NODE
        );
        if(!vaild){
            throw new Error (`this transistion only works on elements with a single text node child`);
        }

        const text=node.textContent;
        const duration=text.length / (speed * 0.01);
        return {
            duration,
            tick: t => {
                const i = Math.trunc(text.length * t);
                // console.log(text.slice(0,i));
                node.textContent=text.slice(0,i)
            }
        }


    }
    


</script>

<div class="my-10">
    <h1 class="h1">Typewriter</h1>

    <label for="visible">
        <input type="checkbox" bind:checked={visible}>
      <h1>visible</h1> 
    </label>
    <!-- {visible} -->

    {#if visible}
        <p transition:typewriter>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, veritatis.
        </p>
    {/if}

</div>
