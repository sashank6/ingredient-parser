import fs=require('fs');
import {checkIngredients} from './CheckIngredient';
import {utils} from './utils';
import HashMap=require('HashMap');


export function identifyIngredients(data:string[]){
    
    let map=new HashMap();
   
    for(let i=0;i<data.length;i++){
        let ings=utils.getWords(data[i]);
    }
   
    
    
    
    
}