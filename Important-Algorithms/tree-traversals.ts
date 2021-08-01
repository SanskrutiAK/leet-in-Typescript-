class TreeNode {
    val:number;
    left: TreeNode;
    right: TreeNode;
    constructor(val:number){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function inorderTraversal(node: TreeNode){
    if(node == null){
        return
    }
    inorderTraversal(node.left);
    console.log(node.val);
    inorderTraversal(node.right);
}

function preorderTraversal(node: TreeNode){
    if(node == null){
        return
    }
    console.log(node.val);
    preorderTraversal(node.left);
    preorderTraversal(node.right);
}

function postorderTraversal(node: TreeNode){
    if(node == null){
        return
    }
    postorderTraversal(node.left);
    postorderTraversal(node.right);
    console.log(node.val);
}

function levelOrderTraversal(node: TreeNode){
    if(node == null){
        console.log("Height of the tree is 0");
        return;
    }
    let queue: TreeNode[] = [];
    queue.unshift(node);
    let heightLeft = 1;
    let heightRight = 1;
    while(queue.length > 0){
        let node = queue.pop();
        console.log(node.val);
        if(node.left!= null){
            queue.unshift(node.left);
            heightLeft++;
        }
        if(node.right!= null){
            queue.unshift(node.right);
            heightRight++;
        }
    }
    console.log("Maximum Height is "+ Math.max(heightRight, heightLeft));

}

function ReverseLevelOrderTraversal(node: TreeNode){
    let queue:TreeNode[] = [];
    let reverseLevelOrder:TreeNode[] = [];
    queue.push(node);
    while(queue.length>0){
        let node = queue[0];
        queue.shift();
        reverseLevelOrder.push(node);
        if(node.right!=null){
            queue.push(node.right);
        }
        if(node.left!= null){
            queue.push(node.left);
        }
    }
    while(reverseLevelOrder.length > 0){
        console.log(reverseLevelOrder.pop().val);
    }
}

let root: TreeNode = new TreeNode(1);
let node1: TreeNode = new TreeNode(2);
let node2: TreeNode = new TreeNode(3);
let node3: TreeNode = new TreeNode(4);
let node4: TreeNode = new TreeNode(5);
let node5: TreeNode = new TreeNode(6);
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;


console.log("InOrder Traversal");
inorderTraversal(root);
console.log("=================");

console.log("PreOrder Traversal");
preorderTraversal(root);
console.log("=================");

console.log("PostOrder Traversal");
postorderTraversal(root);
console.log("=================");

console.log("levelOrder Traversal");
levelOrderTraversal(root);
console.log("=================");

console.log("ReverseOrder Traversal");
ReverseLevelOrderTraversal(root);
console.log("=================");