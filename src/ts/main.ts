import fs=require('fs');
import {utils} from './Utils';
import {identifyIngredients} from './IdentifyIngredients';
import {parseHTML} from './parseHTML';



let recipe=utils.readFile('../../data/samplerecipe.txt');
let parsedHTML=parseHTML(recipe);
identifyIngredients(parsedHTML);

