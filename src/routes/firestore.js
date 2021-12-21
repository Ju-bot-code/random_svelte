import { writable } from "svelte/store";


// const data =writable([
//                 {name:'jello',summary:'sbhsjdb sdfhsdfh ',occupation:'UX designer'},
//                 {name:'den',summary:'adasds adasdd',occupation:'HR manager'},
//                 {name:'rock',summary:'wdwv wedwegv',occupation:'apple picker'},
//                 ]);

///// start s from here ######################

const data =writable([]);

const stuff={
    subscribe: data.subscribe,
    setData:(things)=>{
        // console.log(things)
        data.set(things)
    },
    add:(newRecord)=>{
       
        fetch('https://crud-a274d-default-rtdb.firebaseio.com/records.json',{
                method:"POST",
                body:JSON.stringify(newRecord),
                headers:{
                    'Content-Type':'application/json'
                }
            }).then(data=>{
               //..
            }).catch(err=>{
                console.log(err);
            });
      data.update(items=>{
           items=[...items,newRecord];
           return items;
       })
    },
    edit:(id,Edited)=>{

        console.log(id);
        fetch(`https://crud-a274d-default-rtdb.firebaseio.com/records/${id}.json`,{
            method:'PUT',
            body:JSON.stringify(Edited),
            headers:{
                'Content-Type':'application/json'
            }
            
            }).then(res =>{
            if(!res.ok){
                throw new Error('adding favourite failed!')
            }
            //update
            data.update(items=>{
                let found=items.find(i => i.iid === id)
                items[items.indexOf(found)]=Edited;
                return items
            })
            //update
        }).catch(err =>{
             console.log(err);
        })
    },
    delete:(id)=>{

        fetch(`https://crud-a274d-default-rtdb.firebaseio.com/records/${id}.json`,{
            method:'DELETE',
        }).then(res =>{
            if(!res.ok){
                throw new Error('adding favourite failed!')
            }
            // delete
            data.update(items=>{
                let updated =items.filter(i=> i.iid !== id);
                items =[...updated];
                return items;
            })
            // delete
        }).catch(err =>{
             console.log(err);
        })
       
    },
   
}



export default stuff;

