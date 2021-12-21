<script>
    import control from "./control";
    let close=control.toggle;

</script>


    <div class="fixed inset-0 w-full overflow-y-scroll h-full bg-gray-500 opacity-50"></div>
    <div class="bg-white p-3 z-50 rounded-md max-w-2xl mx-auto my-10 absolute inset-0">
        <button on:click="{()=>{
             close(false);
            }}" 
        class="absolute top-2 text-pink-400 right-2 border py-1 px-2 rounded-lg border-pink-500" >
          X
        </button>
        <div class="p-10">
          <slot name="title"></slot>
          <slot></slot>
        </div>
    </div>
