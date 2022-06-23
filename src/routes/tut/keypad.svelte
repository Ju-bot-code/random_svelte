<script>
    let number ='';
    let sub=false;
        
    function select(num){
            number +=num;
    }
    $:view = number ? number.replace(/\d(?!$)/g,'*')   : 'enter your pin'

    function clear(){
        number='';
        sub=false;
    }
    function submit(){
        if(number){
        sub=true;
        }
    }

</script>
    
    <h1 class="uppercase underline my-2">KEYPAD </h1>

    <div class="m-4 flex flex-col justify-center items-center">

    {#if sub}
    <p class="text-green-500">pin has been submitted</p>
    {/if}
       <div class:border-green-500={sub} class="bg-gray-600 border p-3 w-1/3 m-4 rounded-md text-center "> {view}</div>


        <div class="grid grid-cols-3 gap-4">
           
                <div class="bg-gray-600 p-3 rounded-md text-center " on:click="{()=>select(1)}">1</div>
                <div class="bg-gray-600 p-3 rounded-md text-center " on:click="{()=>select(2)}">2</div>
                <div class="bg-gray-600 p-3 rounded-md text-center " on:click="{()=>select(3)}">3</div>
                <div class="bg-gray-600 p-3 rounded-md text-center " on:click="{()=>select(4)}">4</div>
                <div class="bg-gray-600 p-3 rounded-md text-center " on:click="{()=>select(5)}">5</div>
                <div class="bg-gray-600 p-3 rounded-md text-center " on:click="{()=>select(6)}">6</div>
                <div class="bg-gray-600 p-3 rounded-md text-center " on:click="{()=>select(7)}">7</div>
                <div class="bg-gray-600 p-3 rounded-md text-center " on:click="{()=>select(8)}">8</div>
                <div class="bg-gray-600 p-3 rounded-md text-center " on:click="{()=>select(9)}">9</div>
                <button class="bg-gray-600 p-3 rounded-md text-center " on:click="{clear}">clear</button>
                <div class="bg-gray-600 p-3 rounded-md text-center " on:click="{()=>select(0)}">0</div>
                <button class="bg-gray-600 p-3 rounded-md text-center " on:click="{submit}">submit</button>

        </div>
     

    </div>

