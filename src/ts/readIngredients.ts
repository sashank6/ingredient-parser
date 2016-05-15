///</// <reference path="../typings/main.d.ts" />

import fs=require('fs');
import{utils} from './utils';

let FILE_NAME='./data.txt';


export function readIngredients():string[]{
    let data=fs.readFileSync(FILE_NAME, 'utf8');
    return data;
}
