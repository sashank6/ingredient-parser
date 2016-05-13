import fs=require('fs');
import {utils} from './Utils';
import {identifyIngredients} from './IdentifyIngredients';



let data=utils.readFile('../../data/samplerecipe.txt');
identifyIngredients(data);
