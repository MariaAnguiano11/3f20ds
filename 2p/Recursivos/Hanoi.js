let t1 = 1, t2 = 2, t3 = 3, n = 4;

const hanoi = (n, origen, destino, a) => {
    if(n === 1)   console.log("Cambiar disco " + n + " desde torre " + origen + " a torre " + destino);
    else {
        hanoi(n - 1, origen, a, destino);
        console.log("cambiar disco " + n + " desde torre " + origen + " a torre " + destino);
        hanoi(n - 1, a, destino, origen);
    }
}
hanoi(n, t1, t3, t2);