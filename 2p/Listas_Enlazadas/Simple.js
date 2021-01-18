class Node
{
    constructor(entrada, siguiente)
    {
        this.entrada = entrada;    
        this.siguiente = siguiente; 
    }
}
class Enlazada
{
    constructor()
    {
        this.ini = null; 
        this.count = 0; 
    }
    añadir(entrada)
    {
        let nodoDos = new Node(entrada,null);
        if(!this.ini) this.ini = nodoDos
        else
        {
            let actual = this.ini;
            while (actual.siguiente)
            {
             actual = actual.siguiente; 
            }                             
            actual.siguiente = nodoDos;
        }
        this.count++; 
    }
}
const lista = new Enlazada();
console.log("Lista vacía ", lista);
lista.añadir("Primero");
lista.añadir("Segundo");
lista.añadir("Tercero")
console.log("Listado ",lista)