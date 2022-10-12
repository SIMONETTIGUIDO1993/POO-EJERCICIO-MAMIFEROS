import { Mamifero } from "./Mamifero";

export class Carnivoro extends Mamifero{
    private tipo: string;
    
    constructor (pTipo:string,pAnimal:string,pCantExtremidades:number){
        super(pAnimal,pCantExtremidades);
        this.tipo = pTipo;
    }

    public setComida():void{
        this.comida= "carne";
    }


    
}