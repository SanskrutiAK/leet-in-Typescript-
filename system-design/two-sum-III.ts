class TwoSum {
    twoSumMap: Set<number>;
    numStream:number[];
    constructor() {
        this.twoSumMap = new Set();
        this.numStream = [];
    }

    add(number: number): void {
        for(let num of this.numStream){
            this.twoSumMap.add(num + number);
        }
        this.numStream.push(number);
    }

    find(value: number): boolean {
        let isPresent: boolean = false;
        if(this.numStream.length == 1){
            return isPresent
        }
        if(this.twoSumMap.has(value)){
            isPresent = true;
            return isPresent;
        }
        return isPresent;
    }
}


var obj = new TwoSum()
obj.add(0)
console.log(obj.find(0));

