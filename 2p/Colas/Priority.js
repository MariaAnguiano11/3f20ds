function Cola() {
    let array = [];
    this.enqueue = function (element) {array.push(element); }
    this.dequeue = function () {return array.shift(); }
    this.front =   function () { return array[0]; }
    this.isEmpty = function () { return array.length == 0; }
    this.size =    function () { return array.length; }
    this.show =    function () { console.log(array.toString()); }
}
function ColaP() {
    let array = [];
    function ColaE(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function (element, priority) {
        let ColaE = new ColaE(element, priority);
        let added = false;
        for (let i = 0; i < array.length; i++) {
            if (ColaE.priority < array[i].priority) {
                array.splice(i, 0, ColaE);
                added = true;
                break;
            }
        }
        if (!added) array.push(ColaE);  
    }
    this.dequeue = function () {return array.shift(); }
    this.front = function () { return array[0]; }
    this.isEmpty = function () { return array.length == 0; }
    this.size = function () {return array.length; }
    this.show = function () {
        for (let i = 0; i < array.length; i++) {
            console.log(`${array[i].element} -
            ${array[i].priority}`);
        }
    };
}
function e(){
    let ColaP = new ColaP();
    ColaP.enqueue("Nombre 1",2);
    ColaP.enqueue("Nombre 2",3);
    ColaP.enqueue("Nombre 3",2);
    ColaP.enqueue("Nombre 4",1);
    ColaP.show();
}
e();


