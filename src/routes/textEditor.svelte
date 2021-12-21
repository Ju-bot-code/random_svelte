<!-- type 2 -->
<svelte:head>
  <script src="https://cdn.tiny.cloud/1/tiny-api-key-here/tinymce/5/tinymce.min.js" referrerpolicy="origin" ></script>
</svelte:head> 
    
<script>
   
    // type 1
    import { onMount } from 'svelte';
    let myComponent;
    let summary='';  
        onMount(async()=>{
                const module=await import ('@tinymce/tinymce-svelte');
                myComponent=module.default;
        })


    //type 2
    let getHTML;
    let myHTML;
    onMount(() => {
        tinymce.init({
            selector: '#tiny'
        })

        getHTML = () => {
            myHTML = tinymce.get('tiny').getContent();
        }
    })

</script>
<!-- typ2 -->
<textarea id="tiny" bind:value="{myHTML}" />
{myHTML}
<button on:click={getHTML}>Get HTML from TinyMCE</button>
<!-- typ2 -->


<!-- type1 -->
<svelte:component this={myComponent} bind:value={summary}/>
{@html summary}
<!-- type1 -->

