class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

let numGoodnodes:number = 0;
 function goodNodes(root: TreeNode | null): number {
     let compVal = root.val;
     dfs(root, compVal);
     return numGoodnodes;

};

function dfs(node: TreeNode, compVal:number){
    if(node.val >=compVal){
        ++numGoodnodes;
    }
    if(node.left != null){
        dfs(node.left, Math.max(node.val, compVal));
    }
    if(node.right != null){
        dfs(node.right, Math.max(node.val, compVal));
    }
}

let root: TreeNode = new TreeNode(3);
let node1: TreeNode = new TreeNode(3);
let node2: TreeNode = new TreeNode(4);
let node3: TreeNode = new TreeNode(2);


root.left = node1;
root.right = null;
node1.left = node2;
node1.right = node3;

console.log(goodNodes(root));