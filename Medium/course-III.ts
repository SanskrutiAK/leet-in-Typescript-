let isPossible:boolean = true;
let WHITE:number = 1;
let GREY:number = 2;
let BLACK:number = 3;
let adjList:Map<number,number[]>;
let color:Map<number,number>;
let courseSequence:number[];
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    adjList = new Map();
    color = new Map();
    courseSequence = [];
    for(let coursepair of prerequisites){
        let preReq : number = coursepair[1];
        let courseToTake: number = coursepair[0];
        console.log( coursepair );
        if(adjList.get(preReq)){
            adjList.get(preReq).push(courseToTake);
        }else {
            adjList.set(preReq, []);
            if(courseToTake){
                adjList.get(preReq).push(courseToTake)
            }
        }
    }
    console.log(adjList);
    //Initially all the nodes are not unvisited
    for(let i =0; i< numCourses; i++){
        color.set(i,WHITE);
    }

    for(let i = 0 ; i< numCourses; i++){
        if(color.get(i) === WHITE){
            dfs(i);
        }
    }
    return courseSequence.reverse();
};

function dfs(course:number){

    color.set(course, GREY);
    let neighbours:number[] = adjList.has(course) ? adjList.get(course) : [];
    for(let neighbNode of neighbours){
        if(color.get(neighbNode) === WHITE){
            dfs(neighbNode);
        } else if( color.get(neighbNode) === GREY){
            isPossible = false;
        }
    }
    // This is when there is a cycle
    if(!isPossible){
        return; 
    }
    color.set(course, BLACK);
    courseSequence.push(course);
}

let numCourses = 2;
let prerequisites = [[0,1]];

console.log(findOrder(numCourses, prerequisites));