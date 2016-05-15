///</// <reference path="../typings/main.d.ts" />


export function parseHTML(str): string[] {
    str = str.toString();
   return str.split(/<(?:.|\n)*?>/gm).filter(function(value) {
        return value.length > 1;
    });

}