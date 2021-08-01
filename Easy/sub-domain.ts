function subdomainVisits(cpdomains: string[]): string[] {
let sdVisits:string[] = [];
let dsVisitMap: Map<string,number> = new Map();
for(let domain of cpdomains){
    let map:string[] = domain.split(' ');
    let countDomain:number = parseInt(map[0]);
    let domains:string[] = map[1].split('.');
    let domainConstruct ="";
    for(let i=domains.length-1; i>=0; i--){
        domainConstruct=`${domains[i]}.${domainConstruct}`;
        if(dsVisitMap.has(domainConstruct)){
            dsVisitMap.set(
                domainConstruct,
                dsVisitMap.get(domainConstruct)+countDomain)
            ;
        }else{
            dsVisitMap.set(domainConstruct, countDomain);
        }
    }
}
console.log(dsVisitMap);
return sdVisits;
};

console.log(subdomainVisits(["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]));
