import fs=require('fs');

class Utils {

    readFile(fileName: String):string[] {
        return fs.readFileSync(fileName, 'utf8').split(/\r\n|\r|\n/g);
    }
    
    getWords(line:string):string[]{
        return line.split(/\s|,|\/|\\/g);
    }

}

export const utils=new Utils();