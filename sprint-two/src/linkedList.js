var LinkedList = function() {
    var list = {};
    list.head = null;
    list.tail = null;

    list.addToTail = function(value) {
      //Create a variable to store the node that is created through Node(value);
        var node = Node(value);

      //Check if there is no list.head, meaning there is no list,
      //and if there is none, list.head becomes node.
        if (!list.head) {
            list.head = node;
        }

      //If there is already a list.tail, we assign the list.tail next property to the node.
        if (list.tail) {
            list.tail.next = node;
        }

      //We then assign the list.tail to the node itself.
        list.tail = node;
    };


    list.removeHead = function() {

      //Store the list.head value.
        var currentValue = list.head.value;

      //Reassign list.head to the next property.
        list.head = list.head.next;

      //return the value;
        return currentValue;
    };

    list.contains = function(target) {
         var current = list.head;

         //while there are nodes in the list.
         while (current){

        //if the current nodes value is equal to our target, we return true.
          if (current.value === target){
            return true;
          }

        //we iterate using the while loop (if there are still nodes) through the list
        //by assigning current to current.next.
          current = current.next;
         }

        //Return false if there is no match.
         return false;
    };

    return list;
};

var Node = function(value) {
    var node = {};

    node.value = value;
    node.next = null;

    return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//Remove and Add are O(1)
//Contains is O(n)