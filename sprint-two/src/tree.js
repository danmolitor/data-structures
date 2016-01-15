var Tree = function(value) {
    var newTree = {};
    newTree.value = value;
    _.extend(newTree, treeMethods);

    // your code here
    newTree.children = []; // fix me

    return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value) {
    //We push the new child instance created through Tree, into the children array.
    this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
    //Check if the current value is equal to the target.
    //If it is, return true.
    if (this.value === target) {
        return true;
    }
    //Iterate through the current instance's children.
    //Resursively pass in each child and check if its value is equal to target.
    for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].contains(target)) {
            return true;
        }
    }
    //If it does not contain, return false.
    return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
