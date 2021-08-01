let area:number = 0;
function maxAreaOfIsland(grid: number[][]): number {
    let maxArea:number = 0;
    let nCol:number = grid[0].length;
    let nrow:number = grid.length;
    for(let r =0 ;r < nrow; r++){
        for(let c=0; c < nCol; c++){
            if(grid[r][c] == 1){
                area=0;
                dfsArea(grid,r,c);
                if(area>maxArea){
                    maxArea = area;
                }
            }
        }
    }
    return maxArea;
};

function dfsArea(grid:number[][],r:number ,c:number){
let nCol:number = grid[0].length;
let nrow:number = grid.length;
if( r<0 || c<0 ||r>=nrow || c>=nCol || grid[r][c]==0){
    return;
}
area ++;
grid[r][c] = 0;
dfsArea(grid, r-1, c );
dfsArea(grid, r+1, c );
dfsArea(grid, r, c-1 );
dfsArea(grid, r, c+1 );
}

let islandGrid =[[0,0,0,0,0,0,0,0]]

console.log(maxAreaOfIsland(islandGrid));