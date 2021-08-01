function spiralOrder(matrix: number[][]): number[] {
let solution:number[] = [];
let visited:boolean[][] = [];
let iteration:number = 1;
let nrow:number = matrix.length;
let ncol:number = matrix[0].length;
let row=0;
let col=0;
for(let i=0; i<nrow; i++){
    let newArr = [];
    for(let j=0; j<ncol; j++){
        newArr.push(false);
    }
    visited.push(newArr);
}

/**
 * if(iteration%2 == 0) ==> Traverse column
 * if(iteration%2 == 0) ==> Traverse row
 */
 solution.push(matrix[0][0]);
if(iteration%2 == 0){
    console.log("HERE");
    if(row == 0){
        while(row<=nrow ){
            row++;
            if(visited[row][col] == true){
                break;
            }
            solution.push(matrix[row][col]);
            visited[row][col] = true;
        }
    }
    if(row == nrow-1){
        while(row>=0){
            row++;
            if(visited[row][col] == true){
                break;
            }
            solution.push(matrix[row][col]);
            visited[row][col] = true;
        }
    }
    iteration++;
}else{
    if(col == 0){
        while(col<=ncol-1){
            col++;
            if(visited[row][col] == true){
                break;
            }
            solution.push(matrix[row][col]);
            visited[row][col] = true;
        }
    }else if(col == ncol-1){
        while(col>=0){
            col--;
            if(visited[row][col] == true){
                break;
            }
            solution.push(matrix[row][col]);
            visited[row][col] = true;
        }
    }
    iteration++;
}


return solution;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));