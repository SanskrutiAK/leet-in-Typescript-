// tsc -t ES2016 --lib "ES2016","DOM" roman-to-integer.ts
function longestCommonPrefixBrut(strs: string[]): string {
    let commonPref:string = "";
    //Firts String
    const compString:string = strs[0];
    let curChar:string;
    for(let i=0; i<compString.length; i++) {
        curChar = compString.charAt(i).toString();
        for(let j=0; j< strs.length; j++){
            if(strs[j].charAt(i).toString() !== curChar){
                return commonPref;
            }
        }
        commonPref += curChar;
    }
    return commonPref;
};

console.log(longestCommonPrefixBrut(["dog","docecar","car"]));