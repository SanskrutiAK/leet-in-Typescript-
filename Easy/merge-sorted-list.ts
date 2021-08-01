class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let ln = new ListNode();
    while(l1 != null || l2 != null){
        
    }
    return ln;
};