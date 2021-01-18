class Node{
    constructor(data){
        this.data = data;
        this.children = [];
    }
}

class Arbol{
    constructor(){
        this.root = null;
    }

    addNode(dato, parentNode){
        let node = new Node(dato);
        let parent = parentNode ? this.BFS(parentNode) : null;

        if(parent){
            parent.children.push(node);
        }else{
            if(!this.root){
                this.root = node;
            }else{
                return 'El nodo ya existe';
            }
        }
    }

    BFS(dato){
        let cola = [this.root];
        let _node = null;

        this.RecorrerBFS((node) => {
          if (node.data == dato)
            _node = node;
        })
    
        return _node;
    }

    RecorrerBFS(cb){
        let cola = [this.root];
        while(cola.length){
            let node = cola.shift();
            if(cb){
                cb(node)
            }
            for(let i = 0; i < node.children.length; i++){
                cola.push(node.children[i]);
            }
        }
    }
}

let A = new Arbol();
A.addNode('a');
A.addNode('b', 'a');
A.addNode('c', 'a');
A.addNode('d', 'b');
A.addNode('e', 'b');
A.addNode('f', 'c');
A.addNode('g', 'c');
A.recorrerBFS((node) => {console.log('Nodo actual: ', node)});