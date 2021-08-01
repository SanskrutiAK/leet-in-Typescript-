function numIslands(grid: string[][]): number {

    if (grid == null || grid.length == 0) {
        return 0;
    }

    let numIslands:number = 0;
    let nRow:number = grid.length;
    let nCol:number = grid[0].length;

    for(let r=0; r<nRow; r++){
        for(let c=0; c< nCol; c++){
            if (grid[r][c] === "1"){
                numIslands++;
                dfs(grid,r,c);
            }
        }
    }
    return numIslands;
};

function dfs(grid:string[][], r:number,c:number){
    let nRow:number = grid.length;
    let nCol:number = grid[0].length;

    if(r< 0|| c<0|| r>=nRow || c>=nCol || grid[r][c] == "0"){
        return;
    }
    grid[r][c] = "0";
    dfs(grid,r-1,c);
    dfs(grid,r+1,c);
    dfs(grid,r,c-1);
    dfs(grid,r,c+1);
}
let grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
console.log(numIslands(grid));