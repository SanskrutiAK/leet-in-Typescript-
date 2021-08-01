let stack:number[] = [];
let visitedArr:boolean[]=[];

class Graph{
    nv:number;
    graphMap: Map<number, number[]> = new Map();
    constructor(v:number){
        for(let i=0; i<v; i++){
            this.graphMap.set(i,[]);
        }
    }
    addEdge(fromV:number, toV:number){
        this.graphMap.get(fromV).push(toV);
    }
}

function initGraph(numVertex){
    for(let i =0; i<numVertex; i++){
        visitedArr.push(false);
    }
}
function topologicalSortdfs(vertex:number, graphMap: Map<number, number[]> ){
    visitedArr[vertex] = true;
    for(let v of graphMap.get(vertex)){
        if(visitedArr[v] != true){
            topologicalSortdfs(v, graphMap);
        }
    }
    stack.unshift(vertex);
}

function topologicalSort(graphMap: Map<number, number[]>){
    for(let i = 0; i<graphMap.size; i++){
        if(visitedArr[i]!= true){
            topologicalSortdfs(i, graphMap);
        }
    }
    console.log(stack)
}

let gt: Graph = new Graph(6);
gt.addEdge(5, 2);
gt.addEdge(5, 0);
gt.addEdge(4, 0);
gt.addEdge(4, 1);
gt.addEdge(2, 3);
gt.addEdge(3, 1);

initGraph(6);
topologicalSort(gt.graphMap);