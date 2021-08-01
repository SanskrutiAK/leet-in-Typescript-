let canFinishCourse:boolean = true;
let visitedCourse:number[];
let coursePreReqMap: Map<number, number[]>;
let WHITE:number = 1;
let GRAY:number = 2;
let BLACK:number = 3;
let topologicalSort:number[];
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    canFinishCourse = true;
    coursePreReqMap = new Map();
    visitedCourse = [];
    topologicalSort = [];

    if(prerequisites.length == 0){
        for(let i = 0; i< numCourses; i ++){
            topologicalSort.push(i);
        }
        return topologicalSort.reverse();
    }

    for(let i=0; i< numCourses; i++){
        coursePreReqMap.set(i,[]);
        visitedCourse[i] = WHITE;
    }
    for(let coursepair of prerequisites){
        let prereq:number = coursepair[1];
        let course:number = coursepair[0];
        coursePreReqMap.get(prereq).push(course);
    }
    for(let i=0; i<numCourses; i++){
        if(visitedCourse[i] == WHITE){
            dfs(i);
        }
    }
    return topologicalSort.reverse();
};

function dfs(course:number){
    visitedCourse[course] = GRAY;
    for(let co of coursePreReqMap.get(course)){
        if(visitedCourse[co] == WHITE ){
            dfs(co);
        } else if(visitedCourse[co] == GRAY) {
            canFinishCourse = false;
            topologicalSort = [];
        }
    }
    if(canFinishCourse){
        visitedCourse[course] = BLACK;
        topologicalSort.push(course);
    }
}

console.log(findOrder(2,[[0,1],[1,0]]));