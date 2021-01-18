class SacaFila{
    constructor(DUsuario)
    {
    this.DUsuario = DUsuario;
    }

    insertar()
    {
        this.DUsuario =  Number(prompt("Numero de fila de la matriz"));
        while (this.DUsuario <  1 || this.DUsuario > 3)
        {
            alert("Matriz de 3x3 ingresa un dato de ese rango");
            this.DUsuario = Number(prompt("Numero de fila de la matriz"))
        }
        return this.DUsuario;
    }

    ImprimirFila(matriz)
    {
        let ind = this.DUsuario - 1;
        console.log('Columna elegida ',this.DUsuario,':', matriz[ind]);
    }
}
let matriz = new Array([1,2,3], [4,5,6], [7,8,9]);
let column = new SacaFila();
column.insertar();
column.ImprimirFila(matriz)
