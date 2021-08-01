function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
let answer:number[] = [];
let primeFractMap:Map<number, string> = new Map();

for(let j:number = arr.length-1; j>=0; j--){
    for(let i = 0; i<=j; i++){
        primeFractMap.set((arr[i]/arr[j]),`${arr[i]}/ ${arr[j]}`);
    }
}
let mapValues:number[] = Array.from(primeFractMap.keys());
mapValues.sort();
let fractionAnswer = primeFractMap.get(mapValues[k-1]);
answer = fractionAnswer.split("/").map((num) =>{
    return parseInt(num);
});
return answer;
};

console.log(kthSmallestPrimeFraction([1,7], 1));