function reverse(x: number): number {
    let reverse:number = 0;
    let signflag: boolean = false;
    if(x < 0){
        x *=-1;
        signflag = true;
    }
    while(x >= 1) {
        reverse *= 10;
        reverse += x%10;
        x = Math.floor(x/10);
    }
    if(reverse > Math.pow(2,31)){
        return 0;
    }
    if(signflag === true){
        reverse *= -1;
    }
    return reverse;
};

const rev = reverse(-2147483647);
console.log(rev);