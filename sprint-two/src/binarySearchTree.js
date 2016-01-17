var BinarySearchTree = function(value) {
    var binarySearchTree = Object.create(BinarySearchTree.prototype);

    binarySearchTree.value = value;
    binarySearchTree.left = null;
    binarySearchTree.right = null;

    return binarySearchTree;
};



BinarySearchTree.prototype.insert = function(passed) {
    // var BST = BinarySearchTree(passed);
    if (passed > this.value) {
        if (this.right === null) {
            this.right = BinarySearchTree(passed);
        } else {
            this.right.insert(passed);
        }
    }
    if (passed < this.value) {
        if (this.left === null) {
            this.left = BinarySearchTree(passed);
        } else {
            this.left.insert(passed);
        }
    }
};

BinarySearchTree.prototype.contains = function(value) {
    if (this.value === value) {
        return true;
    }
    else if (value < this.value) {
        if (this.left !== null) {
            return this.left.contains(value);
        } else {
            return false;
        }
    } else if (value > this.value) {
        if (this.right !== null) {
            return this.right.contains(value);
        } else {
            return false;
        }
    }
    return false;
    // return found;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null){
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null){
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// Insert === O(n)
// Contains === O(n)
// depthFirstLog === O(n)
