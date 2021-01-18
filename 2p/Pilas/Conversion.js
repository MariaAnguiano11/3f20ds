const Con = (n, b) => {
    let P = [], result = [];
    while(n > 0){
        P.push(n % b);
        n = Math.floor(n / b);
    }
    while(P.length > 0){ result.push(P.pop()); }
    return result.join('');
}
const numero = 50, base = 2;
console.log(Con(numero, base));