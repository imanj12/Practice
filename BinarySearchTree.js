class BinarySearchTree {
   constructor() {
      this.root = null
   }

   // accepts value, returns true if insertion successful, false if not
   insert (value) {
      if (value.typeof === 'number') {
         // create node object to be inserted
         let newNode = {
            value,
            left: null,
            right: null
         }

         if (this.root === null) {
            // if tree is empty, insert as root node
            this.root = newNode
         } else {
            // search for logical place for new node by BST rules: 
            // traverse left if insert value is smaller, right if bigger, no duplicates, repeat until empty spot found
            let currentNode = this.root
            while (currentNode) {
               if (value < currentNode.value) {
                  if (currentNode.left === null) {
                     currentNode.left = newNode
                     return true
                  } else {
                     currentNode = currentNode.left
                  }
               } else if (value > currentNode.value) {
                  if (currentNode.right === null) {
                     currentNode.right = newNode
                     return true
                  } else {
                     currentNode = currentNode.right
                  }
               } else {
                  console.log('Node already exists - No duplicate nodes allowed')
                  return false
               }
            }
         }
      } else {
         console.log('Insert failed - Can only insert numbers')
         return false
      }
   }

   // accepts value, returns null or found node object
   search (value) {
      if (this.root === null) {
         console.log('Tree is empty!')
         return null
      } else {
         let currentNode = this.root
         while (currentNode) {
            if (value === currentNode.value) {
               return currentNode
            } else if (value < currentNode.value) {
               currentNode = currentNode.left
            } else if (value > currentNode.value) {
               currentNode = currentNode.right
            }
         }
         console.log("No node with that value!")
         return null
      }
   }

   // accepts value, searches by value, then removes found node object, returns true if successful, false if not
   remove (value) {
      let currentNode = searchNode(value)
      if (currentNode) {
         if (currentNode.left === null && currentNode.right === null) {
            // node to be removed has no children
            currentNode = null
            return true
         } else if (currentNode.left != null && currentNode.right === null) {
            // has one left child branch, lifts this child branch up in place
            currentNode.value = currentNode.left
            return true
         } else if (currentNode.left === null && currentNode.right != null) {
            // has one right child, lifts this child branch up in place
            currentNode.value = currentNode.right
            return true
         } else {
            // has two children, finds minNode, removes it, then replaces currentNode value with minNode value
            let minNodeValue = findMinNode(currentNode).value
            removeNode(minNodeValue)
            currentNode.value = minNodevalue
            return true
         }
      } else {
         return false
      }
   }

   // helper for removeNode
   // accepts node object, no return
   findMinNode (node) {
      // always start search for min node from right branch of input node
      node = node.right
      if (node.left === null) {
         return node
      } else {
         return findMinNode(node.left)
      }
   }

}
