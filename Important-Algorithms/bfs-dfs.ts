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

let visited:boolean[]=[];
function initGraph(numVertex){
    for(let i =0; i<numVertex; i++){
        visited.push(false);
    }
}

function bfs(graphMap:Map<number,number[]>, start:number){
let queue:number[] = [];
let visited:boolean[] = [];
let numverVertex:number = graphMap.size
let traversal:number[] = [];
for(let i=0; i<numverVertex; i++){
    visited.push(false);
}
visited[start] = true;
queue.push(start);
while(queue.length != 0){
    let conVertex:number = queue.pop();
    visited[conVertex] = true;
    traversal.push(conVertex);
    let vNeighbours = graphMap.get(conVertex);
    for(let vert of vNeighbours){
        if(visited[vert] === false)
            queue.unshift(vert);
    }
}
for(let vertex of traversal){
    console.log(vertex);
}
}

function dfs(graphMap:Map<number,number[]>, start:number){
    console.log(start);
    visited[start]=true
    for(let vert of graphMap.get(start)){
        if(visited[vert] != true){
            dfs(graphMap, vert);
        }
    }
}

let g: Graph = new Graph(4);
k
let graphMap:Map<number, number[]> = g.graphMap;
console.log("BREATH FIRST SEARCH");
console.log("===================");
bfs(graphMap, 2);
initGraph(4);
console.log("DEPTH FIRST SEARCH");
console.log("===================");
dfs(graphMap, 2);