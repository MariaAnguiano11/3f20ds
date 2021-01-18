class Columna {
    constructor(DUsuario)
    {
        this.DUsuario = DUsuario;
    }
    eligirColuma()
   {
       this.DUsuario =  Number(prompt("Numero de colunma"));
       while (this.DUsuario <  1 || this.DUsuario > 3)
       {
           alert("La matriz es de 3x3, ingresa de nuevo un dato");
           this.DUsuario = Number(prompt("Numero de colunma"))
       }
       return this.DUsuario;
   }
   Columna(matriz)
   {
       let ind = this.DUsuario -1;
       console.log('usted ha seleccionado la columna ',this.DUsuario,':')
       let columna = matriz.map(function(matriz)
       {
           console.log(matriz[ind]);
       });
   }
}
let matriz = [[1,2,3], [4,5,6], [7,8,9]];
let miMatriz = new Columna();
miMatriz.eligirColuma();
miMatriz.Columna(matriz);


















