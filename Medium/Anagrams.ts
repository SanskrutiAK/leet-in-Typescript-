function groupAnagrams(strs: string[]): string[][] {
let anagrams:string[][] = [];
let anagramsMaps:Map<string,string[]>= new Map();
for( let word of strs){
    let sortWord = [...word].sort().join("");
    if(anagramsMaps.has(sortWord)){
        anagramsMaps.get(sortWord).push(word);
    } else {
        anagramsMaps.set(sortWord, [word]);
    }
}
anagrams = Array.from(anagramsMaps.values());
return anagrams;
};

let strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs));