function Cola() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}
function enqueue(element) { this.dataStore.push(element); }
function dequeue() { return this.dataStore.shift();}
function front() { return this.dataStore[0]; }
const back = () => { return this.dataStore[this.dataStore.length - 1];}
const toString = () => {
    let retStr = "";
    for (let i = 0; i < this.dataStore.length; ++i)  retStr += this.dataStore[i] + "\n";
    return retStr;
}
function empty() {
    if (this.dataStore.length == 0)  return true;
    else  return false;
}
function Baile(nombre, s) {
    this.nombre = nombre;
    this.s = s;
}
const dance = (hombre, mujeres) => {
    print("Las parejas de baile son: \n");
    while (!mujeres.empty() && !hombre.empty()) {
        person = mujeres.dequeue();
        print("La bailarina es: " + person.nombre);
        person = hombre.dequeue();
        print("El bailarín es: " + person.nombre + "\n");
    }
}
const print = (element) => { return console.log(element); }

const e = () =>{
    let dMasculino = new Cola();
    dMasculino.enqueue(new Baile("NombreMasculino", "H"));
    dMasculino.enqueue(new Baile("NombreMasculino2", "H"));

    let dMujeres = new Cola();
    dMujeres.enqueue(new Baile("NombreFememnino", "M"));

    dance(dMasculino, dMujeres);
    if (!dMujeres.empty()) print(dMujeres.front().nombre + " en espera para bailar");
      
    if (!dMasculino.empty()) print(dMasculino.front().nombre + " en espera para bailar");
}
e(); 