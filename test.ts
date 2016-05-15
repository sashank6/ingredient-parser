import fs=require('fs');
import {ingparser} from './index';


let data=fs.readFileSync('./data/samplerecipe.txt','utf-8');
console.log(ingparser.parse(data));



