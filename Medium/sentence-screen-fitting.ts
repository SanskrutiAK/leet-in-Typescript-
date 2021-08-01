function wordsTyping(sentence: string[], rows: number, cols: number): number {
    let numSentence :number = 0;
    let remCols:number = cols;
    //case where the size of screen canot even fit one entire sentence
    if(sentence[0].length > cols){
        return numSentence;
    }

    while( rows > 0){
        for(let word of sentence){
            if(remCols >= word.length){
                remCols-=word.length;
                remCols--;
                continue;
            }
            if(rows > 0){
                rows --;
                remCols = cols;
                remCols-=word.length;
                remCols--;
            }
            if(rows == 0){
                return numSentence;
            }
        }
        numSentence ++;
    }
    return numSentence;
};
console.log(wordsTyping(["f","p","a"],8,7));