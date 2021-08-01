function spiralOrder(matrix: number[][]): number[] {
let solution:number[] = [];
let nrow:number = matrix.length-1;
let ncol:number = matrix[0].length-1;
let rowStart = 0;
let colStart = 0;
let row=0;
let col=0;
while(rowStart<=nrow && colStart<=ncol){
    //first row
    for(let j = colStart; j<=ncol; j++) {
        solution.push(matrix[rowStart][j]);
    }
    rowStart++;

    //last column
    for(let i = rowStart; i<=nrow; i++){
        solution.push(matrix[i][ncol]);
        row = i;
    }
    ncol--;

    //last Row
    if(colStart<=ncol){
        for(let j = ncol; j>=colStart; j--){
            solution.push(matrix[nrow][j]);
        }
        nrow--;
    }

    if(rowStart<=nrow){
        for(let i = nrow; i>=rowStart; i--){
            solution.push(matrix[i][colStart]);
        }
        colStart++;
    }
}

return solution;
};

console.log(spiralOrder([[1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]]));