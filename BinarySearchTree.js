class BinarySearchTree {
   constructor() {
      this.root = null
   }

   insertNode (data, left = null, right = null) {
      let node = {
         data,
         left,
         right
      }

      let currentNode

      if (!this.root) {
         this.root = node
      } else {
         currentNode = this.root
         while (currentNode) {
            if (data < currentNode.data) {
               if (!currentNode.left) {
                  currentNode.left = node
                  break
               } else {
                  currentNode = currentNode.left
               }
            } else if (data > currentNode.data) {
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

   removeNode (data) {
      if (!this.root) {
         console.log('Tree is empty!')
      } else {
         let currentNode = this.root
         while (currentNode) {
            if (data < current) {

            }
         }
      }
   }

}
