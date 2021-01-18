class Transp
{
    Transponer (M)
    {
     const MTranspuesta = M[0].map((_, colIndex)=>M.map(row => row[colIndex]))
     console.log("Matriz de inicio = ", M)
     console.log(M.toString())
     console.log("Matriz final", MTranspuesta);
     console.log(MTranspuesta.toString());

    }
}
    const matriz = [[1,2,3,4], [5,6,7,8], [9,10,11,12]];
    const a = new Transp();
    a.Transponer(matriz);


