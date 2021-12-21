<script>
    import Tooltip from "./component/tooltip.svelte";
    import Tip from './component/tip.svelte'
    // let show =false
</script>

<div class="flex justify-center">
    <Tooltip top=40 left=20>
        <div slot="content">
            <h1 class="text-4xl  tracking-widest uppercase text-white font-thin">Home</h1>
        </div>
        <div slot="tooltip">
            home
        </div>
    </Tooltip>
</div>



<div class="flex justify-center">
    <Tip>
        <div slot="content">
            <h1 class="text-4xl  tracking-widest uppercase text-white font-thin">Home1</h1>
        </div>
        <div slot="tooltip">
            home1
        </div>
    </Tip>
</div>




