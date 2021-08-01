function countConsistentStrings(allowed: string, words: string[]): number {
let numConsistent:number = 0;
let allowedSet:Set<string> = createSet(allowed);
for(let word of words){
    let wordlen:number = word.length;
    for(let syl of [...word]){
        if(!allowedSet.has(syl)){
            break;
        }
        wordlen--;
    }
    if(wordlen == 0){
        numConsistent++;
    }
}
return numConsistent;
};

function createSet(stringToSet:string): Set<string>{
    let allowedSet:Set<string> = new Set();
    for(let char of [...stringToSet]){
        allowedSet.add(char);
    }
    return allowedSet;
}

function countConsistentStrings2(allowed: string, words: string[]): number {
    let numConsistent:number = 0;
    words.forEach(word =>{
        let isConsistent:boolean = true;
        for(let char of [...word]){
            if(allowed.indexOf(char) === -1){
                isConsistent = false;
                break;
            }
        }
        if(isConsistent === true){
            numConsistent++;
        }
    });
    return numConsistent;
    };
console.log(countConsistentStrings2("abc",["a","b","c","ab","ac","bc","abc"]));