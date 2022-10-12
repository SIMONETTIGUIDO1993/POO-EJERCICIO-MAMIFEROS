export class Mamifero{
    protected animal:string;
    protected cantExtremidades:number;
    protected comida:string



    constructor(pAnimal:string,pCantExtremidades:number){
        this.animal = pAnimal;
        this.cantExtremidades = pCantExtremidades;
        this.comida = "none";


    }

    public setComida():void{
        this.comida="none";
    }


}