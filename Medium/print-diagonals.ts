function printDiagonalsLTR(Matrix:number[][]){
    let diagMap:Map<number, number[]> = new Map();
    let rowLen:number = (Matrix.length)- 1;
    let colLen:number = (Matrix[0].length) -1;

    for(let i=0; i<=rowLen; i++){
        for(let j=0; j<=colLen; j++){
            if(!diagMap.has(i+j)){
                diagMap.set((i+j), []);
            }
            diagMap.get(i+j).push(Matrix[i][j]);
        }
    }
    console.log(diagMap);
}

function printDiagonalsRTL(Matrix:number[][]){
    let diagMap:Map<number, number[]> = new Map();
    let rowLen:number = (Matrix.length)- 1;
    let colLen:number = (Matrix[0].length) -1;

    for(let i=0; i<=rowLen; i++){
        for(let j=0; j<=colLen; j++){
            if(!diagMap.has(i-j)){
                diagMap.set((i-j), []);
            }
            diagMap.get(i-j).push(Matrix[i][j]);
        }
    }
    console.log(diagMap);
}
let array:number[][] =  [
   [ 1, 2, 3, 4 ],
   [ 5, 6, 7, 8 ],
   [ 9, 10, 11, 12 ],
   [ 13, 14, 15, 16 ],
   [ 17, 18, 19, 20 ]
]
printDiagonalsLTR(array);
printDiagonalsRTL(array);