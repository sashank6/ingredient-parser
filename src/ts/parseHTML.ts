///</// <reference path="../typings/main.d.ts" />


export function parseHTML(str): string[] {
    str = str.toString();

    let parsedData = [];
    let parsedHTML = str.split(/<(?:.|\n)*?>/gm).filter(function (value) {
        return value.length > 1;
    });
    for (let i = 0; i < parsedHTML.length; i++) {
        let tmp = parsedHTML[i].split(/\r\n|\r|\n/g);
        parsedData = parsedData.concat(tmp);
    }

    return parsedData;


}