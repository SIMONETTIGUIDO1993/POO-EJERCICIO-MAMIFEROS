import { Mamifero } from "./mamifero";
import { Carnivoro } from "./carnivoro";
import { Hervivoro } from "./hervivoro"
import { Omnivoro } from "./omnivoro";


//nuevo mamifero

let mamifero1 = new Mamifero ("Perro",4)
console.log(mamifero1);


//nuevo carnivoro
let carnivoro1 = new Carnivoro("terrestre","tigre",4);
//se constata que la comida este por defecto "none"
console.log(carnivoro1);
//se cambia la comida dependiendo la clase
carnivoro1.setComida();
//se constata que la comida se cambie segun la clase carnivoro
console.log(carnivoro1);



