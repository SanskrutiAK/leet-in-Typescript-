function generateParenthesis(n: number): string[] {
let dp:string[][] = [];
dp[0]=[];
dp[1]=["()"];
for(let i=2; i<=n; i++){
    let set:Set<string> = new Set();
    for(let comb of dp[i-1]){
        let newComb1 = comb.concat("()");
        let newComb2 = "(".concat(comb).concat(")");
        let newComb3 = "()".concat(comb);
        set.add(newComb1);
        set.add(newComb2);
        set.add(newComb3);
    }
    dp[i] = Array.from(set);
}
return dp[n];
};
console.log(generateParenthesis(2));