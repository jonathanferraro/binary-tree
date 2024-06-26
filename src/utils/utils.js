export class Node {
    constructor(val, next=null){
        this.val = val;
        this.next = next
    }
}

export class TreeNode {
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

export class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    enqueue(n) {
        let node = new Node(n)
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }
    
    dequeue() {
        if (this.head == null) {
            return;
        }

        if (this.head.next === null) {
            let val = this.head.val;
            this.head = null;
            this.tail = null;
            return val;
        }
        
        let deletedNode = this.head;
        this.head = this.head.next;
        deletedNode.next = null;
        return deletedNode.val;
        
    }
    
    getFront() {
        if (this.head === null) {
            return null
        } else {
            return this.head.val
        }
    }
    
    getEnd() {
        if (this.tail === null) {
            return null;
        } else {
            return this.tail.val
        }
    }
    
    isEmpty() {
        return this.head == null;
    }
}

// Converts an array to a binary tree
export let arrayToBinaryTree = (arr) => {
    if (arr.length === 0) {
        return null;
    }
    
    if (arr.length === 1) {
        return new TreeNode(arr[0])
    }
    
    let q = new Queue();
    let root = new TreeNode(arr[0])
    q.enqueue(root);
    let idx = 1;
    
    while (idx < arr.length) {
        let cur = q.dequeue();
        if ((idx) < arr.length) {
            let left = new TreeNode(arr[idx]);
            cur.left = left;
            q.enqueue(left);
        }
        
        if ((idx + 1) < arr.length) {
            let right = new TreeNode(arr[idx + 1]);
            cur.right = right;
            q.enqueue(right);
        }
        
        idx += 2;
    }
    
    
    return root;
}


// Converts an array to a tree map representation.
export let formatArrayToTreeMap = (arr) => { 
    let q = new Queue();
    
    let res = {
        name: String(arr[0]),
        children: []
    } 
    
    q.enqueue(res)

    let idx = 1;
    
    while (idx < arr.length) {
        let cur = q.dequeue();
        cur['children'] = [];

        if ((idx) < arr.length) {
            let left = {
                name: String(arr[idx]),
                children: []
            }
            cur['children'].push(left)
            if (arr[idx] !== null) {
                q.enqueue(left);
            }
        }
        
        if ((idx + 1) < arr.length) {
            let right = {
                name: String(arr[idx + 1]),
                children: []
            }
            cur['children'].push(right)
            if (arr[idx + 1] !== null) {
                q.enqueue(right);
            }
        } else {
            let right = {
                name: 'null',
                children: []
            }
            cur['children'].push(right)
        }
        
        
        idx += 2;
    }
    
    
    return res;
}

// Takes a string array and converts it to a JavaScript array format, handling numbers and null values.
export let formatUserStringArrayToArray = (stringArr) => {
    
    // check if string has valid parenthesis
    if (stringArr[0] !== '[' || stringArr[stringArr.length - 1] !== ']') {
      return {error: true, message: 'Invalid format. Please enter an array in the form of [1,2,3,4,null,5,6]'};
    }

    let newArr = stringArr.slice(1,-1);
    newArr = newArr.split(',');

    // check if array has valid length
    if (newArr.length > 400 || newArr[0] == '') {
      return {error: true, message: 'Invalid format. Maximum length is 400.'};
    }

    let res = [];

    for (let i=0; i < newArr.length; i++) {
      let el = newArr[i];
      let val = '';

      // check if element is a number
      if (!isNaN(el)) {
        res.push(parseInt(el));
        continue;
      }

      // check if element is null
      for (let j=0; j < el.length; j++) {

        if (el[j] === ' ') {
          continue;
        }

        val += el[j]

      }

      if (val === 'null') {
        res.push(null);
        continue;
      }

      return {error: true, message: 'Invalid format. Please enter an array in the form of [1,2,3,4,null,5,6]'};
    }

    return {error: false, array: res};
  };
