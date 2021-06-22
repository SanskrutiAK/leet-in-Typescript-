
function twoSumBrut(nums: number[], target: number): number[] {
    let solution:number[] = [];
    for( let i=0; i<nums.length; i++){
        const diffNum: number = target-nums[i];
        const potIndex: number = nums.indexOf(diffNum);
        // if element not present in the array then indexOf returns -1
        if(  potIndex == -1  || potIndex == i){
            continue;
        }
        solution.push(i);
        solution.push(potIndex);
        break;
    }
    return solution;
};

function twoSumOpt1(nums: number[], target: number): number[] {
    let numsMap:Map<number, number> = new Map();
    let solution:number[] = [];
    for( let i=0; i<nums.length; i++){
        const diffNum: number = target-nums[i];
        if(!numsMap.has(diffNum)){
            numsMap.set(nums[i], i);
            continue;
        }
        solution.push(i);
        solution.push(numsMap.get(diffNum));
    }
    return solution;
};

const answerBrut: number[] = twoSumBrut([-1,-2,-3,-4,-5], -8);
console.log(answerBrut);

const answerOpt1: number[] = twoSumOpt1([-1,-2,-3,-4,-5], -8);
console.log(answerOpt1);