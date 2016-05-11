///</// <reference path="../typings/main.d.ts" />

import fs=require('fs');
import map=require('hashmap');

var FILE_NAME='../../data/ingredients.dat';

export function readFile(fileName:String){
    return fs.readFileSync(fileName,'utf8'); 
}


export function readIngredients():map{
    let data=readFile(FILE_NAME);
    data=data.split(/\r\n|\r|\n/g);
    return data;
}