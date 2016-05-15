import fs=require('fs');
import {checkIngredients} from './CheckIngredient';
import {utils} from './utils';
import HashMap=require('HashMap');


export function identifyIngredients(data:string[]){
    
    let ingmap=new HashMap();
   
    for(let i=0;i<data.length;i++){
        let ings=utils.getWords(data[i]);
        for(let j=0;j<ings.length;j++){
            if(ingmap.has(ings[i])===false){
                if(checkIngredients.search(ings[j])===true){
                    ingmap.set(ings[j],true);
                }
            }
        }
    }
    
    console.log(ingmap.keys());
   
    
    
    
    
}