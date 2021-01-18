const pal = () =>{
    let cadena=prompt("Ingrese un texto").toLowerCase();
    for (let i=0;i<cadena.length;i++){ 
         if(cadena[i]!=cadena[cadena.length-i-1]) return false;}
    return true; }
if(pal()) alert("Es un Palíndromo");
else alert("No es Palíndromo");