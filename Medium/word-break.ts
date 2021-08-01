function wordBreak(s: string, wordDict: string[]): boolean {
    let isPossible = false;
    let disct:Set<string> = new Set(wordDict);
    let dp:boolean[]=[];
    for(let i=0; i<=s.length; i++){
        dp[i]=false;
    }
    dp[0]=true;
    for(let i=1; i<=s.length; i++){
        for(let j=0; j<i; j++){
            if(dp[j] && disct.has(s.substring(j,i))){
                console.log(s.substring(j,i));
                dp[i]=true;
                break;
            }
        }
    }
    console.log(dp);
    isPossible = dp[s.length];
    return isPossible;
};
console.log(wordBreak("applepenapple",["apple","pen"]));