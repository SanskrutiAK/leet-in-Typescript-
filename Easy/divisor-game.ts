function divisorGame(n: number): boolean {
    let aliceWins:boolean = true;
    let moveChoosen:number = 0;
    let turn = 1;
    while(n>=1){
        //it is alice's turn
        if(turn%2 != 0){
            console.log("Alice Turn");
            if(n == 1){
                aliceWins = false;
            }
        }
        //biggest divisor
        moveChoosen = findTheBiggestDivisor(n);
        console.log(moveChoosen);
        n = n - moveChoosen;
        turn++;
    }
    return aliceWins;
};

function findTheBiggestDivisor(divisor:number): number {
    let gcd = 1;
    for( let i = Math.sqrt(divisor); i > 1; i--){
        if(divisor%i == 0){
            gcd = i;
            break;
        }
    }
    return gcd;

}

console.log(divisorGame(4));