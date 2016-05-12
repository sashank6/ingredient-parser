import HashMap = require('hashmap');
import {readIngredients} from './readIngredients';


class CheckIngredients {

    map: HashMap;
    constructor() {

        let data = readIngredients();
        this.map = new HashMap();
        for (let i = 0; i < data.length; i++) {
            this.map.set(data[i], true);
        }
    }
    
    search(val:string):boolean{
        val=val.toUpperCase();
        return this.map.has(val);
    }
    





}

export const checkIngredients = new CheckIngredients();