function deleteAndEarn(nums: number[]): number {
    let maxEarning:number = 0;
    let count:number[] = [];
    let dp:number[] = [];
    for(let i=0; i<10000; i++){
        count[i] = 0;
        dp[i] = 0;
    }

    for(let n of nums){
        count[n]++;
    }
    dp[1] = count[1];
    for(let i=2; i<10000; i++){
        let price:number = i*count[i];
        dp[i] = Math.max(price+dp[i-2], dp[i-1]);
    }
    maxEarning = dp[9999]

    return maxEarning;
};

let nums = [2,2,3,3,3,4];
console.log(deleteAndEarn(nums));