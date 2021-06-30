function isPalindrome(x: number): boolean {
    let palindrome:boolean = false;
    let ntReverse:number = x;
    let reverse:number = 0;
    if(x < 0){
        return palindrome;
    }
    while(x >= 1) {
        reverse *= 10;
        reverse += x%10;
        x = Math.floor(x/10);
    }
    if(reverse === ntReverse){
        palindrome = true;
    }
    return palindrome;
};

console.log(isPalindrome(1));