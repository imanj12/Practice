class BinarySearchTree {
   constructor() {
      this.root = null
   }

   // accepts insertion value, returns true if insertion successful, false if not
   insert (value) {
      if (typeof value === 'number') {
         // create node object to be inserted
         let newNode = {
            value,
            left: null,
            right: null
         }

         if (this.root === null) {
            // if tree is empty, insert newNode as root node
            this.root = newNode
            console.log(`Inserted root node: ${this.root.value}`)
         } else {
            // search for logical place for new node by BST rules: 
            // traverse left if insert value is smaller, right if bigger, no duplicates, repeat until empty spot found
            let currentNode = this.root
            while (currentNode) {
               if (value < currentNode.value) {
                  if (currentNode.left === null) {
                     currentNode.left = newNode
                     console.log(`Inserted: ${currentNode.left.value}`)
                     return true
                  } else {
                     currentNode = currentNode.left
                  }
               } else if (value > currentNode.value) {
                  if (currentNode.right === null) {
                     currentNode.right = newNode
                     console.log(`Inserted: ${currentNode.right.value}`)
                     return true
                  } else {
                     currentNode = currentNode.right
                  }
               } else {
                  console.log('Insert failed - No duplicate nodes allowed')
                  return false
               }
            }
         }
      } else {
         console.log(`Insert failed: '${value}' is not a number`)
         return false
      }
   }

   // accepts search value, returns null or found node object
   search (value) {
      if (this.root === null) {
         console.log('No root node!')
         return null
      } else {
         let currentNode = this.root
         while (currentNode) {
            if (value === currentNode.value) {
               console.log(`Search found: ${currentNode.value}`)
               return currentNode
            } else if (value < currentNode.value) {
               currentNode = currentNode.left
            } else if (value > currentNode.value) {
               currentNode = currentNode.right
            }
         }
         console.log(`Search empty: ${value}`)
         return null
      }
   }

   // accepts value, searches by value, then removes found node object, returns true if successful, false if not
   remove (value) {
      let currentNode = this.search(value)
      if (currentNode) {
         if (currentNode.left === null && currentNode.right === null) {
            // node to be removed has no children
            currentNode.value = null
            console.log(`Removed ${value}`)
            return true
         } else if (currentNode.left != null && currentNode.right === null) {
            // has one left child branch, lifts this child branch up in place
            currentNode.value = currentNode.left
            console.log(`Replaced ${value} with ${currentNode.value}`)
            return true
         } else if (currentNode.left === null && currentNode.right != null) {
            // has one right child, lifts this child branch up in place
            currentNode.value = currentNode.right
            console.log(`Replaced ${value} with ${currentNode.value}`)
            return true
         } else {
            // has two children, finds minNode, removes it, then replaces currentNode value with minNode value
            // always start search for minNode from right branch
            let minNodeValue = this.findMinNode(currentNode.right).value
            this.remove(minNodeValue)
            currentNode.value = minNodeValue
            console.log(`Replaced ${value} with ${currentNode.value}`)
            return true
         }
      } else {
         return false
      }
   }

   // helper for removeNode that finds minimum viable node in right subtree of node to be removed (recursive)
   // accepts node object, no return
   findMinNode (node) {
      if (node.left === null) {
         return node
      } else {
         return this.findMinNode(node.left)
      }
   }

   // returns sum of all nodes (recursive)
   sumNodes (currentNode = this.root) {
      if (currentNode === null) {
         return 0
      } else {
         return currentNode.value + this.sumNodes(currentNode.left) + this.sumNodes(currentNode.right)
      }
   }
}


let BST = new BinarySearchTree()

// test insert, remove, search
BST.insert('apple')
BST.insert(10)
BST.insert(5)
BST.insert(15)
BST.insert(20)
BST.insert(13)
BST.remove(10)
BST.search(10)
BST.remove(5)
BST.search(5)

// test summing all nodes
console.log(BST.sumNodes())


