<script>
    let text='<p>what up</p>';
</script>
<div>
    <h1 class="uppercase underline my-2">ContentEditable bindings </h1>
    <div  class=" bg-white text-black p-2 rounded-md border border-gray-100"
    contenteditable="true"
     bind:innerHTML={text}>
    </div>
    <pre>{text}</pre>

</div>