function isValid(s: string): boolean {
    let isValid:boolean = true;
    let paraStack: string[] = [];
    for(let i=0; i<s.length; i++){
        let curChar:string =(s.charAt(i)).toString();
        switch(curChar){
            case "(" :paraStack.push(curChar);
                break;
            case "[" :paraStack.push(curChar);
                break;
            case "{" :paraStack.push(curChar);
                break;
            case ")" :if(paraStack.pop() != "("){
                        isValid = false;
                        return isValid;
                    }
                break;
            case "]" :if(paraStack.pop() != "["){
                        isValid = false;
                        return isValid;
                    }
                break;
            case "}" :if(paraStack.pop() != "{"){
                        isValid = false;
                        return isValid;
                    }
                break;
        }
    }
    if(paraStack.length != 0){
        isValid = false;
        return isValid;
    }
    return isValid;
};

console.log(isValid(""));