

class Ingredient{
    
    amount:number;
    unit:string;
    name:string;
    
    constructor(){}
    
    setAmount(amount:number){
        this.amount=amount;
    }
    
    setUnit(unit:string){
        this.unit=unit;
    }
    
    setName(name:string){
        this.name=name;
    }
    
    
}
let module:any;
module.exports=Ingredient;