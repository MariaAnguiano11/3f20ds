let inicio = 1;
let i = 1;
let días = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for (i; i <= 11; i++) {
    if(inicio <= 7)
        inicio += 1;
    else if (inicio > 7)
        inicio = 1;
}
console.log('En 11 días será ' + días[inicio]);