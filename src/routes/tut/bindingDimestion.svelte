<script>
    let value ='edit me';
    let size= 32;
    let w;
    let h;
</script>
<div class="m-4 flex flex-col border p-4 space-y-4">

    <input type="text" bind:value class="border text-black p-2 rounded-md border-white">
    
    <input type="range" bind:value="{size}" class="text-pink-300">

    <div bind:clientHeight="{h}" bind:clientWidth="{w}">
       <span style="font-size: {size}px">{value}</span>
    </div>
    <p>size: {w}px x {h}px</p>
</div>

