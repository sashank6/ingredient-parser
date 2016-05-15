import fs=require('fs');
import {checkIngredients} from './CheckIngredient';
import {utils} from './utils';
import HashMap=require('HashMap');


export function identifyIngredients(data:string[]){
    
    let ingmap=new HashMap();
    let recipeLines:string[]=[];
   
    for(let i=0;i<data.length;i++){
        let ings=utils.getWords(data[i]);
        let ingPresent=false;
        let isPrevIngredient=false;
        for(let j=0;j<ings.length;j++){
            let ingredient=ings[j].toString().toUpperCase();
            if(ingmap.has(ingredient)===false){
                if(checkIngredients.search(ingredient)===true){
                    if(isPrevIngredient){
                        ingmap.remove(ings[j-1].toString().toUpperCase());
                        ingmap.set(ings[j-1].toString().toUpperCase()+" "+ingredient,true);
                        isPrevIngredient=true;
                    }
                    else{
                    ingmap.set(ingredient,true);
                    isPrevIngredient=true;
                    }
                    ingPresent=(ingPresent || true);
                }
                else{
                    isPrevIngredient=false;
                }
            }
            else{
                isPrevIngredient=false;
            }
        }
        if(ingPresent)
            recipeLines.push(data[i]);
    }
    
    console.log(ingmap.keys());
    console.log(recipeLines);
   
    
    
    
    
}