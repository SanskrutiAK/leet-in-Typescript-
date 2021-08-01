function findDiagonalOrder(mat: number[][]): number[] {
let solution:number[] = [];
if(mat == null || mat.length == 0){
    return solution;
}
let row:number = mat.length;
let col:number = mat[0].length;

for(let d = 0; d< (row+col)-1; d++){
    let interemdiate:number[] = [];
    let r:number = d < col ? 0: (d - col + 1);
    let c:number = d < col ? d: (col - 1);

    while(r<row && c>-1){
        interemdiate.push(mat[r][c]);
        r++;
        c--;
    }
    if(d%2 === 0){
        interemdiate.reverse();
    }
    solution.push(...interemdiate);
}
return solution;
};

console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]));