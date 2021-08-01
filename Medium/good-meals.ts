function countPairs(deliciousness: number[]): number {
    let goodMeals:number = 0;
    let mealtypeMap:Map<number,number> = new Map();
    for(let delish of deliciousness){
        if(!mealtypeMap.has(delish)){
            mealtypeMap.set(delish,0);
        }
        let mealcount:number = mealtypeMap.get(delish)+1;
        mealtypeMap.set(delish,mealcount);
    }
    console.log(mealtypeMap);
    for(let delish of deliciousness){
        let diff:number = delish%2;
        if(diff === delish &&( mealtypeMap.get(diff) === 1)){
            continue;
        }
        if(mealtypeMap.has(diff)){
            console.log(mealtypeMap);
            console.log(diff);
            let checkPow = Math.log2(delish+diff)%1;
            console.log(checkPow);
            if(checkPow === 0){
                goodMeals++;
            }
        }
    }
    return goodMeals;
};

console.log(countPairs([1,1,1,3,3,3,7]));