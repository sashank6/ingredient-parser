import {identifyIngredients} from './src/js/IdentifyIngredients';
import {parseHTML} from './src/js/parseHTML';

class INGPARSER{
    
    constructor(){}
    
    parse(data:string):JSON[]{   
        return identifyIngredients(parseHTML(data));
    }    
}

