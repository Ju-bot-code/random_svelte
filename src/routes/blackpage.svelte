<script>
    import Reactivity from "./tut/Reactivity.svelte";
    import Props from './tut/props.svelte'
    import Inn from "./tut/innerhtml.svelte";
    import Eachblockbind from "./tut/eachblockbind.svelte";
    import Mediabind from "./tut/mediabind.svelte";
    import BindingDimestion from "./tut/bindingDimestion.svelte";
    import Keypad from "./tut/keypad.svelte";
    import Bindintocomp from './tut/bindingToComponentInstance/index.svelte'
    import Count from "./tut/count.svelte";
    import CustomStore from "./tut/customStore.svelte";
    import Progress from "./tut/progress.svelte";
    import Typewriter from "./tut/typewriter.svelte";
    import Transition from "./tut/transition.svelte";
    import Local from "./tut/local.svelte";
    import Star from "./tut/star.svelte";
    import Password from "./tut/password.svelte";


 

</script>



<div class="bg-black bg-cover bg-hero-desktop absolute top-0 w-screen min-h-screen text-gray-50">
    <h1 class="font-thin text-center text-4xl my-20 tracking-widest">hello</h1>


    <div class="mx-auto max-w-5xl my-2 text-lg tracking-widest space-y-10">

        <Reactivity/>
        <Props/>
        <div class="my-2 gap-2 flex">
            <h1 class="uppercase underline m-2 ">Random emojis</h1>
            <div> 🍎</div>
            <div> 🍌</div>
            <div> 🥕</div>
            <div> 🍩</div>
            <div> 🥚</div>
            <div>🤌🏼</div>
            <div>👩🏿‍🦱 </div>
            <div> 🐳</div>
        </div>

        <Inn/>
        <Eachblockbind/>
        <Mediabind/>
        <BindingDimestion/>
        <Keypad/>
        <Bindintocomp/>
        <Count/>
        <CustomStore/>
        <Progress/>
        <Typewriter/>
        <Transition/>
        <Local/>
        <Star/>
        <Password/>
      


   
  

      


    </div>





</div>