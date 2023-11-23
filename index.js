class Node {    
  constructor(value){
      if (!value) {
          throw "Value cannot be null"
      }else{
          this.value = value
      }
  }
}

// const MyNode = new Node('batata')

// console.log('MyNode: ', MyNode);

class BinarySearchTree{
  constructor(){
    this.root = null
  }

  insert(value){
    if (this.root === null){
      this.root = new Node(value)
    } else{
      if(value < this.root.value){
        if (!this.left) {
          this.left = new BinarySearchTree()
          this.insert(value)
        } else {
          this.left.insert(value)
        }
      }
      if(value > this.root.value){
        if (!this.right) {
          this.right = new BinarySearchTree()
          this.right.insert(value)
        } else {
          this.insert(value)
        }
      }
    }
  }
}

const BST = new BinarySearchTree()

BST.insert(2)
BST.insert(1)
BST.insert(3)
BST.insert(4)
console.log('BST: ', BST);