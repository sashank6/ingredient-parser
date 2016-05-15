import fs=require('fs');
import {utils} from './Utils';
import {identifyIngredients} from './IdentifyIngredients';
import {parseHTML} from './parseHTML';



let data=utils.readFile('./data/samplerecipe.txt');
console.log(parseHTML(data));
