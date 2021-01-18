class Grafo{
    constructor(){
        this.vertices = [];
        this.sizeOfvertex = 0;
        this.sizeOfedges = 0;
        this.adjmatrix = [];
    }

    addVertex(nodo){
        if(this.vertices.includes(nodo)){
            return -1;
        }
        this.vertices.push(nodo);
        this.sizeOfvertex++;
        this.adjmatrix = new Array(this.sizeOfvertex);
        for(let i = 0; i < this.sizeOfvertex; i++){
            this.adjmatrix[i] = new Array(this.sizeOfvertex);
        }
        this.fill();
        return this.vertices;
    }
    
    addEdge(nodo1, nodo2){
        if(this.adjmatrix[this.vertices.indexOf(nodo1)][this.vertices.indexOf(nodo2)] !== 1){
            this.adjmatrix[this.vertices.indexOf(nodo1)][this.vertices.indexOf(nodo2)] = 1;
            this.sizeOfedges++;
            return this.adjmatrix;
        }else{
            this.adjmatrix[this.vertices.indexOf(nodo1)][this.vertices.indexOf(nodo2)]++;
            this.sizeOfedges++;
            return this.adjmatrix;
        }
    }
    
    fill(){
        for(let i = 0; i < this.sizeOfvertex; i++){
            for(let j = 0; j < this.sizeOfvertex; j++){
                if(this.adjmatrix[i][j] === undefined ){
                    this.adjmatrix[i][j] = 0
                }else{
                    continue;
                }
            }
        }
    }

    order(){
        return this.sizeOfedges;
    }
}

let G = new Grafo();
G.addVertex(5);
G.addVertex(4);
G.addVertex(7);
G.addVertex(9);
G.addVertex(8);
G.addVertex(6);
G.addEdge(5, 4);
G.addEdge(4, 5);
G.addEdge(5, 5);
G.addEdge(5, 5);
G.addEdge(9, 5);
G.addEdge(5, 9);
G.addEdge(4, 7);
G.addEdge(7, 4);
G.addEdge(8, 9);
G.addEdge(9, 8);
G.addEdge(4, 6);
G.addEdge(6, 4);
G.fill();
console.log(G.adjmatrix);
console.log('El orden es: '+G.order());