let canFinishCourse:boolean = true;
let visitedCourse:number[];
let coursePreReqMap: Map<number, number[]>;
let WHITE:number = 1;
let GRAY:number = 2;
let BLACK:number = 3;
let topologicalSort:number[];
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    canFinishCourse = true;
    coursePreReqMap = new Map();
    visitedCourse = [];
    topologicalSort = [];

    if(prerequisites.length == 0){
        return canFinishCourse;
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
console.log(coursePreReqMap);
    for(let i=0; i<numCourses; i++){
        if(visitedCourse[i] == WHITE && (coursePreReqMap.get(i).length != 0)){
            dfs(i);
        }
    }
    return canFinishCourse;
};

function dfs(course:number){
    visitedCourse[course] = GRAY;
    for(let co of coursePreReqMap.get(course)){
        if(visitedCourse[co] == WHITE && (coursePreReqMap.get(co).length != 0)){
            dfs(co);
        } else if(visitedCourse[co] == GRAY) {
            canFinishCourse = false;
            return;
        }
    }
    visitedCourse[course] = BLACK;
}

console.log(canFinish(3,[[1,0],[2,0],[0,2]]));