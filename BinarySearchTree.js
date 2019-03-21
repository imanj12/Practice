class BinarySearchTree {
   constructor() {
      this.root = null
   }

   insertNode (value, left = null, right = null) {
      // create node object - possibly use seperate class for this? Node class?
      let node = {
         value,
         left,
         right
      }

      let currentNode

      if (this.root === null) {
         this.root = node
      } else {
         currentNode = this.root
         while (currentNode) {
            if (value < currentNode.value) {
               if (!currentNode.left) {
                  currentNode.left = node
                  break
               } else {
                  currentNode = currentNode.left
               }
            } else if (value > currentNode.value) {
               if (!currentNode.right) {
                  currentNode.right = node
                  break
               } else {
                  currentNode = currentNode.right
               }
            } else {
               console.log('Node already exists - No duplicate nodes allowed')
            }
         }
      }
   }

   removeNode (value) {
      if (!this.root) {
         console.log('Tree is empty!')
      } else {
         let currentNode = this.root
         while (currentNode) {
            if (value < currentNode.value) {
               currentNode = currentNode.left
            } else if (value > currentNode.value) {
               currentNode = currentNode.right
            } else {
               if (currentNode.left === null && currentNode.right === null) {
                  currentNode.value = null
                  break
               } else if (currentNode.left != null && currentNode.right === null) {
                  currentNode.value = currentNode.left
                  break
               } else if (currentNode.left === null && currentNode.right != null) {
                  currentNode.value = currentNode.right
                  break
               } else {
                  minNodeValue = findMinNode(currentNode)
                  removeNode(minNodeValue)
                  currentNode.value = minNodevalue
                  break
               }
            }
         }
      }
   }

   // helper for removeNode - will return the value of the minimum node
   findMinNode (node) {
      if (node.left === null) {
         return node.value
      } else {
         return findMinNode(node.left)
      }
   }

}
