// tsc -t ES2016 --lib "ES2016","DOM" roman-to-integer.ts
function romanToInt(s: string): number {
    let prev:string = null;
    let integer:number = 0;
    let romanmap:Map<string,number> = mapForRomanNumb();
    for(let i=0; i<s.length; i++) {
        let curChar = (s.charAt(i)).toString();
        if(romanmap.get(prev) < romanmap.get(curChar)){
            integer -= romanmap.get(prev);
            integer += romanmap.get(curChar) - romanmap.get(prev);
        }else{
            integer += romanmap.get(curChar);
        }
        prev = (s.charAt(i)).toString();
    }
    return integer;
};
function mapForRomanNumb():Map<string,number> {
    let numsMap = new Map();
    numsMap.set("I",1);
    numsMap.set("V",5);
    numsMap.set("X",10);
    numsMap.set("L",50);
    numsMap.set("C",100);
    numsMap.set("D",500);
    numsMap.set("M",1000);
    return numsMap;
}

console.log(romanToInt("IV"));

