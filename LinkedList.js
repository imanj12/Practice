class Node {
   constructor(value) {
      this.value = value
      this.next = null
      this.previous = null
   }
}

class LinkedList {
   constructor() {
      this.head = null
      this.tail = null
      this.size = 0
   }

   printList() {
      let arr = []
      let currentNode = this.head
      while (currentNode) {
         arr.push(currentNode.value)
         currentNode = currentNode.next
      }
      console.log(arr)
   }

   append(value) {
      let node = new Node(value)
      if (this.head === null) {
         this.head = node
         this.tail = node
      } else {
         node.previous = this.tail
         this.tail.next = node
         this.tail = node
         this.size++
      }
   }

   remove(value) {
      let currentNode = this.head
      while (currentNode) {
         if (currentNode.value === value) {
            if (currentNode === this.head && currentNode === this.tail) {
               this.head = null
               this.tail = null
            } else if (currentNode === this.head) {
               this.head = this.head.next
               this.head.previous = null
            } else if (currentNode === this.tail) {
               this.tail = this.tail.previous
               this.tail.previous = null
            } else {
               currentNode.previous.next = currentNode.next
               currentNode.next.previous = currentNode.previous
               currentNode = null
            }
            this.size--
            return true 
         } else {
            currentNode = currentNode.next
         }
      }
      return false
   }

   insertAfter(value) {

   }

   insertBefore(value) {

   }

   index(i) {

   }

}

const ll = new LinkedList()
ll.append(5)
ll.append(10)
ll.append(15)
ll.printList()
ll.remove(10)
ll.printList()
