///</// <reference path="../typings/main.d.ts" />

import fs=require('fs');
import{utils} from './utils';

var FILE_NAME='../../data/ingredients.dat';


export function readIngredients():string[]{
    let data=utils.readFile(FILE_NAME);
    return data;
}
